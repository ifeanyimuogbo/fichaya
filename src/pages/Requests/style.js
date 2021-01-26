import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(3.375),
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
    },
  },
  button: {
    borderRadius: theme.spacing(0.5),
    background: theme.palette.common.appealBlue,
    border: "none",
    padding: "1px 7px 1px 7px",
    color: theme.palette.common.fichayaTransparentWhite,
    opacity: 0.87,
    fontSize: 18,
    filter: "drop-shadow(0px 3px 12px rgba(0, 0, 128, 0.22))",
  },
  mainRequestBox: {
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
      maxWidth: "100%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2.5),
      maxWidth: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(3.25),
      maxWidth: "56.8%",
    },
    background: theme.palette.common.fichayaWhite,
    border: `1px solid ${theme.palette.common.fichayaDisabledBackground}`,
    borderRadius: theme.spacing(1.25),
    padding: "29px 36px",

    "& .content-flex-container": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      "& .content": {
        [theme.breakpoints.up("sm")]: {
          flex: "1 1 50%",
          maxWidth: "50%",
        },
        [theme.breakpoints.up("md")]: {
          flex: "1 1 50%",
          maxWidth: "50%",
        },
        [theme.breakpoints.up("lg")]: {
          flex: "1 1 30%",
          maxWidth: "30%",
        },
        "& .content-title": {
          maxWidth: "unset",
          fontWeight: 500,
          fontSize: 14,
          color: theme.palette.common.fichayaSecondaryBleak,
        },
        "& .content-text": {
          maxWidth: "unset",
          fontWeight: 400,
          fontSize: 18,
          color: theme.palette.common.fichayaPurple,
          "&p": {
            marginTop: 0,
            marginBottom: 0,
          },
          "&.highlight": {
            color: theme.palette.common.fichayaYellow,
            background: "rgba(255,153,31,0.15)",
            borderRadius: 4,
            padding: "3px 10px",
            marginTop: "-3px",
          },
        },
      },
    },
    "& .divider": {
      border: `1px solid ${theme.palette.common.fichayaDisabledBackground}`,
    },
    "& .box-bottom": {
      display: "flex",
      justifyContent: "flex-end",
      paddingTop: theme.spacing(2.625),
      "& .button": {
        borderRadius: theme.spacing(0.5),
        display: "flex",
        justifyContent: "space-between",
        background: theme.palette.common.appealBlue,
        border: "none",
        padding: "10px 25px",
        color: theme.palette.common.fichayaTransparentWhite,
        opacity: 0.87,
        fontSize: 18,
        "& span.text": {
          marginRight: theme.spacing(4.5),
        },
        "& .toggle-icon-button": {
          padding: 0,
          background: theme.palette.common.fichayaPurple,
          color: theme.palette.common.fichayaDisabledBackground,
          borderRadius: 5,
          "& .icon": {
            marginRight: 0,
          },
        },
      },
    },
  },
}));
export default useStyles;
