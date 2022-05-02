const buildConfigs = {
  studyNumber: 1,
  conditionNumber: 1,
  videoSection: 1,
  speakerWidth: function () {
    return this.studyNumber == 1 && this.conditionNumber == 2
      ? "600px"
      : "551.11px";
  },
  speakerHeight: function () {
    return this.studyNumber == 1 && this.conditionNumber == 2
      ? "337.5px"
      : "310px";
  },
  hideBaseCaptions: function () {
    return this.studyNumber == 1 && this.conditionNumber == 2;
  },
  hideCaptionsInWindow: function () {
    return (
      this.studyNumber == 1 &&
      (this.conditionNumber == 1 || this.conditionNumber == 4)
    );
  },
  videoDuration: function () {
    return this.videoSection == 4 ? 93000 : 150000;
  },
};

export default buildConfigs;
