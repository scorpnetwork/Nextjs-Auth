"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Loader, Loader2, LogOutIcon } from "lucide-react";
import { useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

const Home = () => {
  const { replace } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = () => {
    setIsLoading((prev) => !prev);
    cookie.remove("token");

    setTimeout(() => {
      replace("/auth/login");
    }, 2000);
  };
  return (
    <div className=" container py-3 mx-auto flex flex-row items-center justify-between">
      <div>Logo</div>
      <AlertDialog>
        <AlertDialogTrigger
          aria-label="logout"
          className="bg-red-500 hover:bg-red-400 duration-300 ease-in-out text-white   p-2 rounded-md"
        >
          {isLoading ? (
            <Loader2 className=" animate-spin size-[18px]" />
          ) : (
            <LogOutIcon className="size-[18px]" />
          )}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will remove your Cookies
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-400"
            >
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Home;
