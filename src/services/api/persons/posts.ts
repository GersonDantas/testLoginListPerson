import { api } from "../clientSide";
import { IFormCreate } from "src/types";

export async function createPerson(data: IFormCreate) {
  console.log(data)
  const resp = await api
    .post("/api/v1/People", {...data})
    .then((res) => res.data)
    .catch((err) => alert(`erro: ${err.message}`));
  return resp;
}
