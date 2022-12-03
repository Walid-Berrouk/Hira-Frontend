import { useRef } from "react";

import VideoLoop from "../../assets/videos/locked.mp4"

export default function LogoMonoMotion() {
  const ref = useRef(null);
  return (
      <video
        className="h-16 rounded-full"
        style={{mixBlendMode: 'lighten'}}
        src={VideoLoop}
        autoPlay
        muted
        loop
        ref={ref}
      />
  );
}