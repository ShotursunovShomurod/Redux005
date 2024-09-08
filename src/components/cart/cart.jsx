import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/cart";
import { MdEdit } from "react-icons/md";
import BasicModal from "../modal/Modal";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);

  const cartList = cart.map((el) => (
<div className="bg-white shadow-lg rounded-xl p-6 relative max-w-sm" key={el.id}>
 
  <div className="w-full h-48 bg-gray-200 rounded-t-xl overflow-hidden">
    <img
      src="https://via.placeholder.com/150"
      alt="User profile"
      className="w-full h-full object-cover"
    />
  </div>


  <div className="flex flex-col gap-2 mt-4">
    <p className="text-2xl font-bold text-gray-800">{el.username}</p>
    <p className="text-lg font-semibold text-gray-700">{el.lname}</p>
    <p className="text-md text-gray-600">{el.phone}</p>
    <p className="text-gray-600">{el.desc}</p>
  </div>


  <div className="absolute top-4 right-4">
    <BasicModal ooo={<MdEdit className="text-gray-500 hover:text-gray-700" />} />
  </div>


  <button
    onClick={() => dispatch(remove({ id: el.id }))}
    className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
  >
    Delete
  </button>
</div>

  ));

  return (
    <div className="container mx-auto mt-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {cartList}
      </div>
    </div>
  );
};

export default Cart;
