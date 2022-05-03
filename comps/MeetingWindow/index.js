import { Grid, Box } from "@mui/material";
import SpeakerWindow from "./SpeakerWindow";
import study from "../../studyConfgs.json";

const jurorA = study.study1.jurorA;
const jurorB = study.study1.jurorB;
const jurorC = study.study1.jurorC;
const juryForeman = study.study1.juryForeman;

export default function MeetingWindow({section, condition}) {
  return (
    <Box sx={gridLayoutStyles}>
      <Grid container xl={2}>
        <Grid container xl={2} sx={gridRowStyles}>
          <SpeakerWindow participant={jurorA} section={section} condition={condition}/>
          <SpeakerWindow participant={jurorB} section={section} condition={condition}/>
        </Grid>
        <Grid container xl={2} sx={gridRowStyles}>
          <SpeakerWindow participant={jurorC} section={section} condition={condition}/>
          <SpeakerWindow participant={juryForeman} section={section} condition={condition}/>
        </Grid>
      </Grid>
    </Box>
  );
}

const gridRowStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const gridLayoutStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mr: 2,
};
