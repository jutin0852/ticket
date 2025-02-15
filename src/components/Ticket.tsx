"use client";
import { roadRage } from "@/styles/font";
import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { Ticket } from "@/app/page";

type TicketReadyProps = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  ticket: Ticket;
  setTicket: React.Dispatch<React.SetStateAction<Ticket>>;
};

export default function TicketReady({ setIndex, ticket }: TicketReadyProps) {
  return (
    <div className="sm:w-[70%]  w-[90%] max-w-[700px] m-auto bg-[#08252B] text-white p-6 flex flex-col gap-8  rounded-[32px] border-solid border  border-[#197686] md:gap-14">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row md:justify-between">
          <p>Ticket Selection</p>
          <p>Step 3/3</p>
        </div>

        <div className="bg-[#0E464F] w-full h-1 rounded-sm">
          <div className="bg-[#24A0B5] w-full h-1 rounded-sm "></div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-2xl mb-2 font-bold md:text-3xl">
          Your Ticket is Booked!
        </p>
        <p className="text-base">
          You can download or Check your email for a copy
        </p>
      </div>

      <div className="flex flex-col mx-auto  w-full md:flex-row  ">
        <div className="flex w-full flex-row-reverse md:flex-col border-4 border-white border-solid rounded-t-3xl md:rounded-tr-none  md:rounded-l-3xl  ">
          <div className="flex w-full flex-col md:flex-row bg-[#12464E] rounded-tr-3xl md:rounded-tr-none md:rounded-t-3xl  md:rounded-tl-3xl">
            <Image
              className=" self-center rounded-md m-3"
              src={"/qrcode.png"}
              width={140}
              height={140}
              alt="profile"
            />
            <div className=" flex flex-col gap-6 py-4 px-6 ">
              <div className="text-left">
                <p className={`${roadRage.className} text-7xl`}>
                  Techember <br /> Fest &quot;25
                </p>
              </div>
              <div className=" text-lg ">
                <p>📍04 Rumens Road ikoyi lagos</p>
                <p>📅March 15, 2025 | 7:00 PM</p>
              </div>
            </div>
          </div>
          <div className="w-[25px] md:w-full bg-[#71A7AF] rounded-tl-3xl md:rounded-tl-none md:rounded-bl-3xl flex justify-center items-center  md:justify-start px-3">
            <p className="text-[#12464E] font-bold rotate-[-90deg] md:rotate-0   whitespace-nowrap ">
              Ticket for {ticket.quantity}
              {Number(ticket.quantity) == 1 && "entry only"}
            </p>
          </div>
        </div>
        <div className="border-solid md:w-[25%] border-4 bg-[#12464E]  border-white rounded-bl-3xl rounded-br-3xl  md:rounded-bl-none md:rounded-r-3xl  flex justify-center items-center whitespace-nowrap">
          <div className={` md:rotate-[-90deg] `}>
            <p className={`${roadRage.className} text-4xl `}>
              Techember Fest &quot;25
            </p>
            <p>
              <b>username</b> : {ticket.user.fullName}
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4  md:flex-row-reverse ">
        <Button type="submit" variant={"primary"}>
          Download ticket
        </Button>
        <Button type="button" variant={"outline"} onClick={() => setIndex(0)}>
          Book another ticket
        </Button>
      </div>
    </div>
  );
}
