import React, { useEffect, useState } from "react";
import SelectedCard from "./components/selectedCard/SelectedCard";
import useStore from "../livedemo/store/state";
import GenerandoKey from "../livedemo/loader/GenerandKey";
import Completed from "../livedemo/loader/Completed";
import Validated from "../livedemo/loader/Validated";

function Checkout() {
  const { status, setStatus, statuses } = useStore();
  const [isActive, setIsActive] = useState(false); // Estado local para controlar el intervalo
  const [intervalId, setIntervalId] = useState(null); // Estado para almacenar el ID del intervalo

  // Define el intervalo para los cambios de estado que requieren tres intervalos
  const handleZQStatus = () => {
    setStatus(statuses.VERIFICANDO); // Cambia a 'verificando'
  
    // Cambia a 'pagando' después de 3 segundos
    setTimeout(() => {
      setStatus(statuses.PAYING);
  
      // Cambia a 'finalizado' después de otros 3 segundos
      setTimeout(() => {
        setStatus(statuses.COMPLETED);
        setIsActive(false); // Detiene el ciclo
      }, 0); // Cambia a 'finalizado' inmediatamente, sin espera
    }, 3000); // Cambia a 'pagando' después de 3 segundos
  };
  

  // Define el intervalo para los cambios de estado que requieren dos intervalos
  const handleCVVStatus = () => {
    setStatus(statuses.PAYING); // Cambia a 'pagando'
  
    // Cambia a 'finalizado' inmediatamente después de cambiar a 'pagando'
    setTimeout(() => {
      setStatus(statuses.COMPLETED); // Cambia a 'finalizado'
      setIsActive(false); // Detiene el ciclo
    }, 0); // Cambia a 'finalizado' inmediatamente
  };
  

  // Inicia el intervalo basado en el estado actual
  const startInterval = () => {
    if (intervalId) return; // Si ya hay un intervalo en curso, no iniciar uno nuevo

    setStatus(statuses.GENERATING); // Cambia a 'generando'
    setIsActive(true);

    let id;

    if (status === statuses.CVV) {
      id = setTimeout(() => {
        handleCVVStatus();
        clearTimeout(id); // Limpia el timeout
      }, 3000); // Cambia a 'pagando' después de 3 segundos

    } else if (status === statuses.ZQ) {
      id = setTimeout(() => {
        handleZQStatus();
        clearTimeout(id); // Limpia el timeout
      }, 3000); // Cambia a 'verificando' después de 3 segundos
    }

    setIntervalId(id);
  };

  // Limpia el intervalo al desmontar el componente
  useEffect(() => {
    return () => {
      if (intervalId) clearTimeout(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="">
      <h3 className="text-3xl text-center py-12">
        Prueba la nueva capa de seguridad en tiempo real
      </h3>
      {(status === statuses.PENDING ||
        status === statuses.CVV ||
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
        {status === statuses.VERIFICANDO && <Validated />}
        {status === statuses.COMPLETED && <Completed />}
      </div>
    </div>
  );
}

export default Checkout;
