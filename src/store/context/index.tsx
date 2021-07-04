import { createContext, ReactNode, useState, useContext } from 'react';

type ContextData = {
  isVisibileModalSuporte: boolean;
  handleClose: () => void;
  handleOpen:() => void;
}

export const Context = createContext( {} as ContextData );

type ContextProvider = {
  children: ReactNode;
  
}

export function ContextProvider ( {children }: ContextProvider) {

  const [ isVisibileModalSuporte, setIsvisibleModalSuporte ] = useState(false);
  
  const handleOpen = () => {
    setIsvisibleModalSuporte(true);
  };
  const handleClose = () => {
    setIsvisibleModalSuporte(false);
  };

  return (
    <Context.Provider value={{
      isVisibileModalSuporte,
      handleClose,
      handleOpen
      }}>
      {children}
    </Context.Provider>
  )
}


// export const  useContextData = () => {
//   return useContext(Context);
// }