import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import * as colors from "./colors";
import * as borders from "./borders";
import * as breakpoints from "./breakpoints";
import * as spacing from "./spacing";

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.fichayaWhite },
    secondary: { main: colors.fichayaSecondaryBleak },
    common: {
      ...colors,
    },
    text: {
      primary: colors.fichayaBlack,
      secondary: colors.fichayaPurple,
      disabled: colors.fichayaSecondaryBleak,
    },
    warning: {
      light: colors.fichayaYellow,
      main: colors.fichayaNegative,
    },
    tonalOffset: 0.2,
    background: {
      paper: colors.fichayaWhite,
      default: colors.background,
      alternate: colors.appealBlue,
    },
    spacing: spacing.main,
  },
  breakpoints: {
    values: {
      xl: breakpoints.xl,
      lg: breakpoints.lg,
      md: breakpoints.md,
      sm: breakpoints.sm,
      xs: breakpoints.xs,
    },
  },
  border: {
    borderColor: borders.borderColor,
    borderWidth: borders.borderWidth,
    borderRadius: 10,
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        position: "static",
      },
    },
    MuiTableCell: {
      root: {
        paddingLeft: spacing * 2,
        paddingRight: spacing * 2,
        borderBottom: `${borders.borderWidth}px solid ${borders.borderColor}`,
        [`@media (max-width:  ${breakpoints.sm}px)`]: {
          paddingLeft: spacing.main,
          paddingRight: spacing.main,
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: borders.borderColor,
        height: borders.borderWidth,
      },
    },
    MuiPrivateNotchedOutline: {
      root: {
        borderWidth: borders.borderWidth,
      },
    },
    MuiListItem: {
      divider: {
        borderBottom: `${borders.borderWidth}px solid ${borders.borderColor}`,
      },
    },
    MuiDialog: {
      paper: {
        width: "100%",
        maxWidth: 430,
        marginLeft: spacing.main,
        marginRight: spacing.main,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: colors.fichayaPurple,
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        [`@media (max-width:  ${breakpoints.sm}px)`]: {
          paddingLeft: spacing.main,
          paddingRight: spacing.main,
        },
      },
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Mukta"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

export default responsiveFontSizes(theme);
