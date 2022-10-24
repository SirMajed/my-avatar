import { Box } from "@mui/material";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  image?: any;
  ref?: any;
}
const Section = ({ children, image, ref }: Props) => {
  return (
    <Box
      style={{
        background: image ? `url(${image.src})` : ``,
        backgroundSize: "100% 100%",
        width: "100%",
        height: "100vh",
        WebkitBackgroundSize: "cover",
      }}
    >
      <div ref={ref}>{children}</div>
    </Box>
  );
};

export default Section;
