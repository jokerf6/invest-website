import Inputs from "@/components/default/inputs";
import { testPasswword } from "@/functions/validations";
import signupService from "@/services/signup/signup.service";
import { process } from "@/store/process";
import { signUpObj } from "@/store/signUpObj";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Constrains from "../constrains.component";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const {
    updateEmail,
    updateToken,
    updateFirstName,
    updateLastName,
    updatePhone,
    updateCountry,
    updateCity,
    updateImg,
    updateNationalId,
  } = signUpObj();
  const { increment, setCount } = process();
  const mutation = useMutation({
    mutationFn: (e) => {
      return signupService(
        e,
        updateEmail,
        updateToken,
        increment,
        setCount,
        updateFirstName,
        updateLastName,
        updatePhone,
        updateCountry,
        updateCity,
        updateImg,
        updateNationalId,
        router
      );
    },
  });
  const [error, setError] = useState<string>("");
  return (
    <>
      <form
        className="flex flex-col gap-8"
        onSubmit={(e: any) => {
          e.preventDefault();
          mutation.mutate(e);
        }}
      >
        <div className="flex flex-col gap-[20px]">
          <Inputs
            holder="Enter your email"
            text="Email"
            name="SignupEmail"
            inputClassName="placeholder:text-base text-base"
            spanClassName="font-medium"
          />
          <div className="flex flex-col gap-2">
            <Inputs
              holder="**********"
              text="Password"
              name="SignupPassword"
              onChange={handelPassword}
              inputClassName="placeholder:text-base text-base"
              spanClassName="font-medium"
            />
            <Constrains error={error} />
          </div>
        </div>
        <button
          disabled={mutation.isPending}
          type="submit"
          className=" bg-main2 px-[10px] py-4 hover:shadow-md text-white rounded-md w-full font-semibold"
        >
          {mutation.isPending ? "Loading" : "Continue"}
        </button>
      </form>
    </>
  );

  function handelPassword(e: any) {
    const validPassword = testPasswword(e.target.value);
    if (validPassword) setError(validPassword);
    else setError("");
  }
}
