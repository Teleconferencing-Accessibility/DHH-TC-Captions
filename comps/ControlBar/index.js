import MeetingControls from "./MeetingControls";
import Box from "@mui/system/Box";

export default function ControlBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MeetingControls />
    </Box>
  );
}
