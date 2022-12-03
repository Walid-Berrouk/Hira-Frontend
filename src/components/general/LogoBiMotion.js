import { useRef } from "react";

import VideoLoop from "../../assets/videos/double.mp4"

export default function LogoBiMotion() {
  const ref = useRef(null);
  return (
      <video
        className=" h-40 rounded-full mt-12"
        style={{mixBlendMode: 'lighten'}}
        src={VideoLoop}
        autoPlay
        muted
        loop
        ref={ref}
      />
  );
}