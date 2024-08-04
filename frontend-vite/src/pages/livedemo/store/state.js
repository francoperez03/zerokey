import { create } from 'zustand';

const useStore = create((set) => ({
  status: 'pendiente', // Estado inicial
  domain: null, // Nuevo estado inicial para DOMAIN
  setStatus: (newStatus) => set({ status: newStatus }),
  setDomain: (newDomain) => set({ domain: newDomain }), // Función para actualizar DOMAIN
  updateDomain: (newValue) => set({ domain: newValue }), // Función para actualizar DOMAIN con un valor específico
  statuses: {
    INICIO: 'inicio',
    PENDING: 'pendiente',
    CVV: 'cvv',
    ZQ: 'zq',
    GENERATING: 'generando',
    PAYING: 'pagando',
    COMPLETED: 'finalizado',
    ERROR: 'error',
    PAYINGZQ: 'pagandoZQ',
    PAYINGCVV: 'pagandoCVV',
    DOMAIN: 'domain', // Añadir el nuevo estado al objeto de estados
  },
  domainStatuses: {
    AUTHORIZED: 'autorizado',
    REJECTED: 'rechazado',
  }
}));

export default useStore;
