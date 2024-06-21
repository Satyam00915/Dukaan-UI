import React from "react";

const Card = ({ status, id, date, amount, number }) => {
  return (
    <div className="flex justify-between m-3 p-2 border-b border-grey-500">
      <div className="text-blue-500 font-semibold">{number}</div>
      <div className="flex justify-between gap-2 text-center">
        {status === "Successful" ? (
          <>
            <div className="rounded-full w-[10px] h-[10px] bg-green-500 mt-2"></div>
            <div className="w-[80px]">Successful</div>
          </>
        ) : status === "Failed" ? (
          <>
            <div className="rounded-full w-[10px] h-[10px] bg-red-500 mt-2"></div>
            <div className="w-[80px]">Failed</div>
          </>
        ) : status === "Pending" ? (
          <>
            <div className="rounded-full w-[10px] h-[10px] bg-grey-800 mt-2"></div>
            <div className="w-[80px]">Pending</div>
          </>
        ) : null}
      </div>
      <div className="text-center">{id}</div>
      <div>{date}</div>
      <div>₹{amount}</div>
    </div>
  );
};

export default Card;
