import React, {createContext, useContext, useState} from 'react';

const ValueContext = createContext();

export const useValue = () => useContext(ValueContext);

export const ValueProvider = ({children}) => {
  const [value, setValue] = useState('nguPhap');

  return (
    <ValueContext.Provider value={{value, setValue}}>
      {children}
    </ValueContext.Provider>
  );
};
