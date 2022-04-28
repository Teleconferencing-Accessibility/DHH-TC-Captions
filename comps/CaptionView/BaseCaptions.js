import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import captionArray from "../../public/captions/combined.1";

export default function BaseCaptions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Start tracking time
  const startTime = Date.now();
  const [currentTime, setCurrentTime] = useState(0);
  const [completedCaptions, setCompletedCaptions] = useState(false);
  // get the start time of the first index and second index to start
  // tracking where the captions are timewise
  const [currentStart, setCurrentStart] = useState(
    captionArray[currentIndex].start
  );
  const [nextStart, setNextStart] = useState(
    captionArray[currentIndex + 1].start
  );
  // get the end time of the first index and second index to start
  // tracking where the captions are timewise
  const [currentEnd, setCurrentEnd] = useState(captionArray[currentIndex].end);
  const [nextEnd, setNextEnd] = useState(captionArray[currentIndex + 1].end);

  const generateCaptions = () => {
    () => updateTime();
    if (!completedCaptions) {
      if (beforeTextStarts()) return <br />;
      if (inbetweenTextStartAndEnd()) return getCurrentText();
      updateCaptionVariables();
    } else {
      return;
    }
  };
  function updateTime() {
    return Date.now() - startTime;
  }

  function getCurrentText() {
    return captionArray[currentIndex].text;
  }

  function inbetweenTextStartAndEnd() {
    // *-----|CurrentStart|-----{__CurrentTime__}-----|CurrentEnd|-----|NextStart|-----|NextEnd|----->
    return currentTime >= currentStart && currentTime < currentEnd;
  }

  function beforeTextStarts() {
    // *-----{__CurrentTime__}-----|CurrentStart|-----|CurrentEnd|-----|NextStart|-----|NextEnd|----->
    return currentTime < currentStart;
  }

  function updateCaptionVariables() {
    // *---|no longer track|--|no longer track|--{__CurrentTime__}---|CurrentStart|--|CurrentEnd|----->|NextStart|-----|NextEnd|----->
    // *-----|CurrentStart|-----|CurrentEnd|-----{__CurrentTime__}-----|NextStart|-----|NextEnd|----->
    setCurrentStart(nextStart);
    setCurrentEnd(nextEnd);
    setNextStart(captionArray[currentIndex + 1].start);
    setNextEnd(captionArray[currentIndex + 1].end);
    setCurrentIndex(currentIndex + 1);
    if (currentIndex == captionArray.length - 1) {
      setCompletedCaptions(true);
      return;
    }
  }

  const [currentCaption, setCurrentCaption] = useState(generateCaptions());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTime + 100);
      setCurrentCaption(() => generateCaptions());
    }, 100);
    return () => clearInterval(timer);
  }, [currentTime, currentCaption]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography style={{ color: "white" }}> {currentCaption} </Typography>
    </Box>
  );
}
