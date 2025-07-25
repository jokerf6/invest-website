import Inputs from "@/components/default/inputs";
import { process } from "@/store/process";
import { signUpObj } from "@/store/signUpObj";

import { idServises } from "@/services/signup/id.service";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import ImageUpload from "../imageUpload.component";

export default function ID() {
  const mutation = useMutation({
    mutationFn: (e) => {
      return idServises(e, img, file, token, increment);
    },
  });
  const [file, setFile] = useState<File>();
  const { nationalId, img, updateNationalId, token } = signUpObj();
  const { increment } = process();
  return (
    <form
      className=" flex flex-col gap-3 items-center "
      onSubmit={(e: any) => {
        e.preventDefault();
        mutation.mutate(e);
      }}
    >
      <div className=" flex justify-between items-center w-full">
        <label className="  shadow-lg rounded-2xl p-2 pr-8 ">
          <input type="radio" name="national" />
          <span className=" text-main text-xs font-bold">National ID</span>
        </label>
        <label className="  shadow-lg rounded-2xl p-2 pr-8 ">
          <input type="radio" name="passport" />
          <span className=" text-main tex text-xs font-bold">Passport</span>
        </label>
      </div>
      <ImageUpload setFile={setFile} />

      <Inputs
        text="National ID"
        holder="Enter your national ID"
        name="NationalId"
        value={nationalId}
        onChange={(e: any) => updateNationalId(e.target.value)}
      />
      <button
        type="submit"
        className=" bg-main2 py-2  hover:shadow-md text-white rounded-md w-full mt-4 "
      >
        {mutation.isPending ? "Loading" : "Continue"}
      </button>
    </form>
  );
}
