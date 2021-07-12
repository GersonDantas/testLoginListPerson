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
};

export const Context = createContext({} as ContextData);

export type ContextProvider = {
  children: ReactNode;
};

export function ListiningContextProvider({ children }: ContextProvider) {
  const [isVisibileModalCreate, setIsvisibleModalCreate] = useState(false);
  const [isVisibileModalUpdate, setIsvisibleModalUpdate] = useState(false);

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
      }}
    >
      {children}
    </Context.Provider>
  );
}
