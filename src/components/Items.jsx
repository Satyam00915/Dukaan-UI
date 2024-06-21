import React from "react";
import Card from "./Card";

const Items = () => {
  const Tncs = [
    {
      number: "#100223",
      status: "Successful",
      id: 2715629717,
      date: "Jun 14, 2024, 11:17 AM",
      amount: "₹5,523.00",
    },
    {
      number: "#923082",
      status: "Successful",
      id: 5080873817,
      date: "Jun 03, 2024, 11:17 AM",
      amount: "₹1,859.00",
    },
    {
      number: "#352280",
      status: "Successful",
      id: 3780575887,
      date: "Jun 14, 2024, 11:17 AM",
      amount: "₹5,395.00",
    },
    {
      number: "#486548",
      status: "Pending",
      id: 9407140982,
      date: "May 27, 2024, 11:17 AM",
      amount: "₹1,625.00",
    },
    {
      number: "#687554",
      status: "Pending",
      id: 3750112927,
      date: "Jun 15, 2024, 11:17 AM",
      amount: "₹4,418.00",
    },
    {
      number: "#521146",
      status: "Failed",
      id: 3544969761,
      date: "Jun 13, 2024, 11:17 AM",
      amount: "₹5,754.00",
    },
    {
      number: "#357456",
      status: "Failed",
      id: 4824803145,
      date: "May 26, 2024, 11:17 AM",
      amount: "₹6,672.00",
    },
    {
      number: "#110854",
      status: "Successful",
      id: 5030912860,
      date: "Jun 16, 2024, 11:17 AM",
      amount: "₹997.00",
    },
    {
      number: "#495565",
      status: "Pending",
      id: 6916211669,
      date: "Jun 19, 2024, 11:17 AM",
      amount: "₹5,789.00",
    },
    {
      number: "#233323",
      status: "Pending",
      id: 4039308674,
      date: "Jun 09, 2024, 11:17 AM",
      amount: "₹1,214.00",
    },
    {
      number: "#266000",
      status: "Failed",
      id: 3632642800,
      date: "Jun 03, 2024, 11:17 AM",
      amount: "₹4,139.00",
    },
    {
      number: "#279454",
      status: "Pending",
      id: 1481100190,
      date: "Jun 18, 2024, 11:17 AM",
      amount: "₹1,122.00",
    },
  ];

  return (
    <>
      <div className="flex justify-between m-5">
        <div className="font-semibold text-base">ORDER ID</div>
        <div className="font-semibold text-base">STATUS</div>
        <div className="font-semibold text-base">Transaction ID</div>
        <div className="font-semibold text-base">REFUND DATE</div>
        <div className="font-semibold text-base">ORDER AMOUNT</div>
      </div>

      {Tncs.map((trns) => {
        return (
          <Card
            number={trns.number}
            status={trns.status}
            id={trns.id}
            date={trns.date}
            amount={trns.amount}
          />
        );
      })}
      <Card />
    </>
  );
};

export default Items;
