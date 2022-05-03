import { Paper, Typography } from "@mui/material";
import ContinueButton from "../comps/ContinueButton";
import surveyBackdrop from "../styles/surveyBackdrop";

export default function StudyInstructions() {
  return (
    <Paper sx={surveyBackdrop}>
      <Typography>Study Instructions Here</Typography>
      <ContinueButton text={"Begin Study"} href={"/study"} />
    </Paper>
  );
}
