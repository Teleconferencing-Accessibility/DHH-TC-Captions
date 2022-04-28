import Typography from "@mui/material/Typography";
import { Avatar, Paper, Box } from "@mui/material";

export default function SpeakerLabel({ name, color }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: "1vh",
        right: "1vw",
        alignItems: "center",
        px: 2,
      }}
    >
      <Avatar
        sx={{
          height: 30,
          width: 30,
          mr: 1,
          bgcolor: color,
        }}
      >
        {getIconLetter(name)}
      </Avatar>
      <Typography
        variant="caption text"
        sx={{ color: "whitesmoke", borderColor: "#212121" }}
      >
        {name}
      </Typography>
    </Box>
  );
}

function getIconLetter(name) {
  return name.slice(0, 1);
}
