import { useState } from 'react';
import { Button } from "../../components/ui/button";
import { generateProof } from '../../proofUtils';

function toBase64(obj) {
  const jsonString = JSON.stringify(obj);
  return window.btoa(unescape(encodeURIComponent(jsonString)));
}

function Test() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = async () => {

    const proofResult = await generateProof({pan:"1", expiryDate:"2", cvv:"7"});
    if (proofResult.success) {
      try {
        const payload = {
          proof: proofResult.proof,
          publicInputs: proofResult.publicInputs
        };
        const base64Payload = JSON.stringify(payload); // JSON string para enviar
  
        const response = await fetch("http://localhost:3000/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json" // Mantenemos el JSON para simplicidad
          },
          body: base64Payload
        });
        
        console.log({response})
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.error(proofResult.message);
    }
  };

  return (
    <div>
      <input
        id="guessInput"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter number"
      />
      <Button onClick={handleButtonClick} variant="outline">
        Buy
      </Button>
    </div>
  );
}

export default Test;
