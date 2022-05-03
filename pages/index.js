import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import QualtricsSurvey from "../comps/QualtricsSurvey";
import { useState } from "react";
import { useAppContext } from "../context/state";

export default function Home() {
  const [inputRecieved, setInputRecieved] = useState(false);
  const [textFieldDisabled, setTextFieldDisabled] = useState(false);
  const context = useAppContext();

  const handleInput = (e) => {
    // Check if the ID follows the ID generation scheme.Once confirmed,
    // set the ID-latin square row- and current condition globally,
    // disable text entry, enable continue button.
    if (IDValid(e.target.value)) {
      setParticipantID(e.target.value);
      setInputRecieved(true);
      setTextFieldDisabled(true);
    }
  };

  function IDValid(id) {
    // Participant construction is as follows:
    // 107 207 307 407
    // 114 214 314 414
    // ... ... ... ...
    // ... ... ... ...
    // 163 263 363 463
    // 170 270 370 470
    // The leading digit is the row of the latin square and the following two
    // digits are multiples of 7, divide by 7 and it gives you the count of the
    // participants having done that row
    return id <= 470 && id >= 107 && (id % 100) % 7 == 0;
  }

  function setParticipantID(id) {
    context.participantID = id;
    calculateRow(id);
    calculateFirstCondition();
  }

  function calculateRow(id) {
    //Get the leading digit of the participant ID and deduct for indexing at 0
    const row = Math.floor(id / 100) - 1;

    context.latinSquareRow = context.latinSquare[row];
  }

  function calculateFirstCondition() {
    context.currentCondition = context.latinSquareRow[0];
  }

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
            sx={{ mr: 2 }}
            label="Participant ID"
            onChange={handleInput}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            disabled={textFieldDisabled}
          />
          <ContinueButton
            href={"/demographics"}
            disabled={!inputRecieved}
            onClick={setParticipantID}
          >
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
