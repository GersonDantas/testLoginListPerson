import { useState } from "react";
import { persons } from "src/types";

export default function Pagination(sizePage: number, allPersonsTable: persons) {
  const [pages, setPages] = useState<number>(0);
  const [smaller, setSmaller] = useState<boolean>();

  function pagination() {
    if (allPersonsTable.length - 1 < sizePage) {
      setSmaller(true);
    } else {
      setSmaller(false);
    }

    const p = Math.trunc((allPersonsTable.length - 1) / sizePage);
    if ((allPersonsTable.length - 1) / sizePage > p) {
      setPages(p)
    } else {
      setPages(p - 1)
    }
  }

  return {
    pages,
    smaller,
    pagination,
  };
}
