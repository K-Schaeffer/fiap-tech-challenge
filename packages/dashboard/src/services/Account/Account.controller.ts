import http from "../../api/http-common";
import { ResultTypeModel } from "../Result.type.model";
import { AccountInfoModel, AccountModel } from "./Account.model";

const init = () => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRAdC5jb20iLCJlbWFpbCI6InRAdC5jb20iLCJwYXNzd29yZCI6InRAdC5jb20iLCJpZCI6IjY3OGVmODI1MmJmYzI3MzU2Y2UzYzEyNSIsImlhdCI6MTczNzQyMzMxNiwiZXhwIjoxNzM3NDY2NTE2fQ.2lbcT7XOfmxdpghagc2XjZZV75co4O-N4TfZxiBMVLs";

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return config;
};

const getAll = () => {
  let config = init();
  return http.get<ResultTypeModel<Array<AccountModel>>>(`/account`, config);
};

const getByUserId = (userId: string) => {
  let config = init();
  return http.get<ResultTypeModel<AccountInfoModel>>(
    `/account/user/${userId}`,
    config
  );
};

const AccountService = {
  getAll,
  getByUserId,
};

export default AccountService;
