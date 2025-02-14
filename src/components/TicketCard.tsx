import { Ticket } from "@/app/page";
import React from "react";

type TicketCardProps = {
  ticketDetail: { access: string; price: string; quanity: string };
  setTicket: React.Dispatch<React.SetStateAction<Ticket>>;
  ticket: Ticket;
};

export default function TicketCard({
  ticketDetail,
  setTicket,
  ticket,
}: TicketCardProps) {
  const handleTicketCardClick = () => {
    setTicket({ ...ticket, accessType: ticketDetail.access });
  };
  return (
    <div
      onClick={handleTicketCardClick}
      className={`w-full flex justify-between gap-3 border-2 p-3 rounded-xl border-solid border-[#197686] hover:bg-[#12464E] ${
        ticket.accessType === ticketDetail.access && "bg-[#12464E] "
      }`}
    >
      <div>
        <p>{ticketDetail.access.toUpperCase()} ACCESS</p>
        <p>{ticketDetail.quanity} left!</p>
      </div>
      <div className="bg-[#0E464F] rounded-md pr-1.5 pl-5 self-start py-1 ">
        {ticketDetail.price}
      </div>
    </div>
  );
}
