"use client";
import AttendeeDetails from "@/components/AttendeeDetails";
import Header from "@/components/Header";
import TicketReady from "@/components/Ticket";
import TicketSelection from "@/components/TicketSelection";
import React, { useState } from "react";

export type Ticket = {
  accessType: string;
  quantity: string;
  user: { fullName: string; email: string; request: string; img: string };
};

const initialTicket = {
  accessType: "regular",
  quantity: "1",
  user: { fullName: "", email: "", request: "", img: "" },
};

export default function Page() {
  const [index, setIndex] = useState<number>(0);
  const [ticket, setTicket] = useState<Ticket>(initialTicket);

  const handleNext = () => setIndex((prev) => (prev + 1) % 3);
  const handlePrev = () => setIndex((prev) => (prev - 1 + 3) % 3);

  const ticketView = (): React.JSX.Element => {
    switch (index) {
      case 0:
        return (
          <TicketSelection
            ticket={ticket}
            setTicket={setTicket}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 1:
        return (
          <AttendeeDetails
            ticket={ticket}
            setTicket={setTicket}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        );
      case 2:
        return (
          <TicketReady setIndex={setIndex} ticket={ticket} setTicket={setTicket} />
        );
      default:
        return <></>;
    }
  };
  return (
    <div className="appBg pt-4 pb-6 flex flex-col gap-8">
      <Header />
      {ticketView()}
    </div>
  );
}
