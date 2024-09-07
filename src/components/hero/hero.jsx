import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, res } from "../../redux/counter-slase";
const Hero = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <div className="container mx-auto flex flex-col gap-2 items-center justify-center">
      <button
        className="border mr-3 bg-[#0009] rounded-[10px] py-1 text-[14px] text-[#fff] w-[160px] items-center"
        onClick={() => dispatch(inc())}
      >
        increment
      </button>
      <button
        disabled={counter <= 0}
        className="border mr-3 bg-[#0009] rounded-[10px] py-1 text-[14px] text-[#fff] w-[160px] items-center"
        onClick={() => dispatch(dec())}
      >
        Decrement
      </button>
      <button
        className="border mr-3 bg-[#0009] rounded-[10px] py-1 text-[14px] text-[#fff] w-[160px] items-center"
        onClick={() => dispatch(res())}
      >
        reset
      </button>
    </div>
  );
};

export default Hero;
