import { create } from 'zustand';

const useStore = create((set) => ({
  status: 'pendiente', // Estado inicial
  setStatus: (newStatus) => set({ status: newStatus }),
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


  }
}));

export default useStore;
