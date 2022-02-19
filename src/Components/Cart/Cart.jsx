import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  documentId,
  writeBatch,
  getDocs,
} from "firebase/firestore";
import { useState } from "react";

const Cart = () => {
  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    phone: "",
    name: "",
    validarEmail: "",
  });

  const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext();

  const realizarCompra = async (e) => {
    e.preventDefault();
    
    let nameValidation = dataForm.name

    if (dataForm.email != dataForm.validarEmail) {
      alert('Mail wrongly validated, get your eyes checked')
    } else if (nameValidation.includes(1,2,3,4,5,6,7,8,9,0)){
      alert('Are you a robot? we do not accept numbers in name')
    } else {
    
    let orden = {};

    orden.buyer = dataForm;
    orden.total = sumaTotal();

    orden.products = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price * cartItem.quantity;
      const quantity = cartItem.quantity;

      return {
        id,
        name,
        price,
        quantity,
      };
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, orden).then((resp) => setId(resp.id));

    // actualizar stock

    const queryCollection = collection(db, "products");

    const queryActualizarStock = query(
      // se utiliza para agregar filtros
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
      /* es una función nativa que trae los ID´s en la colección y los compara con los ids en la lista 
          de lo que el cliente compro, creando un nuevo array */
    );

    const batch = writeBatch(db); // otra función nativa que nos permite updatear, en este caso la voy a utilizar para updatear stock

    await getDocs(queryActualizarStock) // trae un array de varios documentos, los trae segun lo filtrado, solo los documentos de cuyos ID estén en el carrito de compra
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            // itera y actualiza la referencia, luego resta la cantidad que esta en cartlist sobre esa respuesta
            stock:
              res.data().stock -
              cartList.find((products) => products.id === res.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err))
      .finally(
        () => 
        setDataForm({
          email: "",
          phone: "",
          name: "",
          validarEmail: "",
        })
      );
    batch.commit();

  }
  }

    const handleChange = (event) => {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.value,   
      });
    };

    console.log(dataForm);
 

  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          <div className="itemListWrapper">
            {cartList.map((produ) => (
              <>
                <li className="list-unstyled">
                  <h3>{produ.name}</h3>
                  <li className="list-unstyled">
                    Price by kg: ${produ.price}{" "}
                  </li>
                  <li className="list-unstyled">
                    {" "}
                    Your order: {produ.quantity}Kgs
                  </li>
                </li>
                <button
                  className="btn btn-outline-success btn-block bg-success text-light"
                  onClick={() => borrarItem(produ.id)}
                >
                  Erase item
                </button>
              </>
            ))}

            {`Your total is $${sumaTotal()}`}
            <div className="btn-group">
              <button className="btn btn-outline-success btn-block bg-success text-light">
                Checkout
              </button>
              <button
                className="btn btn-outline-success btn-block bg-success text-light"
                onClick={vaciarCarrito}
              >
                Empty my cart
              </button>
            </div>
          </div>
          <form onSubmit={realizarCompra}>
            <input
              required maxlength="45"
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={dataForm.name}
            />
            <br />
            <input
              required maxlength= "10" // esta feature no funciona
              type="number"
              name="phone"
              placeholder="tel"
              onChange={handleChange}
              value={dataForm.phone}
            />
            <br />
            <input
              required maxlength="45"
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={dataForm.email}
            />
            <input
              required maxlength="45"
              type="email"
              name="validarEmail"
              placeholder="Repetir Email"
              value={dataForm.validarEmail}
              onChange={handleChange}
            />
            <br />
            <button>Generar Orden</button>
          </form>
          {id !== "" &&
            `Purchase successful. Your purchase Identification is : ${id} `}
        </>
      ) : (
        <div className="itemListWrapper">
          <h1>Your cart is empty!</h1>
          <Link to="/">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felearningdom.com%2Fwp-content%2Fthemes%2Fmrtailor%2Fimages%2Fempty_cart.png&f=1&nofb=1"
              alt="sad cart noises"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
