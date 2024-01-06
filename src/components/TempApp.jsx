import React, { useState } from "react";
import { Button } from "./Button";

export const TempApp = () => {
  const [temp, setTemp] = useState(0);

  const inc = () => {
    setTemp(temp + 1);
  };

  const dec = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="flex justify-center flex-col   shadow-2xl w-[300px] pb-10 mx-auto mt-5">
      <div>
        <h1 className="font-bold text-4xl my-5 text-center">Temperature</h1>
      </div>

      <div
        className={`h-[180px]  w-[180px] text-center mx-auto rounded-full flex flex-col justify-center items-center ${
          temp < 0 ? "bg-blue-200" : "bg-red-600"
        }`}
      >
        <h1 className="text-6xl font-semibold">{temp}/c°</h1>
        <div className="mt-3 text-4xl">{temp < 0 ? "🥶" : "🥵"}</div>
      </div>

      <div className="flex justify-center items-center gap-5">
        <Button text={"-"} onClick={dec} />
        <Button text={"+"} onClick={inc} />
      </div>
    </div>
  );
};
