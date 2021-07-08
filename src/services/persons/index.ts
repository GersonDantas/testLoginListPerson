import { api } from "@services/api/clientSide";

export function ListiningPersons() {
  return api
    .get("/api/v1/People")
    .then((res) => res.data)
    .catch((e) => alert(`Erro na requisiçao ao servidor: ${e.message}`));
}
