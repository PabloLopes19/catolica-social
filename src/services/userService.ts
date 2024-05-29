import api from "./catolica-api";

interface IUserModel {
  name: string;
  username: string;
  avatar: string;
  email: string;
  bio: string;
  followers: number;
}

export async function createUser(body: IUserModel) {
  const data = await api.post("/user/create", body);

  return data;
}
