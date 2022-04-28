import Box from "@mui/material/Box";
import BaseCaptions from "./BaseCaptions";
import buildConfigs from "../../buildConfigs";

export default function CaptionView() {
  if (buildConfigs.hideBaseCaptions()) return <></>;
  return (
    <>
      <Box>
        <BaseCaptions />
      </Box>
    </>
  );
}
