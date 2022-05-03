import { TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import QualtricsSurvey from "../comps/QualtricsSurvey";
import { useState } from "react";

export default function Home() {
  const [inputRecieved, setInputRecieved] = useState(false);
  const [participantID, setParticipantID] = useState("");
  const handleInput = (e) => {
    setParticipantID(e.target.value);
    setInputRecieved(true);
    //TODO do something with participant id entry
  };

  return (
    <Paper
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D6DBD4",
        flexDirection: "row",
        borderRadius: 0,
        p: 2,
      }}
    >
      <Stack>
        <QualtricsSurvey
          surveyURL={
            "https://gatech.co1.qualtrics.com/jfe/form/SV_80tgCfVeNmkttZk"
          }
        />
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <ParticipantIDTextField
            fullwidth
            sx={{ mr: 2 }}
            label="Participant ID"
            onChange={handleInput}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <ContinueButton href={"/demographics"} disabled={!inputRecieved}>
            continue
          </ContinueButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

const ParticipantIDTextField = styled(TextField)(({}) => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  "& label.Mui-focused": {
    color: "#003057",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "#003057",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#003057",
    },
  },
}));

const ContinueButton = styled(Button)(({}) => ({
  color: "#FFF",
  backgroundColor: "#B3A369",
  "&:hover": {
    backgroundColor: "#857437",
  },
  "&:disabled": {
    backgroundColor: "#003057",
  },
  borderRadius: "10px",
}));
