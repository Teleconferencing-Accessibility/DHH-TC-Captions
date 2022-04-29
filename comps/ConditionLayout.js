import Paper from "@mui/material/Paper";
import MeetingWindow from "./MeetingWindow";
import ControlBar from "./ControlBar";
import globalcolors from "../styles/globalcolors";
import CaptionView from "./CaptionView";

export default function ConditionLayout() {
  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalcolors.backdrop,
        flexDirection: "column",
        borderRadius: 0,
        p: 2,
      }}
    >
        <MeetingWindow />
      <CaptionView />
      <ControlBar />
    </Paper>
  );
}
