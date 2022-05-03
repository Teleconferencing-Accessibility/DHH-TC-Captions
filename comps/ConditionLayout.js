import Paper from "@mui/material/Paper";
import MeetingWindow from "./MeetingWindow";
import ControlBar from "./ControlBar";
import globalcolors from "../styles/globalcolors";
import CaptionView from "./CaptionView";

export default function ConditionLayout({ condition, section }) {
  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalcolors.conditionBackdrop,
        flexDirection: "column",
        borderRadius: 0,
        p: 2,
      }}
    >
      <MeetingWindow section={section} condition={condition}/>
      <CaptionView section={section} condition={condition}/>
      <ControlBar />
    </Paper>
  );
}
