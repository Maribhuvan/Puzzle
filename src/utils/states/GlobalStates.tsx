import React, {FC, useState} from 'react';
import {IAppContext} from '../dto';
import {createSafeContext, useSafeContext} from '../functions';

export const AppContext = createSafeContext<IAppContext>();

export const useAppContext = () => useSafeContext(AppContext);

export const AppProvider: FC<React.PropsWithChildren> = ({children}) => {
  const [score, setScore] = useState(0);

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
      }}>
      {children}
    </AppContext.Provider>
  );
};
