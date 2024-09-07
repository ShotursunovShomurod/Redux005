import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/cart";
import { MdEdit } from "react-icons/md";
import { update } from "../../redux/cart";
import { v4 as id } from "uuid";
import BasicModal from "../modal/Modal";
const Cart = () => {
  const initialState = {
    id: "",
    username: "",
    lname: "",
    phone: "",
    desc: "",
  };
  // const handlSumbit = (e) => {
  //   e.preventDefault();
  //   setOpen(false);
  // };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  const cartList = cart.map((el) => (
    <div className="border p-4 bg-[#0009] relative" key={el.id}>
      <div className="flex flex-col gap-2">
        <p className="text-[18px] font-semibold">{el.username}</p>
        <p className="text-[18px] font-semibold">{el.lname}</p>
        <p className="text-[14px] font-[600] text-[#ddd]">{el.phone}</p>
        <p>{el.desc}</p>
        <div className="absolute top-0 right-0">
          <BasicModal ooo={<MdEdit className="text-[#fff]" />} />
        </div>
      </div>
      <button
        onClick={() => dispatch(remove({ id: el.id }))}
        className=" w-full mt-2 bg-red-500 text-[#ffff]"
      >
        delete
      </button>
    </div>
  ));
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
          {cartList}
        </div>
      </div>
    </>
  );
};

export default Cart;
