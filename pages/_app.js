import "../styles/globals.css";
import { SurveyFlowWrapper } from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <SurveyFlowWrapper>
      <Component {...pageProps} />
    </SurveyFlowWrapper>
  );
}

export default MyApp;
