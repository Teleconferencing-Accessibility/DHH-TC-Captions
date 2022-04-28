import Paper from "@mui/material/Paper";
import ParticipantIDEntry from "../comps/ParticipantIDEntry";
import background from "../styles/background";

export default function Home() {
  return (
    <Paper sx={background}>
      <ParticipantIDEntry />
    </Paper>
  );
}
