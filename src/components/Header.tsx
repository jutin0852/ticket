import { ArrowRight05Icon, Ticket01Icon } from "hugeicons-react";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className=" w-11/12 m-auto flex justify-between border-solid border border-[#197686] rounded-xl px-4 py-8">
      <div className=" flex gap-2 self-center">
        <div className="bg-[#052F35] py-[6px] px-2 rounded-xl inline-block border-[#0E464F] border-solid border">
          <Ticket01Icon className="text-white" />
        </div>
        <Image
          className="inline-block h-auto w-auto"
          src={"/logo.svg"}
          width={43}
          height={22}
          alt="ticz"
        />
      </div>

      <nav className="hidden sm:block self-center">
        <ul className="flex justify-between gap-4  items-center">
          <li className="text-white p-3">Events</li>
          <li className="text-[#B3B3B3] p-3">My Tickets</li>
          <li className="text-[#B3B3B3] p-3">About</li>
        </ul>
      </nav>

      <button className="py-3 px-4 bg-white rounded-xl border border-solid border-[rgba(213, 234, 0, 0.10)]">
        MY TICKETS
        <ArrowRight05Icon className="inline" />
      </button>
    </div>
  );
}
