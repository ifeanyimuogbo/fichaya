import { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  withStyles,
  IconButton,
  Typography,
  withWidth,
  isWidthUp,
  Toolbar,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles";

// const styles = (theme) => ({
//   closeIcon: {
//     marginRight: theme.spacing(0.5),
//   },
//   headSection: {

//   },
//   blackList: {
//     backgroundColor: theme.palette.primary.main,
//     height: "100%",
//   },
//   noDecoration: {
//     textDecoration: "none !important",
//   },
// });

const MobileDrawer = (props) => {
  useEffect(() => {
    window.onresize = () => {
      const { width, open, onClose } = this.props;
      if (isWidthUp("sm", width) && open) {
        onClose();
      }
    };
  }, []);
  const classes = styles();
  const { anchor, open, onClose, menuItems, selectedItem, theme } = props;
  return (
    <Drawer variant="temporary" open={open} onClose={onClose} anchor={anchor}>
      <Toolbar className={classes.mobileDrawerToolbar}>
        <ListItem
          style={{
            paddingTop: 0,
            paddingBottom: 0,
            height: "100%",
            justifyContent: anchor === "left" ? "flex-start" : "flex-end",
          }}
          disableGutters
        >
          <ListItemIcon className={classes.closeIcon}>
            <IconButton onClick={onClose}>
              <CloseIcon color="blue" />
            </IconButton>
          </ListItemIcon>
        </ListItem>
      </Toolbar>
      <List className={classes.blackList}>
        {menuItems.map((element) => {
          return (
            <Link
              to={element.path}
              key={element.title}
              className={`${classes.navLinkText} ${
                props.location.pathname === element.path && "active"
              }`}
            >
              <ListItem button>
                <ListItemText primary={element.title} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
};

export default withRouter(MobileDrawer);
