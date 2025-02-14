import React from "react";

type TicketCardProps = {
  access: string;
  price: string;
  quanity: string;
};

export default function TicketCard({
  access,
  price,
  quanity,
}: TicketCardProps) {
  return (
    <div className="w-full flex justify-between gap-3 border-2 p-3 rounded-xl border-solid border-[#197686] hover:bg-[#12464E]">
      <div>
        <p>{access.toUpperCase()} ACCESS</p>
        <p>{quanity} left!</p>
      </div>
      <div className="bg-[#0E464F] rounded-md pr-1.5 pl-5 self-start py-1 ">
        {price}
      </div>
    </div>
  );
}
