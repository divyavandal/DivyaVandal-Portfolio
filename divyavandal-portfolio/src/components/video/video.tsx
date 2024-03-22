"use client";

interface VideoProps {
  url: string;
  width?: string;
  style?: any;
}

export default function Video({ url, width, style }: VideoProps) {
  const videoStyle = { ...style };

  return (
    <>
      <video style={videoStyle} width={width} autoPlay muted loop>
        <source src={`${url}.mp4`} type="video/mp4" />
      </video>
    </>
  );
}
