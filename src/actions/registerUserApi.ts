import { TFormUser } from "@/types";

export async function register(formUser: TFormUser) {
  //   const response = await fetch("/api/auth/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formUser),
  //   });

  //   if (!response.ok) {
  //     const { error } = await response.json();
  //     throw new Error(error);
  //   }

  //   const { token } = await response.json();

  const EXPIRE_DAYS = 7;
  const DATE = new Date();
  DATE.setTime(DATE.getTime() + EXPIRE_DAYS * 24 * 60 * 60 * 1000);
  const expires = "expires="+DATE.toUTCString();

  document.cookie = `token=DAKLfLKDO5778653DSA365A4FDSA6; ${expires}; path=/; secure; SameSite=Strict`;

  //   return response.json();
}
