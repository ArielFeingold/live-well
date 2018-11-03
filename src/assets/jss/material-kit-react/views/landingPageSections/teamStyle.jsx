import { cardTitle, title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const teamStyle = {
  section: {
    padding: "20px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    color:"white",
    marginBottom: "1rem",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#fff",
    fontSize: "24px",
    padding: "70px 0",

  },
  description: {
    color: "white"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "white"
  },
  margin5: {
    margin: "5px"
  }
};

export default teamStyle;
