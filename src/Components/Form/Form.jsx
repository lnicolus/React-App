import React from "react";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  documentId,
  writeBatch,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";

/* The form updates accordingly to the events inputted by the user, however, it does several validation checks to avoid problems in the buying process.
  Firstly, all the required data must be inputted for the form to validate the data itself.
  Secondly we require a confirmation to ensure the Email address is correct by double input, we do not accept numbers in the name, nor phone numbers with less than 
  10 digits as we use in Buenos Aires. To check out if there are numbers in the string of the name in dataform, I used a RegEx from Starx at 
  https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript which resulted nicely, kudos to him.

  The date and everything related to the orders is displayed in the database at https://console.firebase.google.com/u/1/project/grocery-ecommerce-c1750/firestore/data/
  The order is by default generated, since on reload the cart is lost, as no Local Storage session or user authentication is yet implemented. */

const Form = ({ setOrderId }) => {
  const { cartList, clearCart } = useCartContext();

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const buy = async (e) => {
    e.preventDefault();

    let alerts = document.querySelector("#alerts");
    function alertDisplay(msg) {
      alerts.innerHTML = msg;
      alerts.setAttribute("class", "alert alert-danger");
    }

    let nameValidation = dataForm.name;
    let matches = nameValidation.match(/\d+/g);

    if (dataForm.email !== dataForm.validateEmail) {
      alertDisplay("Mail wrongly validated, try again");
    } else if (matches != null) {
      alertDisplay("Are you a robot? we do not accept numbers in name");
    } else if (dataForm.phone < 1000000000 || dataForm.phone > 9999999999) {
      alertDisplay("Invalid phone number");
    } else {
      alerts.style.display = "none";

      let order = {};

      order.buyer = dataForm;

      order.products = cartList.map((cartItem) => {
        const id = cartItem.id;
        const name = cartItem.name;
        const price = cartItem.price * cartItem.quantity;
        const quantity = cartItem.quantity;
        const date = Timestamp.fromDate(new Date());
        const state = "generated";

        return {
          id,
          name,
          price,
          quantity,
          date,
          state,
        };
      });

      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, order).then((resp) => setOrderId(resp.id));

      /* The following updates the stock in the Firebase data, we use a filter and a native function (documentID) that brings the ID's in the Cloud Firestore Collection 
        comparing them with the ID's in the client cartlist's array of objects, creating a new array in the process.

        writeBatch allows finally updating the stock we brought up in the update comparison by iterating and updating the reference, substracting the quantity in the 
        database (the response brought from the documents) against the quantity in the cartlist.

        Finally, the form is emptied and the changes are committed to the cloud database. */

      const queryCollection = collection(db, "products");

      const updateStock = query(
        queryCollection,
        where(
          documentId(),
          "in",
          cartList.map((it) => it.id)
        )
      );

      const batch = writeBatch(db);

      await getDocs(updateStock)
        .then((resp) =>
          resp.docs.forEach((res) =>
            batch.update(res.ref, {
              stock:
                res.data().stock -
                cartList.find((products) => products.id === res.id).quantity,
            })
          )
        )
        .catch((err) => console.log(err))
        .finally(() =>
          setDataForm({
            email: "",
            phone: "",
            name: "",
            validateEmail: "",
          })
        );
      batch.commit();
      clearCart();
    }
  };

  const [dataForm, setDataForm] = useState({
    email: "fff@gfgg",
    phone: "1234567890",
    name: "Lucas",
    validateEmail: "fff@gfgg",
  });

  return (
    <>
      <form className="itemListWrapper" onSubmit={buy}>
        <input
          required
          maxLength="10"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={dataForm.name}
        />

        <input
          type="number"
          name="phone"
          placeholder="Telephone"
          onChange={handleChange}
          value={dataForm.phone}
        />

        <input
          required
          maxLength="40"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={dataForm.email}
        />
        <input
          required
          maxLength="40"
          type="email"
          name="validateEmail"
          placeholder="Repeat Email"
          value={dataForm.validateEmail}
          onChange={handleChange}
        />

        <button className="btn btn-outline-success btn-block bg-success text-light">
          Generate order
        </button>
        <p className="alert" id="alerts"></p>
      </form>
    </>
  );
};
export default Form;
