import React from "react";
import RevenueCard from "./RevenueCard";

const Main = () => {
  const payments = [
    {
      title: "Next Payout",
      amount: "2,312.23",
      orders: 23,
      time: "4:00",
    },
    {
      title: "Amount Pending",
      amount: "92,312.20",
      orders: 13,
    },
    {
      title: "Amount Processed",
      amount: "23,92,312.19",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {payments.map((payment) => {
        return (
          <RevenueCard
            title={payment.title}
            amount={payment.amount}
            orders={payment.orders}
            time={payment.time}
          />
        );
      })}
    </div>
  );
};

export default Main;
