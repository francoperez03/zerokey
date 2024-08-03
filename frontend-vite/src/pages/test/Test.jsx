import { useState } from 'react';
import { Button } from "../../components/ui/button";
import { generateAndVerifyProof } from '../../proofUtils';

function Test() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = async () => {

    const proofResult = await generateAndVerifyProof({pan:"1", expiryDate:"2", cvv:"7"});
    if (proofResult.success) {
      try {
        const response = await fetch("http://localhost:3000/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            proofResult:123
          })
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
