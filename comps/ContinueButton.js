import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledContinueButton = styled(Button)(({}) => ({
  backgroundColor: "#B3A369",
  "&:hover": {
    backgroundColor: "#857437",
  },
  borderRadius: "10px",
}));

export default function ContinueButton({ text, href }) {
  return (
    <Link href={href}>
      <StyledContinueButton variant="contained" sx= {{mx: 1}}> {text} </StyledContinueButton>
    </Link>
  );
}
