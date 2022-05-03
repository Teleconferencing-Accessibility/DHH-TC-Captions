import Box from "@mui/material/Box";
import BaseCaptions from "./BaseCaptions";
import buildConfigs from "../../buildConfigs";

export default function CaptionView({section, condition}) {
  if (buildConfigs.hideBaseCaptions()) return <></>;
  return (
    <>
      <Box>
        <BaseCaptions />
      </Box>
    </>
  );
}
