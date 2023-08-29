import {
  addDoc,
  collection,
  doc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { firestore } from "../firebase/client";
import FavsWidget from "./FavsWidget";

const data = {
  buyer: {
    email: "adri@caten.com",
    name: "Adriano",
    phone: "43223451123",
  },
  items: [
    {
      id: 1,
      price: 100,
      title: "Remera",
      quantity: 1,
    },
    {
      id: 2,
      price: 55,
      title: "Short",
      quantity: 1,
    },
  ],
  total: 155,
};

function NavBar() {
  const [docId, setDocId] = useState("");
  const [docsReferences, setDocsReferences] = useState([]);

  const handleClickEnviarDatos = () => {
    const ordersRef = collection(firestore, "orders");

    addDoc(ordersRef, data)
      .then((newDocRef) => {
        console.log(newDocRef);
        setDocsReferences([...docsReferences, newDocRef]);
        setDocId(newDocRef.id);
      })
      .catch((error) => console.error(error));
  };

  const handleClickModificarDatos = () => {
    const docRef = doc(firestore, "orders", docId);

    data.items[0] = {
      id: 1,
      price: 48,
      title: "Remera",
      quantity: 1,
    };
    /* updateDoc(docRef, {
      items: { id: 1, price: 48, title: "Remera", quantity: 1 },
    }) */

    updateDoc(docRef, {
      items: [...data.items],
    })
      .then(() => console.log("Se modifico correctamente el documento"))
      .catch((error) => console.error(error));
  };

  const handleCliclModificarBatch = () => {
    const batch = writeBatch(firestore);

    batch.set(docsReferences[0], { newField: "Este es un campo nuevo" });
    batch.update(docsReferences[1], { total: 3500 });

    batch
      .commit()
      .then(() => console.log("Se actualizo todo junto con un batch!"))
      .catch((error) => console.error(error));
    console.log({ docsReferences });
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBlock: "2rem",
        paddingInline: "1rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Link to="/">
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img alt="Brand" src={reactLogo} />
            <h3>Nerdticias!</h3>
          </span>
        </Link>
        <Link to="/category/react">
          <Button>React</Button>
        </Link>
        <Link to="/category/angular">
          <Button>Angular</Button>
        </Link>
        <Link to="/category/vue">
          <Button>Vue</Button>
        </Link>
        <Link to="/category/svelte">
          <Button>Svelte</Button>
        </Link>
      </nav>
      <Button onClick={handleClickEnviarDatos}>Enviar datos</Button>
      <Button onClick={handleClickModificarDatos}>Modificar datos</Button>
      <Button onClick={handleCliclModificarBatch}>Modificar con batch</Button>
      <FavsWidget />
    </header>
  );
}

export default NavBar;
