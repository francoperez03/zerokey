import { useEffect, useState } from "react";
import useStore from "../../store/state";
import Checkout from "../checkout/Checkout";
import GenerandoKey from "../../loader/GenerandKey";
import Completed from "../../loader/Completed";
import Form from "../../form/Form";

function Demo() {
  const { status, setStatus, statuses } = useStore();
  const [isActive, setIsActive] = useState(false); // Estado local para controlar el intervalo
  const [intervalId, setIntervalId] = useState(null); // Estado para almacenar el ID del intervalo

  console.log(status, "status");

  // Define el orden de los estados
  const startInterval = () => {
    if (intervalId) return; // Si ya hay un intervalo en curso, no iniciar uno nuevo

    // Inicia el estado en 'pending' y luego cambia al siguiente estado
    setStatus(statuses.PENDING);
    setIsActive(true);

    // Cambia el estado a 'generating' inmediatamente
    setStatus(statuses.GENERATING);

    // Establece el intervalo para el cambio de estado
    const id = setTimeout(() => {
      setStatus(statuses.COMPLETED);
      clearTimeout(id); // Limpia el timeout
      setIsActive(false); // Detiene el ciclo
    }, 3000); // Cambia a 'completed' después de 3 segundos

    setIntervalId(id);
  };

  // Limpia el intervalo al desmontar el componente
  useEffect(() => {
    return () => {
      if (intervalId) clearTimeout(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="flex flex-col items-center justify-center">
      {status === statuses.PENDING && (
        <div>
          <h5 className="text-lg pb-2 text-center">
            Enter fictitious card information
          </h5>
            <Checkout startInterval={startInterval} />
        </div>
      )}
      {status === statuses.GENERATING && <GenerandoKey />}
      {status === statuses.COMPLETED && <Completed />}
    </div>
  );
}

export default Demo;
