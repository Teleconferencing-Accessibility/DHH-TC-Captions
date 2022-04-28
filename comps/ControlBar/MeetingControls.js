import Box from "@mui/material/Box";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CallEndIcon from "@mui/icons-material/CallEnd";
import MeetingControlButton from "./MeetingControlButton";

export default function MeetingControls() {
  return (
    <Box>
      <MeetingControlButton icon={<VolumeMuteIcon />} />
      <MeetingControlButton icon={<CameraAltIcon />} />
      <MeetingControlButton icon={<ChatBubbleOutlineIcon />} />
      <MeetingControlButton icon={<ClosedCaptionOffIcon />} />
      <MeetingControlButton icon={<CallEndIcon />} />
    </Box>
  );
}
