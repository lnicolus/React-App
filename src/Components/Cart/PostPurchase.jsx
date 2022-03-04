import React from "react";

export default function PostPurchase({ orderId }) {
/* This component receives the state coming from the Form to the Cart and then here. Its function is to display the number of every purchase finalized.
 Orders are inputted at the Firestore, the ID which heads them is here for the UX. */
  return (
    <>
      {orderId !== "" && (
        <>
          <p
            className="alert alert-success"
            onChange={(e) => orderId(e.target.value)}
          >
            Purchase successful. Your purchase identification is : {orderId} 
          </p>
        </>
      )}
    </>
  );
}
