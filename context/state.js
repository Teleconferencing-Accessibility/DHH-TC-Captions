import { createContext, useContext } from 'react';
import LatinSquare from './LatinSquare';

const AppContext = createContext();

export function SurveyFlowWrapper({ children }) {

  let sharedState = {
    participantID: 0,
    latinSquareRow: LatinSquare[0],
    currentCondition: LatinSqaure[0][0],
    currentSection: 1
}
  
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}