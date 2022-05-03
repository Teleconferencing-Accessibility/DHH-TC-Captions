import { createContext, useContext } from 'react';
import LatinSquare from './LatinSquare';

const AppContext = createContext();

export function SurveyFlowWrapper({ children }) {

  let sharedState = {
    participantID: 0,
    latinSquare: LatinSquare,
    latinSquareRow: LatinSquare[0],
    currentCondition: LatinSquare[0][0],
    currentSection: 1,
    currentIndex: 0,
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