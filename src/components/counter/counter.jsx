import React, { memo } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);
  return (
    <div className="container mx-auto">
      <h2 className="text-[24px] font-[600] text-center mt-[40px]">
        {counter}
      </h2>
    </div>
  );
};

export default memo(Counter);
