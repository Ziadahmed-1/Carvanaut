import { create } from "zustand";

type User = {
  token: string;
  user: {
    name: string;
    email: string;
    _id: string;
  };
};

// Define the store state type
type MainState = {
  user: User | null;
  setUser: () => void;
};

const useMainStore = create<MainState>((set) => ({
  user: null, // Initialize as null, not the type itself
  setUser: () => {
    const userData = localStorage.getItem("authUser"); // 1. Get stored user data
    if (userData) {
      // 2. Check if data exists
      set({ user: JSON.parse(userData) }); // 3. Parse JSON and update state
    }
  },
}));

export default useMainStore;
