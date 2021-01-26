//Package Imports
import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, withRouter } from "react-router-dom";
//MUI icons
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//Local Imports
import MobileDrawer from "./MobileDrawer";
import Logo from "../../assets/media/logo.svg";
import styles from "./styles";
import NotificationsBell from "../../assets/media/notifications-bell.svg";
import UserAvatar from "../../assets/media/user.svg";
const navLinks = [
  { title: "Dashboard", path: "#" },
  { title: "Customers", path: "#" },
  { title: "Associates", path: "#" },
  { title: "Requests", path: "/requests" },
  { title: "Schedules", path: "#" },
  { title: "Payments", path: "#" },
  { title: "Settings", path: "#" },
];

const Navigation = (props) => {
  const classes = styles();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleMobileDrawerOpenToggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navLinksFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link
                  to={path}
                  key={title}
                  className={`${classes.navLinkText} ${
                    props.location.pathname === path && "active"
                  }`}
                >
                  <ListItem button className="buttonPaddingAdjust">
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Hidden>
          <div>
            <div className={classes.floatingButtonGroup}>
              <Avatar
                variant="square"
                className="button-one"
                component={IconButton}
              >
                <img src={NotificationsBell} alt="notifications-icon" />
              </Avatar>
              <Avatar variant="rounded" className="button-two">
                <img src={UserAvatar} alt="user-avatar" />
                <ExpandMoreIcon />
              </Avatar>
              <Hidden mdUp>
                <IconButton
                  className="menu-button"
                  onClick={handleMobileDrawerOpenToggle}
                >
                  <MenuIcon color="blue" />
                </IconButton>
              </Hidden>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <MobileDrawer
        menuItems={navLinks}
        anchor="right"
        open={mobileDrawerOpen}
        // selectedItem={selectedTab}
        onClose={handleMobileDrawerOpenToggle}
      />
    </div>
  );
};
export default withRouter(Navigation);
