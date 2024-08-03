import React, { useEffect, useState } from 'react';
import useStore from '../store/state';

const StatusUpdater = () => {
  const { status, setStatus, statuses } = useStore();
  const [isActive, setIsActive] = useState(false); // Estado local para controlar el intervalo
  const [intervalId, setIntervalId] = useState(null); // Estado para almacenar el ID del intervalo

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
    <div>
      <p>Current Status: {status}</p>
      <button onClick={isActive ? null : startInterval}>
        {isActive ? 'Procesando' : 'Start'}
      </button>
    </div>
  );
};

export default StatusUpdater;
