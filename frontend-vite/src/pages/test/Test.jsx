import { useState } from 'react';
import { Button } from "../../components/ui/button";
import { generateProof } from '../../proofUtils';

function toBase64(obj) {
  const jsonString = JSON.stringify(obj);
  return window.btoa(unescape(encodeURIComponent(jsonString)));
}

function Test() {
  const [inputValue, setInputValue] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailSearch, setEmailSearch] = useState('');
  const [nameSearch, setNameSearch] = useState('');
  const [proof, setProof] = useState('');

  const handleButtonClick = async () => {
    console.log({proof})
      try {
        const response = await fetch("http://localhost:3000/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json" // Mantenemos el JSON para simplicidad
          },
          body: JSON.stringify({proof})
        });
        
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);
      } catch (error) {
        console.error("Error:", error);
      }
  };

  const handleAddCard = async () => {
      try {
        const payload = {
          email,
          name,
          pan: "1",
          expiryDate: "4",
          cvv: "7",
          ttl: "8"
        };
        const body = JSON.stringify(payload); // JSON string para enviar
  
        const response = await fetch("http://localhost:3000/proofs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json" // Mantenemos el JSON para simplicidad
          },
          body
        });
        
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);
      } catch (error) {
        console.error("Error:", error);
      }
  };

  const handleGetCard = async () => {
      try {
        const response = await fetch(`http://localhost:3000/proofs?email=${emailSearch}&name=${nameSearch}`);
        if (!response.ok) {
          console.log(response)
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        setProof({proof: data.proof, publicInputs: data.publicInputs});
        console.log("Respuesta del servidor:", data);
      } catch (error) {
        console.error("Error:", error);
      }
  };

  return (<>
    <div>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <Button onClick={handleAddCard} variant="outline">
        Agregar tarjeta
      </Button>
      </div>

      <div>
      <input
        id="emailSearch"
        type="text"
        value={emailSearch}
        onChange={(e) => setEmailSearch(e.target.value)}
        placeholder="Enter Email to search"
      />
      <input
        id="nameSearch"
        type="text"
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
        placeholder="Enter Name to search"
      />
      <Button onClick={handleGetCard} variant="outline">
        Traer Tarjeta
      </Button>
      </div>
      <div>
        <Button onClick={handleButtonClick} variant="outline">
          Buy
        </Button>
      </div>
  </>);
}

export default Test;
