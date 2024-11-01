import { Account, AccountData } from './Account.model';

export const getAccountInfo = async () => {
  const res = await fetch('http://localhost:3004/account', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
 
  const data: AccountData = await res.json();

  return new Account(data);
}