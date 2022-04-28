import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import MeetingWindow from "./MeetingWindow";
import ChatWindow from "./ChatWindow";
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
      <Stack direction="row" sx={{ flexGrow: 21 }}>
        <MeetingWindow />
        <ChatWindow />
      </Stack>
      <CaptionView />
      <ControlBar />
    </Paper>
  );
}
