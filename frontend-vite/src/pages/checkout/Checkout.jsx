import React, { useEffect, useState } from "react";
import SelectedCard from "./components/selectedCard/SelectedCard";
import useStore from "../livedemo/store/state";
import GenerandoKey from "../livedemo/loader/GenerandKey";
import Completed from "../livedemo/loader/Completed";

function Checkout() {
  const { status, setStatus, statuses } = useStore();
  console.log('status', status)
  const [isActive, setIsActive] = useState(false); // Estado local para controlar el intervalo
  const [intervalId, setIntervalId] = useState(null); // Estado para almacenar el ID del intervalo

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
    <div>
      <h3 className="text-3xl text-center py-12">
        Prueba la nueva capa de seguridad en tiempo real
      </h3>
      {(status === statuses.PENDING ||
        status ===statuses.CVV ||
        status === statuses.ZQ) && (
          <>
            <p className="text-center text-lg pb-4">
              Selecciona el método de pago
            </p>
            <SelectedCard startInterval={startInterval} />
          </>
        )}
      <div className="flex flex-col items-center justify-center">
        {status === statuses.GENERATING && <GenerandoKey />}
        {status === statuses.COMPLETED && <Completed />}
      </div>
    </div>
  );
}

export default Checkout;
