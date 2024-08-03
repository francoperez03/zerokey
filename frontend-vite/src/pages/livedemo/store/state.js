import { create } from 'zustand';

const useStore = create((set) => ({
  status: 'pendiente', // Estado inicial
  setStatus: (newStatus) => set({ status: newStatus }),
  statuses: {
    PENDING: 'pendiente',
    GENERATING: 'generando',
    PAYING: 'pagando',
    COMPLETED: 'finalizado'
  }
}));

export default useStore;
