import { useState } from "react";
import { persons } from "src/types";

export default function Pagination(sizePage: number, allPersonsTable: persons) {
  const [pages, setPages] = useState<number>(0);
  const [smaller, setSmaller] = useState<boolean>();

  function pagination() {
    if (allPersonsTable.length < sizePage) {
      setSmaller(true);
    } else {
      setSmaller(false);
    }

    const c = Math.floor(allPersonsTable.length / sizePage);
    if (allPersonsTable.length / sizePage == c) {
      setPages(c - 1);
    } else {
      setPages(c);
    }
  }

  return {
    pages,
    smaller,
    pagination,
  };
}
