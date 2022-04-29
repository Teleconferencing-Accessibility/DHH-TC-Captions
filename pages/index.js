import { Typography, Button, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import background from "../styles/background";
import styled from "@emotion/styled";
import Link from "next/link";

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
        <Link href={"/consent"}>
          <ContinueButton variant="contained">
            I would Like to proceed with the study
          </ContinueButton>
        </Link>
      </Stack>
    </Paper>
  );
}

const ContinueButton = styled(Button)(({}) => ({
  backgroundColor: "#B3A369",
  "&:hover": {
    backgroundColor: "#857437",
  },
  borderRadius: "10px",
}));
