import { Account } from "./Account.model";

export const getAccountInfo = async () => {
  const res = await fetch("http://localhost:3006/account", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: Account = await res.json();

  return new Account(data);
};
