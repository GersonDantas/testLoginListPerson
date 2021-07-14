import { api } from "../clientSide";
import { IFormCreate } from "src/types";

export async function createPerson(data: IFormCreate) {
  const resp = await api
    .post("/api/v1/People", data)
    .then((res) => res.data)
    .catch((e) => alert(`Error server in create person ${e.message}`));
  return resp;
}
