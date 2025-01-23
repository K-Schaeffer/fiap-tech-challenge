import { Account } from "./Account.model";

export const getAccountInfo = async () => {
  const res = await fetch("https://bytebankfiapfase2.vercel.app/accounts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response: Account[] = await res.json();

  return response.map((account) => new Account(account));
};
