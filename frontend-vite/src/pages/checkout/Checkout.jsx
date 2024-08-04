import React, { useEffect, useState } from "react";
import SelectedCard from "./components/selectedCard/SelectedCard";
import useStore from "../livedemo/store/state";
import GenerandoKey from "../livedemo/loader/GenerandKey";
import Completed from "../livedemo/loader/Completed";
import Validated from "../livedemo/loader/Validated";
import Payment from "../livedemo/loader/Payment";
import PaymentSuccess from "../livedemo/loader/PaymentSuccess";
import Error from "../livedemo/loader/Error";
import PaymentCVV from "../livedemo/loader/PaymentCVV";

function Checkout() {
  const { status, setStatus, statuses, domain, updateDomain, domainStatuses } =
    useStore();
  const [isActive, setIsActive] = useState(false); // Estado local para controlar el intervalo
  const [intervalId, setIntervalId] = useState(null); // Estado para almacenar el ID del intervalo

  const setAuthorized = () => {
    updateDomain(domainStatuses.AUTHORIZED);
  };

  const setRejected = () => {
    updateDomain(domainStatuses.REJECTED);
  };

  // Define el intervalo para los cambios de estado que requieren tres intervalos
  const handleZQStatus = () => {
    setStatus(statuses.GENERATING); // Cambia a 'generando'

    // Cambia a 'verificando' después de 3 segundos
    setTimeout(() => {
      setStatus(statuses.VERIFICANDO); // Cambia a 'verificando'

      // Cambia a 'pagando' después de otros 3 segundos
      setTimeout(() => {
        setStatus(statuses.PAYING); // Cambia a 'pagando'

        // Cambia a 'finalizado' después de otros 3 segundos
        setTimeout(() => {
          setStatus(statuses.COMPLETED); // Cambia a 'finalizado'
          setIsActive(false); // Detiene el ciclo
        }, 0); // Cambia a 'finalizado' después de otros 3 segundos
      }, 3000); // Cambia a 'pagando' después de 3 segundos
    }, 3000); // Cambia a 'verificando' después de 3 segundos
  };

  // Define el intervalo para los cambios de estado que requieren dos intervalos
  const handleCVVStatus = () => {
    setStatus(statuses.PAYINGCVV); // Cambia a 'pagando'

    // Cambia a 'finalizado' inmediatamente después de cambiar a 'pagando'
    setTimeout(() => {
      setStatus(statuses.COMPLETED); // Cambia a 'finalizado'
      setIsActive(false); // Detiene el ciclo
    }, 3000); // Cambia a 'finalizado' inmediatamente
  };

  // Inicia el intervalo basado en el estado actual
  const startInterval = () => {
    if (intervalId) return; // Si ya hay un intervalo en curso, no iniciar uno nuevo

    setIsActive(true);

    let id;

    if (status === statuses.CVV) {
      id = setTimeout(() => {
        handleCVVStatus();
        clearTimeout(id); // Limpia el timeout
      }, 0); // Cambia a 'pagando' después de 3 segundos
    } else if (status === statuses.ZQ) {
      id = setTimeout(() => {
        handleZQStatus();
        clearTimeout(id); // Limpia el timeout
      }, 0); // Cambia a 'verificando' después de 3 segundos
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
    <div className="bg-gray-800 h-screen">
      <h3 className="text-4xl text-center text-white py-8 ">
        Prueba la nueva capa de seguridad en tiempo real
      </h3>
      {(status === statuses.PENDING ||
        status === statuses.CVV ||
        status === statuses.ZQ) && (
        <div className="bg-white w-[70%] m-auto py-6 rounded shadow shadow-gray-300">
          <p className="text-center text-lg pb-4">
            Selecciona el método de pago
          </p>
          <SelectedCard startInterval={startInterval} setAuthorized={setAuthorized} setRejected={setRejected} />
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        {status === statuses.GENERATING && <Validated />}
        {(status === statuses.VERIFICANDO && domain === domainStatuses.REJECTED) && <Error />}
        {(status === statuses.COMPLETED && domain === domainStatuses.REJECTED) && <Error />}
        {(status === statuses.VERIFICANDO &&  domain ===  domainStatuses.AUTHORIZED )&& <Payment />}
        {(status === statuses.COMPLETED && domain ===  domainStatuses.AUTHORIZED ) && <PaymentSuccess />}
        {(status === statuses.PAYINGCVV &&  domain ===  domainStatuses.AUTHORIZED ) && <PaymentCVV/>}
        
      </div>
    </div>
  );
}

export default Checkout;
