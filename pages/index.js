import { Typography, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import background from "../styles/background";
import ContinueButton from "../comps/ContinueButton";
import ExitButton from "../comps/ExitButton";

export default function Home() {
  return (
    <Paper sx={background}>
      <Stack>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            width: "60vw",
            borderRadius: "10px",
            my: 3,
          }}
        >
          <Typography> Here is some study info</Typography>
        </Paper>
        <Stack direction={"row"} sx={{}}>
          <ContinueButton
            text="I would Like to proceed with the study"
            href="/consent"
          />
          <ExitButton text="Exit Study" href="/exitStudy" />
        </Stack>
      </Stack>
    </Paper>
  );
}
