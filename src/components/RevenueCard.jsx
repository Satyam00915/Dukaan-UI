import React from "react";

const RevenueCard = ({ time, title, amount, orders }) => {
  return (
    <div className="rounded-md shadow-lg overflow-hidden sm:w-[300px] md:w-[350px] lg:w-[400px] w-[600px]">
      <div className={time ? "bg-blue-700 text-white " : "bg-white text-black"}>
        <div className="flex justify-start gap-2 text-lg p-5">
          <div>{title}</div>
          <div className="pt-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              aria-label="information icon"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.879 7.519c1.172-1.025 3.071-1.025 4.243 0c1.171 1.025 1.171 2.687 0 3.712q-.308.268-.67.442c-.746.361-1.452.999-1.452 1.827v.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 5.25h.008v.008H12z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between p-3">
          <div className="font-semibold text-3xl">₹{amount}</div>
          {orders ? (
            <div className="flex underline p-2 font-sans">
              <a
                href="#"
                className={
                  time
                    ? "flex items-center gap-1 text-white"
                    : "flex items-center gap-1 text-blue-500"
                }
              >
                {orders} Orders
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  aria-label="arrow icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          ) : null}
        </div>
      </div>
      {time ? (
        <div className="flex justify-between p-5 bg-blue-800 text-white">
          <div>Next Payment Date</div>
          <div>Today, {time}PM</div>
        </div>
      ) : null}
    </div>
  );
};

export default RevenueCard;
