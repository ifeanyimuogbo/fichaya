import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    boxShadow: "none",
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
    },
  },
  navLinksFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    paddingTop: 0,
    paddingBottom: 0,
  },
  navLinkText: {
    textTransform: `uppercase`,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "inherit",
      borderBottom: `2px solid ${theme.palette.common.fichayaPurple}`,
    },
    "&.active": {
      borderBottom: `2px solid ${theme.palette.common.fichayaPurple}`,
    },
    "& .buttonPaddingAdjust": {
      marginLeft: 0,
      marginRight: 0,
      "&:hover": {
        backgroundColor: "inherit",
      },
    },
  },
  floatingButtonGroup: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.25),
    },
    "& .button-one": {
      backgroundColor: theme.palette.common.appealBlue,
      padding: theme.spacing(1.25),
      flexBasis: "30%",
      [theme.breakpoints.up("sm")]: {
        flexBasis: "30%",
      },
      [theme.breakpoints.up("md")]: {
        flexBasis: "40%",
      },
    },
    "& .button-two": {
      color: theme.palette.getContrastText(theme.palette.common.appealBlue),
      backgroundColor: theme.palette.common.appealBlue,
      padding: theme.spacing(1.25),
      flexBasis: "40%",
      [theme.breakpoints.up("sm")]: {
        flexBasis: "40%",
      },
      [theme.breakpoints.up("md")]: {
        flexBasis: "60%",
      },
    },
    "& .menu-button": {
      backgroundColor: theme.palette.common.appealBlue,
      color: theme.palette.getContrastText(theme.palette.common.appealBlue),
      padding: theme.spacing(0.5),
      flexBasis: "30%",
      borderRadius: 0,
      marginRight: 5,
    },
  },
  mobileDrawerToolbar: {
    width: 200,
    "& .links": {
      //   backgroundColor: theme.palette.primary.main,
      //   height: "100%",
    },
  },
  closeIcon: {
    marginRight: theme.spacing(0.5),
  },
  blackList: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
  },
}));
export default useStyles;
