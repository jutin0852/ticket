"use client";
import React from "react";

import { Button } from "./Button";
import { CloudUploadIcon } from "hugeicons-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  request: z.string(),
});

type FormFields = z.infer<typeof schema>;
export default function AttendeeDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
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
    console.log(uploadedImageURL.url);
    console.log(file);
  };
  return (
    <div className="sm:w-[70%] w-[90%] m-auto bg-[#08252B] text-white p-6 flex flex-col gap-8 rounded-[32px] border-solid border border-[#197686]">
      <div className="flex flex-col md:flex-row md:justify-between">
        <p>Attendee Details</p>
        <p>Step 2/3</p>
      </div>
      <div className=" flex flex-col gap-8 py-4 px-6  border-r-[#07373F] border-r-2 border-l-2 border-b-2  border-b-[#07373F] border-l-[#07373F] bg-[#052228] rounded-3xl backdrop-blur-sm">
        <p>Upload Profile picture</p>

        <div>
          <div className="hidden md:block bg-opacity-20 bg-black h-[200px]"></div>
          <div className="p-6 flex justify-center items-center text-center  gap-4 flex-col rounded-[32px] bg-[#24A0B580] relative bottom-5 m-auto bg-opacity-50 size-[240px] border-solid border-4 border-[#24A0B5]">
            <CloudUploadIcon />
            <p className="text-sm">drag and drop or click to upload</p>
            <input type="file" onChange={handleFileUpload} />
          </div>
        </div>
      </div>
      <form
        className="flex flex-col gap-5 items-stretch"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-col flex gap-2">
          <label htmlFor="fullName">Enter your name</label>
          <input
            className="w-full block p-3 border border-solid border-[#07373F] bg-transparent "
            {...register("fullName")}
            type="text"
          />
          {errors.fullName && <p>{errors.fullName?.message}</p>}
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="email">Enter your email*</label>
          <input
            className="w-full block p-3 border border-solid border-[#07373F] bg-transparent "
            {...register("email")}
            type="text"
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="Special request?">About the Project</label>
          <textarea
            className=" w-full block p-3 border border-solid border-[#07373F] bg-transparent "
            {...register("request")}
            name=""
            id=""
          />
        </div>

        <div className=" flex flex-col gap-4  md:flex-row-reverse">
          <Button type="submit" variant={"primary"}>
            Next
          </Button>
          <Button type="button" variant={"outline"}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
