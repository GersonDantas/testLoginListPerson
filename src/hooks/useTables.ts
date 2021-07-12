import { persons } from "src/types/index";
import { useState } from "react";
import { ListiningAllPersons, ListiningPersons } from "@services/api/persons";
import { setCookie } from "nookies";

export default function UseTables(pageSize: number, IsPaged: boolean) {
  const [tables, setTables] = useState<persons>([{}]);
  const [pages, setPages] = useState<number>();
  const [smaller, setSmaller] = useState<boolean>();

  async function pagination() {
    const allCurrentArray = await ListiningAllPersons();

    if (allCurrentArray.length < pageSize) {
      setSmaller(true);
    } else {
      setSmaller(false);
    }

    const c = Math.floor(allCurrentArray / pageSize);
    if (allCurrentArray > c) {
      setPages(c);
    } else {
      setPages(c + 1);
    }
    console.log(ListiningAllPersons())
  }

  async function fetchTable(currentPage: number) {
    const virtualPage = currentPage;

    const t = await ListiningPersons(virtualPage, pageSize, IsPaged);
    setTables(t);
  }

  return {
    fetchTable,
    tables,
    pages,
    smaller,
    pagination
  };
}
