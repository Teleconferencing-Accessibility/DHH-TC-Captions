import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function ParticipantIDEntry() {
  const entryColor = "#e0e0e0";

  return (
    <Paper
      elevation={24}
      sx={{
        width: "50vw",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2,
        backgroundColor: "#424242",
      }}
    >
      <Stack>
        <Typography sx={{ color: entryColor }}>Participant ID:</Typography>
        <div>
          <TextField
            sx={{
              width: "20vw",
              backgroundColor: entryColor,
              borderRadius: 2,
            }}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            variant="outlined"
          />
          <Link href="/demographics">
            <Button
              variant="contained"
              disableElevation
              sx={{ color: entryColor, py: "2vh", borderRadius: 2, mx: "1vw" }}
            >
              Continue
            </Button>
          </Link>
        </div>
      </Stack>
    </Paper>
  );
}
