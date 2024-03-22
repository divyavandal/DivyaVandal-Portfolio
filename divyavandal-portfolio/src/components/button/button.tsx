"use client";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#BADA55",
    height: "40px",
    fontSize: "16px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    color: "#123017",
    padding: "0px 20px",
    fontWeight: "bold",
  };

  return (
    <>
      <button style={buttonStyle}>{children}</button>
    </>
  );
}
