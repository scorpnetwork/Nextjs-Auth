"use client";
import { register } from "@/actions/registerUserApi";
import { Card } from "@/components/ui/card";
import RegisterForm from "@/forms/register-form/Register-Form";
import { TFormUser } from "@/types";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const { replace } = useRouter();
  const [isLoading, setLoading] = useState(false);
  const handleRegisterUser = async (fromUser: TFormUser) => {
    setLoading(true);
    try {
      setLoading(false);
      await register(fromUser);
      replace("/", {});
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className="    max-w-full flex  flex-col  items-center justify-center h-screen">
      <h2 className=" text-[32px] flex flex-row justify-center group items-center gap-1">
        Register{" "}
        <LogIn className=" group-hover:translate-y-8 group-hover:rotate-90 transition-all duration-400" />
      </h2>
      <Card className=" w-[300px]  md:w-[400px] m-5 p-5">
        <RegisterForm
          isLoading={isLoading}
          onSave={(formUser) => handleRegisterUser(formUser)}
        />
      </Card>
    </div>
  );
};

export default page;
