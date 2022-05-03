import { Paper, Stack } from "@mui/material";
import ContinueButton from "../comps/ContinueButton";
import QualtricsSurvey from "../comps/QualtricsSurvey";
import background from "../styles/surveyBackdrop";
export default function demographics() {
  return (
    <Paper sx={background}>
      <Stack>
        <QualtricsSurvey
          surveyURL={
            "https://gatech.co1.qualtrics.com/jfe/form/SV_0oW1gC2Y1eny2do"
          }
        />
        <ContinueButton text={"continue"} href={"/study"} />
      </Stack>
    </Paper>
  );
}
