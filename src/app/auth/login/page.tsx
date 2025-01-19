"use client";
import { login } from "@/actions/loginUserApi";
import { Card } from "@/components/ui/card";
import LogInForm from "@/forms/login-form/LogIn-Form";
import { TFormUser } from "@/types";
import { LogIn } from "lucide-react";
import { useState } from "react";

const page = () => {
  const [isLoading, setLoading] = useState(false);
  const handleLoginUser = async (fromUser: TFormUser) => {
    setLoading(true);
    try {
      setLoading(false);
      console.log(fromUser);
      await login(fromUser);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="  max-w-full flex  flex-col items-center justify-center h-screen">
      <h2 className=" text-[32px] flex flex-row justify-center group items-center gap-1">
        Login{" "}
        <LogIn className=" group-hover:translate-y-8 group-hover:rotate-90 transition-all duration-400" />
      </h2>
      <Card className=" w-[400px] m-5 p-5">
        <LogInForm
          isLoading={isLoading}
          onSave={(formUser) => handleLoginUser(formUser)}
        />
      </Card>
    </div>
  );
};

export default page;
