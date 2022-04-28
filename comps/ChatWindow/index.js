import Box from "@mui/material/Box";
import { Divider, Paper } from "@mui/material";
import ChatEntry from "./ChatEntry";
import globalcolors from "../../styles/globalcolors";

export default function ChatWindow() {
  return <></>;
  return (
    <Paper
      spacing={1}
      elevation={24}
      sx={{
        p: 2,
        borderRadius: 2,
        flexGrow: 1 / 2,
        display: "flex",
        flexDirection: "column",
        backgroundColor: globalcolors.card,
      }}
    >
      <Box sx={{ flexGrow: 1 / 2 }} />
      <Divider />
      <Box sx={{ flexGrow: 11 }} />
      <Divider />
      <ChatEntry />
    </Paper>
  );
}
