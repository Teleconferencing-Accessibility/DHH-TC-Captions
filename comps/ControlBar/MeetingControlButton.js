import IconButton from "@mui/material/IconButton";
import globalcolors from "../../styles/globalcolors";

export default function MeetingControlButton({ icon }) {
  return (
    <IconButton size="small" sx={buttonStyle}>
      {icon}
    </IconButton>
  );
}

const buttonStyle = {
  width: 64,
  height: 64,
  m: 1,
  "&:hover": {
    backgroundColor: globalcolors.buttonHovered,
  },
  "&:focus": {
    backgroundColor: globalcolors.buttonClicked,
  },
  backgroundColor: globalcolors.buttonColor,
  color: globalcolors.buttonFill,
};
