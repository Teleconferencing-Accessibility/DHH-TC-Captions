import { Box, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import globalcolors from "../../styles/globalcolors";
import SpeakerLabel from "./SpeakerLabel";
import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function SpeakerWindow({ participant, condition, section }) {
  let videoPath = participant.videoPaths[section - 1];
  let captionPath = participant.captionPaths[section - 1];
  let iconColor = participant.color;
  let name = participant.name;

  function speakerWidth() {
    return condition == 2 ? "600px" : "551.11px";
  }
  function speakerHeight() {
    return condition == 2 ? "337.5px" : "310px";
  }

  function handleSpeakerSubtitles() {
    return condition == 1 || condition == 4
      ? {}
      : {
          file: {
            tracks: [
              {
                kind: "subtitles",
                src: captionPath,
                srcLang: "en",
                default: true,
              },
            ],
          },
        };
  }
  return (
    <Card
      elevation={24}
      sx={{
        m: 1,
        backgroundColor: globalcolors.card,
        position: "relative",
        alignItems: "center",
        justifyContent: "space-around",
        display: "flex",
      }}
    >
      <ReactPlayer
        playing
        muted
        width={speakerWidth()}
        height={speakerHeight()}
        url={videoPath}
        config={handleSpeakerSubtitles()}
      />
      <Typography>
        condition: {condition} section: {section}
      </Typography>
      
      <SpeakerLabel name={name} color={iconColor} />
    </Card>
  );
}
