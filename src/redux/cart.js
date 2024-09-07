import { createSlice } from "@reduxjs/toolkit";
import { getStorage, saveStorege } from "../components/helpers";
const cart = createSlice({
  name: "cart",
  initialState: {
    value: getStorage("count") || [
      {
        id: 1,
        username: "Asadbek",
        lname: "Bahromov",
        phone: +998997773543,
        desc: "Lorem appm zor",
      },
      {
        id: 2,
        username: "Shoxrux",
        lname: "Bahromov",
        phone: +9989977733454,
        desc: "Lorem appm zor",
      },
      {
        id: 3,
        username: "Otabek",
        lname: "Sediyorov",
        phone: +9989977733454,
        desc: "Lorem appm zor",
      },
      {
        id: 4,
        username: "Usmonjon",
        lname: "Sediyorov",
        phone: +9989977733454,
        desc: "Lorem appm zor",
      },
      {
        id: 5,
        username: "Iqboljon",
        lname: "Sediyorov",
        phone: +9989977733454,
        desc: "Lorem appm zor",
      },
      {
        id: 6,
        username: "Elyor",
        lname: "Sediyorov",
        phone: +9989977733454,
        desc: "Lorem appm zor",
      },
    ],
  },
  reducers: {
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload.id);
      saveStorege("count", state.value);
    },
    update: (state, action) => {
      state.value = [...state.value, action.payload.cart];
      saveStorege("count", state.value);
    },
  },
});
export default cart.reducer;
export const { remove, update } = cart.actions;
