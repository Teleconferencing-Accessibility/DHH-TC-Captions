import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import background from "../styles/background";
import Link from "next/link";

export default function instructions() {
  return (
    <Paper sx={background}>
      <Paper elevation = {24} sx = {{height: "80vh", width: "40vw", borderRadius: "20px"}}>
      <iframe
        src="https://gatech.co1.qualtrics.com/jfe/form/SV_6yslZqDjaJAqXH0"
        height="100%"
        width="100%"
        style={{border: "none", borderRadius: "20px"}}
      />
      </Paper>
      <Typography>
        This is a modal for giving instructions before starting a condition
      </Typography>
      <Link href="/study">
        <Button variant="contained"> Start Study</Button>
      </Link>
    </Paper>
  );
}
