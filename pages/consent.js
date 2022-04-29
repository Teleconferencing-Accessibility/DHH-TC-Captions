import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ContinueButton from "../comps/ContinueButton";
import QualtricsSurvey from "../comps/QualtricsSurvey";
import background from "../styles/background";

export default function consent() {
  return (
    <Paper sx={background}>
      <Stack>
        <QualtricsSurvey
          surveyURL={
            "https://gatech.co1.qualtrics.com/jfe/form/SV_0oW1gC2Y1eny2do"
          }
        />
        <ContinueButton text={"continue"} href={"/demographics"} />
      </Stack>
    </Paper>
  );
}
