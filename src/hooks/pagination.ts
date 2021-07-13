import {  useEffect, useState } from "react";
import { persons} from "src/types";

export default function Pagination(sizePage: number, allPersonsTable: persons) {
  const [pages, setPages] = useState<number>();
  const [smaller, setSmaller] = useState<boolean>();
  
  async function pagination(currentPage: number) {
    if (allPersonsTable.length < sizePage) {
      setSmaller(true);
    } else {
      setSmaller(false);
    }
    
    const c = Math.floor(allPersonsTable.length / sizePage);
    if (allPersonsTable.length / sizePage > c) {
      setPages(c + 1);
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
