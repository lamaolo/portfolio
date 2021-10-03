import {
  SiCss3,
  SiNodeDotJs,
  SiSocketDotIo,
  SiMongodb,
  SiReact,
  SiStyledComponents,
  SiNextDotJs,
  SiSass,
  SiJavascript,
  SiHtml5,
  SiRedux,
} from "react-icons/si";

export const mapTechnologyToIcon = (technology) => {
  switch (technology.toLowerCase()) {
    case "mongodb":
      return <SiMongodb size={20} />;
    case "css":
      return <SiCss3 size={20} />;
    case "express":
      return <SiNodeDotJs size={20} />;
    case "nodejs":
      return <SiNodeDotJs size={20} />;
    case "react":
      return <SiReact size={20} />;
    case "socket.io":
      return <SiSocketDotIo size={20} />;
    case "nextjs":
      return <SiNextDotJs size={20} />;
    case "styled components":
      return <SiStyledComponents size={20} />;
    case "vanilla js":
      return <SiJavascript size={20} />;
    case "html":
      return <SiHtml5 size={20} />;
    case "scss":
      return <SiSass size={20} />;
    case "redux":
      return <SiRedux size={20} />;
    default:
      return "";
  }
};
