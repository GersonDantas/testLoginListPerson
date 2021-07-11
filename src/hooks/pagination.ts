import { ListiningPersons } from "@services/api/persons";
import { setCookie } from "nookies";


export default async function Pagination(
  sizePage: number,
  currentPage: number,) {
  const nextPage = await ListiningPersons(currentPage + 1, sizePage, true);
  const sizeCurrentArray = await ListiningPersons(currentPage, sizePage, true);


  let buttonRight;
  let buttonLeft;
  //current page init in One
  if (currentPage === 1) {
    if (sizeCurrentArray.length === sizePage && nextPage.length !== 0) {
      buttonRight = true;
      buttonLeft = false;
      setCookie(undefined, "Leadsoft.currentPage", currentPage.toString(), {
        expires: new Date(new Date().getFullYear() + 50, 1, 1),
      });
      return {
        buttonLeft,
        buttonRight,
      };
    }
    buttonRight = false;
    buttonLeft = false;
    setCookie(undefined, "Leadsoft.currentPage", currentPage.toString(), {
      expires: new Date(new Date().getFullYear() + 50, 1, 1),
    });
    return {
      buttonLeft,
      buttonRight,
    };
  }
  if (currentPage > 1) {
    if (sizeCurrentArray === sizePage && nextPage.length !== 0) {
      buttonRight = false;
      buttonLeft = true;
      setCookie(undefined, "Leadsoft.currentPage", currentPage.toString(), {
        expires: new Date(new Date().getFullYear() + 50, 1, 1),
      });
      return {
        buttonLeft,
        buttonRight,
      };
    }
    buttonRight = false;
    buttonLeft = false;
    setCookie(undefined, "Leadsoft.currentPage", currentPage.toString(), {
      expires: new Date(new Date().getFullYear() + 50, 1, 1),
    });
    return {
      buttonLeft,
      buttonRight,
    };
  }
}
