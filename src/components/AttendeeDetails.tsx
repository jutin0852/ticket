"use client";
import React, { useState } from "react";

import { Button } from "./Button";
import { CloudUploadIcon } from "hugeicons-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Ticket } from "@/app/page";

type AttendeeDetailsProps = {
  handleNext: () => void;
  handlePrev: () => void;
  ticket: Ticket;
  setTicket: React.Dispatch<React.SetStateAction<Ticket>>;
};

const schema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .refine(
      (name) => name.trim().split(" ").length >= 2,
      "Please enter your full name (first & last)."
    ),
  email: z.string().email(),
  request: z.string(),
  img: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "File is required")
    .refine(
      (files) => files[0]?.size < 2 * 1024 * 1024,
      "File must be under 2MB"
    ),
});

type FormFields = z.infer<typeof schema>;

export default function AttendeeDetails({
  handleNext,
  handlePrev,
  ticket,
  setTicket,
}: AttendeeDetailsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const [previewImg, setPreviewImg] = useState<string>("");

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    handleNext();
    const { fullName, email, request } = data;
    setTicket({
      ...ticket,
      user: { fullName, email, request, img: previewImg },
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "my_first_upload");
    data.append("cloud_name", "dsi0lkh1f");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsi0lkh1f/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const uploadedImageURL = await res.json();
    setPreviewImg(uploadedImageURL.url);
  };
  return (
    <div className="sm:w-[70%] w-[90%] max-w-[700px] m-auto bg-[#08252B] text-white p-6 flex flex-col gap-8 rounded-[32px] border-solid border border-[#197686]">
      <div className="flex flex-col md:flex-row md:justify-between">
        <p>Attendee Details</p>
        <p>Step 2/3</p>
      </div>

      <form
        className="flex flex-col gap-5 items-stretch"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" flex flex-col gap-8 py-4 px-6  border-r-[#07373F] border-r-2 border-l-2 border-b-2  border-b-[#07373F] border-l-[#07373F] bg-[#052228] rounded-3xl backdrop-blur-sm">
          <p>Upload Profile picture</p>

          <div className="relative">
            <div className="hidden md:block bg-opacity-20 bg-black h-[200px]"></div>
            <div className="p-6 flex justify-center items-center text-center  gap-4 flex-col rounded-[32px] bg-[#24A0B580] relative bottom-5 m-auto bg-opacity-50 size-[240px] border-solid border-4 border-[#24A0B5] md:absolute md:left-0 md:right-0 md:top-5">
              <CloudUploadIcon />
              <label htmlFor="file" className="text-sm  ">
                drag and drop or click to upload
              </label>
              <input
                {...register("img")}
                type="file"
                onChange={handleFileUpload}
                id="file"
                className=""
              />
            </div>
          </div>
        </div>
        {errors.img && <p className="text-red-500">{errors.img.message}</p>}

        <div className="flex-col flex gap-2">
          <label htmlFor="fullName">Enter your name</label>
          <input
            autoComplete="off"
            className="w-full text-white outline-none bg-[#08252B] focus:bg-[#08252B]  rounded-xl block p-3 border border-solid border-[#07373F] bg-none "
            {...register("fullName")}
            type="text"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName?.message}</p>
          )}
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="email">Enter your email*</label>
          <div className="w-full text-white flex  bg-[#08252B] rounded-xl   border border-solid border-[#07373F] ">
            <EnvelopeIcon className="size-7 inline-block mx-3 self-center" />
            <input
              autoComplete="off"
              className="w-full  text-white outline-none bg-[#08252B] focus:bg-[#08252B] rounded-xl  py-3 "
              {...register("email")}
              type="text"
            />
          </div>
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="Special request?">About the Project</label>
          <textarea
            className="w-full h-[127px] resize-none text-white outline-none bg-[#08252B] focus:bg-[#08252B] rounded-xl block p-3 border border-solid border-[#07373F] bg-none "
            {...register("request")}
          />
        </div>

        <div className=" flex flex-col gap-4  md:flex-row-reverse">
          <Button type="submit" variant={"primary"}>
            Get my free ticket
          </Button>
          <Button type="button" variant={"outline"} onClick={handlePrev}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
