import { useRef } from "react";

import VideoLoop from "../../assets/videos/double.mp4"

export default function LogoBiMotion({width}) {
  const ref = useRef(null);
  return (
      <video
        width={width}
        className="rounded-full mt-12"
        style={{mixBlendMode: 'lighten'}}
        src={VideoLoop}
        autoPlay
        muted
        loop
        ref={ref}
      />
  );
}