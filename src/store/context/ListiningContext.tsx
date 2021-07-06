import {
  createContext,
  ReactNode,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type ContextData = {
  isVisibileModalCreate: boolean;
  handleOpenCreate: () => void;
  handleOpenUpdate: () => void;
  isVisibileModalUpdate: boolean;
  handleClose: () => void;
  updateRows: Array<{
    id?: number;
    name?: string;
    age?: number;
    imc?: number;
    height?: number;
    weight?: number;
  }>;
  setUpdateRows: Dispatch<
    SetStateAction<
      Array<{
        id?: number;
        name?: string;
        age?: number;
        imc?: number;
        height?: number;
        weight?: number;
      }>
    >
  >;
};

export const Context = createContext({} as ContextData);

export type ContextProvider = {
  children: ReactNode;
};

export function ListiningContextProvider({ children }: ContextProvider) {
  const [isVisibileModalCreate, setIsvisibleModalCreate] = useState(false);
  const [isVisibileModalUpdate, setIsvisibleModalUpdate] = useState(false);
  const [updateRows, setUpdateRows] = useState([{}]);

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
        updateRows,
        setUpdateRows,
      }}
    >
      {children}
    </Context.Provider>
  );
}
