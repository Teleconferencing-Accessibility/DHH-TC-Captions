import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import globalcolors from "../../styles/globalcolors";
export default function ChatEntry() {
  return (
    <Paper elevation={10} sx={chatWindowStyle}>
      <InputBase sx={chatFieldStyle} placeholder="Chat with your team" />
      <IconButton size="small" sx={sendChatButtonStyle}>
        <SendIcon sx={{ height: 20, width: 20 }} />
      </IconButton>
    </Paper>
  );
}

const chatWindowStyle = {
  borderRadius: 2,
  display: "flex",
  alignItems: "center",
  backgroundColor: globalcolors.white,
};
const chatFieldStyle = {
  ml: 1,
  flex: 1,
  backgroundColor: globalcolors.white,
};

const sendChatButtonStyle = {
  m: 1,
  backgroundColor: globalcolors.buttonColor,
  color: globalcolors.buttonFill,
  height: 24,
  width: 24,
};
