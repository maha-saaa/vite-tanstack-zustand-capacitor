import { create } from "zustand";
import { UserSlice, createUserSlice } from "./createUserSlice";

type Store = UserSlice;

export const useBoundStore = create<Store>()((...a) => ({
  ...createUserSlice(...a),
}));
