import { Paper, Stack } from "@mui/material";
import ContinueButton from "../comps/ContinueButton";
import QualtricsSurvey from "../comps/QualtricsSurvey";
import background from "../styles/surveyBackdrop";
import buildConfigs from "../buildConfigs";
export default function test() {
  return (
    <Paper sx={background}>
      <Stack>
        <QualtricsSurvey
          surveyURL={
            "https://gatech.co1.qualtrics.com/jfe/form/SV_8dB9PSHPQ6wtjgy" +
            "?id=" +
            2 +
            "&condition=" +
            buildConfigs.conditionNumber +
            "&section=" +
            buildConfigs.videoSection
          }
        />
        <ContinueButton
          text={"continue"}
          href={
            "/study?condition=" +
            buildConfigs.conditionNumber +
            "&section=" +
            buildConfigs.videoSection
          }
        />
      </Stack>
    </Paper>
  );
}
