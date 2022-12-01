import React, {useState} from 'react';

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
  // isDemoFlow & dummySession make it false for release apk

  const [session, setSession] = useState({
    isDemoFlow: 0,
  });

  return (
    <AppContext.Provider value={{session, setSession}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
