import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledExitButton = styled(Button)(({}) => ({
  backgroundColor: "#003057",
  "&:hover": {
    backgroundColor: "#002645",
  },
  borderRadius: "10px",
  display: "flex",
  mx: 1,
}));

export default function ExitButton({ text, href }) {
  return (
    <Link href={href}>
      <StyledExitButton variant="contained" sx={{ mx: 1 }}>
        {text}
      </StyledExitButton>
    </Link>
  );
}
