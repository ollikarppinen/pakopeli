import React from "react";
import VideoSection from "./../components/VideoSection";

function FooPage(props) {
  return (
    <VideoSection
      color="black"
      size="normal"
      title="Oletko oikeassa paikassa?"
      subtitle="Kato ylös"
      embedUrl="https://www.youtube.com/embed/v4YNI-1bw6I"
    />
  );
}

export default FooPage;
