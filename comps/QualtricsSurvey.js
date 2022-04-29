import Paper from "@mui/material/Paper";

export default function QualtricsSurvey({ surveyURL }) {
  return (
    <Paper
      elevation={24}
      sx={{
        height: "80vh",
        width: "60vw",
        borderRadius: "10px",
        my: 3,
      }}
    >
      <iframe
        src={surveyURL}
        height="100%"
        width="100%"
        style={{ border: "none", borderRadius: "10px" }}
      />
    </Paper>
  );
}
