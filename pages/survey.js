import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import background from "../styles/background";
import Link from "next/link";

export default function instructions() {
  return (
    <Paper sx={background}>
      <Typography>
        Survey Here 
      </Typography>
      <Link href = "/study">
          <Button variant = "contained"> Start Next Condition</Button>
      </Link>
    </Paper>
  );
}
