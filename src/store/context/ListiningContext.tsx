import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { persons } from "src/types/index";

type ContextData = {
  isVisibileModalCreate: boolean;
  handleOpenCreate: () => void;
  handleOpenUpdate: () => void;
  isVisibileModalUpdate: boolean;
  handleClose: () => void;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const Context = createContext({} as ContextData);

export type ContextProvider = {
  children: ReactNode;
};

export function ListiningContextProvider({ children }: ContextProvider) {
  const [isVisibileModalCreate, setIsvisibleModalCreate] = useState(false);
  const [isVisibileModalUpdate, setIsvisibleModalUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpenCreate = () => {
    setIsvisibleModalCreate(true);
  };
  const handleClose = () => {
    setIsvisibleModalCreate(false);
    setIsvisibleModalUpdate(false);
  };
  const handleOpenUpdate = () => {
    setIsvisibleModalUpdate(true);
  };

  return (
    <Context.Provider
      value={{
        isVisibileModalCreate,
        handleClose,
        handleOpenCreate,
        isVisibileModalUpdate,
        handleOpenUpdate,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}
