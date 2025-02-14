"use client";
import { roadRage } from "@/styles/font";
import React from "react";
import TicketCard from "./TicketCard";
import Dropdown from "./DropDown";
import { Button } from "./Button";



export default function TicketSelection() {
  const handleSelect = (option: string) => {
    console.log(option);
  };
  return (
    <div className="sm:w-[70%] w-[90%] m-auto bg-[#08252B] text-white p-6 flex flex-col gap-8 rounded-[32px] border-solid border border-[#197686]">
      <div className="flex flex-col md:flex-row md:justify-between">
        <p>Ticket Selection</p>
        <p>Step 1/3</p>
      </div>
      <div className=" flex flex-col gap-8 py-4 px-6  border-r-[#07373F] border-r-2 border-l-2 border-b-2  border-b-[#07373F] border-l-[#07373F] techBg rounded-3xl backdrop-blur-sm">
        <div className="text-center">
          <p className={`${roadRage.className} text-5xl`}>
            Techember Fest &quot;25
          </p>
          <p className="text-base mt-3  ">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
        </div>
        <div className="text-center">
          <p>📍 [Event Location]</p>
          <p>March 15, 2025 | 7:00 PM</p>
        </div>
      </div>

      <div>
        <p>Select ticket type</p>
        <div className="flex items-stretch p-4 my-4 flex-col justify-center items-center gap-4 self-stretch rounded-3xl border border-solid border-[#07373F] bg-[#052228] md:flex-row">
          <TicketCard access="regular" quanity="20" price="Free" />
          <TicketCard access="vip" quanity="20" price="$50" />{" "}
          <TicketCard access="vvip" quanity="20" price="$150" />
        </div>
      </div>

      <div>
        <p className="pb-5">Number of Tickets</p>
        <Dropdown options={["1", "2", ]} onSelect={handleSelect} />
      </div>

      <div className=" flex flex-col gap-4  md:flex-row-reverse">
        <Button variant={"primary"}>Next</Button>
        <Button variant={"outline"}>Cancel</Button>
      </div>
    </div>
  );
}
