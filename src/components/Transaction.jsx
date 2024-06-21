import React from "react";
import Items from "./Items";

const Transaction = () => {
  return (
    <div>
      <div className="text-xl font-semibold mt-5">
        Transactions | This Month
      </div>
      <div className="flex flex-start gap-3 mt-5">
        <div className="bg-grey-500 rounded-2xl p-2 text-sm">Payouts (22)</div>
        <div className="bg-blue-400 rounded-2xl p-2 text-white text-sm">
          Refunds (6)
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[350px] pl-3 pr-3 pt-2 pb-3 border border-black-150 mt-5">
          <svg
            className="mt-1 mr-2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
              fill="#808080"
            ></path>
          </svg>
          <input
            className="outline-none w-[200px]"
            type="text"
            placeholder="Order ID or Transaction ID"
          />
        </div>

        <div className="flex">
          <div className="mt-3 cursor-pointer">
            <div className="flex justify-between border border-grey-600 rounded-lg p-2">
              <div>Sort</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="m-3 cursor-pointer">
            <div className="border border-grey-600 rounded-lg p-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z"
                  fill="#4D4D4D"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Items />
    </div>
  );
};

export default Transaction;
