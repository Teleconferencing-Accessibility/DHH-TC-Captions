import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import globalcolors from "../../styles/globalcolors";
import SpeakerLabel from "./SpeakerLabel";
import React from "react";
import buildConfigs from "../../buildConfigs.js";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function SpeakerWindow({ participant }) {
  let videoPath = participant.videoPaths[buildConfigs.videoSection - 1];
  let captionPath = participant.captionPaths[buildConfigs.videoSection - 1];
  let iconColor = participant.color;
  let name = participant.name;

  function handleSpeakerSubtitles() {
    return buildConfigs.hideCaptionsInWindow()
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
        width={buildConfigs.speakerWidth()}
        height={buildConfigs.speakerHeight()}
        url={videoPath}
        config={handleSpeakerSubtitles()}
      />
      <SpeakerLabel name={name} color={iconColor} />
    </Card>
  );
}
