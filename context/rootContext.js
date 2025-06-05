import {createContext, useContext, useState} from 'react';

const rootCtx = createContext(null);

export const RootContextProvider = ({children}) => {
  const [test, setTest] = useState(0);

  const ctx = {
    test,
    setTest,
  };
  return <rootCtx.Provider value={ctx}>{children}</rootCtx.Provider>;
};

export const useRootContext = () => {
  const context = useContext(rootCtx);
  if (context) return context;
  else
    throw new Error(
      'useRootContext has to be placed under RootContextProvider',
    );
};
