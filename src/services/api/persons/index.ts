import { api } from "@services/api/clientSide";

/*
 *gets and head
 */

//Listining all persons
export async function ListiningAllPersons() {
  const resp = await api
    .get(
      `/api/v1/People`
    )
    .then((res) => res.data)
    .catch((e) => alert(`Erro na requisiçao ao servidor: ${e.message}`));
  return resp;
}

//Listining all persons, with or without pagination
export async function ListiningPersons(
  currentPage: number,
  pageSize: number,
  IsPaged: boolean
) {
  const resp = await api
    .get(
      `/api/v1/People?CurrentPage=${currentPage}&PageSize=${pageSize}&IsPaged=${IsPaged}`
    )
    .then((res) => res.data)
    .catch((e) => alert(`Erro na requisiçao ao servidor: ${e.message}`));
  return resp;
}

//listining all heads
export async function ListiningHead() {
  const resp = await api
    .head("/api/v1/People", {
      params: {
        CurrentPage: 4,
        PageSize: 8,
      },
    })
    .then((res) => res.data)
    .catch((e) => alert(`Erro na requisiçao ao servidor: ${e.message}`));

  return resp;
}

//return one person
export async function getOnePerson(id: string) {
  const resp = await api
    .get("/api/v1/People" + id)
    .then((res) => res.data)
    .catch((e) => alert(`Erro na requisiçao ao servidor: ${e.message}`));

  return resp;
}

//return imc of one person
export async function getOnePersonImc(id: string) {
  const resp = await api
    .get("/api/v1/People/" + id + "/IMC")
    .then((res) => res.data)
    .catch((e) => alert(`Erro na requisiçao ao servidor: ${e.message}`));

  return resp;
}

/*
 **post
 */
