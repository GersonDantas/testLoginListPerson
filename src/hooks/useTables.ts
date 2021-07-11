import { persons } from "src/types/index";
import { useState } from "react";
import { ListiningPersons } from "@services/api/persons";

export default function UseTables(pageSize: number, IsPaged: boolean) {
  const [tables, setTables] = useState<persons>([{}]);

  async function fetchTable(currentPage: number) {
    const virtualPage = currentPage

    const t = await ListiningPersons(virtualPage, pageSize, IsPaged);
    setTables(t);
  }

  return {
    fetchTable,
    tables,
  };
}
