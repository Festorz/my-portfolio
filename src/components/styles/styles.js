import {
  Avatar,
  Box,
  Divider,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@material-ui/core";
import { amber, grey } from "@material-ui/core/colors";
import { styled } from "@material-ui/core/styles";

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  fontWeight: "bold",
  textTransform: "Uppercase",
  paddingTop: 20,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
    paddingTop: 15,
  },
}));

export const MainBox = styled(Box)(({ theme, mtop }) => ({
  width: "inherit",
  marginTop: mtop ? mtop : 100,
  marginLeft: 100,
  marginRight: 100,
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    margin: "10px 10px 10px 10px",
    marginTop: mtop ? mtop - 5 : 50,
  },
}));

export const StyledSection = styled(Box)(({ theme, mreverse, mtop }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: mtop,
  marginBottom: 10,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "initial",
    flexDirection: mreverse ? "column-reverse" : "column",
    margin: "0 2px",
    width: "max-width",
  },
}));

export const StyledPaper = styled(Paper)(({ theme, mwidth, mtop }) => ({
  flexDirection: "column",
  width: mwidth ? mwidth : "45%",
  height: "inherit",
  justifyContent: "center",
  marginTop: mtop,
  backgroundColor: "transparent",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    justifyContent: "initial",
    width: "inherit",
    // marginTop: mtop ? mtop - 5 : 5,
  },
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "initial",
  },
}));

export const StyledGridItem = styled(Grid)(({ theme, mwidth }) => ({
  width: mwidth ? mwidth : "45%",
  margin: "10px 0",
  [theme.breakpoints.down("sm")]: {
    width: "inherit",
  },
}));

export const StyledColumn = styled(Box)(({ theme, mtop }) => ({
  display: "flex",
  flexDirection: "column",
  width: "60%",
  marginTop: mtop,
  marginBottom: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    // flexDirection: 'column-reverse',
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme, mright }) => ({
  marginRight: mright,
  backgroundColor: "white",
  marginBottom: 20,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
    // flexDirection: 'column-reverse',
  },
}));

export const StyledIcon = styled(Icon)(({ theme, mfontsize, mcolor }) => ({
  color: mcolor ? mcolor : "black",
  [theme.breakpoints.down("sm")]: {},
}));

export const SocialIcons = styled(Box)(({ theme, mcolor }) => ({
  color: mcolor ? mcolor : "black",
  "&:hover": {
    color: "#27AE60",
  },
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledImage = styled(Box)(({ theme }) => ({
  width: 500,
  height: "max-height",
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "max-height",
  },
}));

export const StyledText = styled(Box)(
  ({ theme, mcolor, malign, mfontsize, mvariant, mtop, mbold, tstyle }) => ({
    fontSize: mfontsize ? mfontsize : 50,
    fontWeight: mbold ? "normal" : "bold",
    color: mcolor ? mcolor : "#27AE60",
    marginTop: mtop ? mtop : 2,
    textAlign: malign ? "start" : "",
    fontVariant: mvariant ? "subtitle2" : "caption",
    textTransform: tstyle ? tstyle : "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: mfontsize ? mfontsize - 3 : 45,
    },
  })
);

export const DescBox = styled(Box)(({ theme, mjustify }) => ({
  paddingTop: 30,
  display: "flex",
  flexDirection: "row",
  justifyContent: mjustify,
  [theme.breakpoints.down("sm")]: {},
}));

export const DescriptionText = styled(Typography)(
  ({
    theme,
    mright,
    mcolor,
    mbold,
    mvariant,
    mdecoration,
    malign,
    transform,
    mfontsize,
    mtop,
  }) => ({
    fontSize: mfontsize ? mfontsize : 18,
    marginRight: mright,
    fontWeight: mbold ? "bold" : "normal",
    fontVariant: mvariant ? "body1" : "caption",
    color: mcolor ? mcolor : amber[800],
    textAlign: malign ? "start" : "",
    textDecoration: mdecoration,
    marginTop: mtop,
    textTransform: transform ? transform : "",
    [theme.breakpoints.down("sm")]: {
      fontSize: mfontsize ? mfontsize - 2 : 16,
    },
  })
);

export const StyledScores = styled(Paper)(({ theme }) => ({
  flexDirection: "column",
  height: 200,
  backgroundColor: "transparent",
  border: `2px solid #27AE60`,
  justifyContent: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

export const StarSection = styled(Box)(({ theme, mtop }) => ({
  marginTop: mtop,
  bottom: 0,
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  color: "#fff",
  border: "10px solid #fff",
  width: 20,
  [theme.breakpoints.down("sm")]: {},
}));

export const StyledRow = styled(Box)(({ theme, mjustify }) => ({
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: mjustify,
  [theme.breakpoints.down("sm")]: {},
}));

// progress bar
export const ColoredBox = styled(Box)(({ theme, mcolor, mwidth }) => ({
  backgroundColor: mcolor ? mcolor : "#19395a",
  width: mwidth ? `${mwidth}%` : "100%",
  height: 9,
  textAlign: "start",
  color: "transparent",
  [theme.breakpoints.down("sm")]: {
    width: mwidth ? `${mwidth}%` : "100%",
  },
}));

export const SkillsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: 8,
  [theme.breakpoints.down("sm")]: {
    marginTop: 8,
  },
}));

export const TimeBox = styled(Box)(({ theme, mcolor }) => ({
  backgroundColor: mcolor ? mcolor : grey[800],
  borderRadius: 10,
  opacity: 0.8,
  color: "#fff",
  padding: "0 5px",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {},
}));

export const ProjectBox = styled(Box)(({ theme, mcolor }) => ({
  width: "100%",
  position: "relative",
  height: 300,
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const ProjectImage = styled(Box)(({ theme, mcolor }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ProjectFooter = styled(Box)(({ theme, mcolor }) => ({
  backgroundColor: "black",
  position: "absolute",
  width: "inherit",
  height: 100,
  opacity: 0.8,
  left: 0,
  bottom: 0,
  zIndex: 9,
  WebkitTransition: 0.4,
  MozTransition: 0.4,
  transition: 0.4,
  // borderRadius: '0 0 10px 10px',
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ProjectLinks = styled(Box)(({ theme }) => ({
  marginTop: 5,
  width: "80%",
  display: "flex",
  flexDirection: "row", // height: 10,
  justifyContent: "space-around",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
