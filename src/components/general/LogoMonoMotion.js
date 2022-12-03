import { useRef } from "react";

import VideoLoop from "../../assets/videos/locked.mp4"

export default function LogoMonoMotion({width}) {
  const ref = useRef(null);
  return (
      <video
        width={width}
        className="rounded-full"
        style={{mixBlendMode: 'lighten'}}
        src={VideoLoop}
        autoPlay
        muted
        loop
        ref={ref}
      />
  );
}