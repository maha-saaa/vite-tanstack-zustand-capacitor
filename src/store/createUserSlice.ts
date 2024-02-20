import { StateCreator } from "zustand";

export interface UserSlice {
  users: number;
  addUser: () => void;
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set
) => ({
  users: 0,
  addUser: () => set((state) => ({ users: state.users + 1 })),
});
