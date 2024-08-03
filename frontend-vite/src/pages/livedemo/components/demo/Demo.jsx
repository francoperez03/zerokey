import { useEffect, useState } from "react";
import useStore from "../../store/state";
import Checkout from "../checkout/Checkout";
import StatusUpdater from "../testState";

function Demo() {

    const { status, setStatus, statuses } = useStore();
    const [isActive, setIsActive] = useState(false); // Estado local para controlar el intervalo
    const [intervalId, setIntervalId] = useState(null); // Estado para almacenar el ID del intervalo

    console.log(status,"status")
  
    // Define el orden de los estados
  
    const startInterval = () => {
      if (intervalId) return; // Si ya hay un intervalo en curso, no iniciar uno nuevo
  
      // Inicia el estado en 'generado' y luego cambia al siguiente estado
      setStatus(statuses.PENDING);
      setIsActive(true);
  
      // Cambia el estado a 'generando' después de hacer clic
      setStatus(statuses.GENERATING);
  
      // Establece los intervalos para los cambios de estado
      const id = setTimeout(() => {
        setStatus(statuses.PAYING);
  
        const secondTimeout = setTimeout(() => {
          setStatus(statuses.COMPLETED);
          clearTimeout(secondTimeout); // Limpia el segundo timeout
          setIsActive(false); // Detiene el ciclo
        }, 3000); // Cambia a 'finalizado' después de 3 segundos
      }, 3000); // Cambia a 'pagando' después de 3 segundos
  
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
      <h5 className="text-lg pb-2">Enter fictitious card information</h5>
      <Checkout startInterval={startInterval} />
      {status === statuses.PENDING && <h5 className="text-lg pt-2">Payment pendiente!</h5>}
      {status === statuses.GENERATING && <h5 className="text-lg pt-2">Payment generando!</h5>}
      {status === statuses.PAYING && <h5 className="text-lg pt-2">Payment pagando!</h5>}
      {status === statuses.COMPLETED && <h5 className="text-lg pt-2">Payment completed!</h5>}
      <StatusUpdater/>
    </div>
  );
}

export default Demo;
