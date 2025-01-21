import api from "../../api/http-common";
import { ResultTypeModel } from "./../Result.type.model";
import { UserModel } from "./User.model";

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
  return api.get<ResultTypeModel<Array<UserModel>>>(`/user`, config);
};

const create = (data: UserModel) => {
  let config = init();
  return api.post<ResultTypeModel<UserModel>>(`/user`, data, config);
};

const authorization = (data: UserModel) => {
  let config = init();
  console.log(api);

  return api.post<ResultTypeModel<UserModel>>(`/user/auth`, data, config);
};

const UserService = {
  getAll,
  create,
  authorization,
};

export default UserService;
