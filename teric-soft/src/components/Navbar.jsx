import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    makeStyles,
    Drawer,
    List,
    ListItem,

} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from "@material-ui/icons";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#002c51",
        color: "white",
        boxShadow: "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    title: {
        flexGrow: 1,
    },
    menuLinks: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "80%",
        gap: "45px",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },

}));

export default function Navbar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: "Home", link: "/" },
        { text: "About", link: "#" },
        { text: "Services", link: "#" },
        { text: "Contact", link: "#" },
    ];

    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link to="/employeedetails" style={{ textDecoration: "none", cursor: "pointer", color: "inherit", marginLeft: "8%" }}>
                        <IconButton>
                            <PersonOutlineOutlinedIcon style={{ color: "#FFFFFF" }} />
                        </IconButton>
                        EMPLOYEES
                    </Link>
                    {/* MENU LINKS  */}
                    <div className={classes.menuLinks}>
                        <Link to="/" style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}>
                            <IconButton>
                                <HomeOutlinedIcon style={{ color: "white", marginBottom: "3px" }} />
                            </IconButton>
                            HOME
                        </Link>
                        <Link to="#" style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}>
                            <IconButton>
                                <InfoOutlinedIcon style={{ color: "white", marginBottom: "3px" }} />
                            </IconButton>
                            ABOUT
                        </Link>
                        <Link to="#" style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}>
                            <IconButton>
                                <ContactMailOutlinedIcon style={{ color: "white", marginBottom: "3px" }} />
                            </IconButton>
                            CONTACT
                        </Link>
                        <Link to="#" style={{ textDecoration: "none", cursor: "pointer", color: "inherit", }}>
                            <IconButton>
                                <BuildOutlinedIcon style={{ color: "white", marginBottom: "3px" }} />
                            </IconButton>
                            SERVICE
                        </Link>
                    </div>

                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/employeedetails" style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}>
                        EMPLOYEES
                    </Link>

                </Toolbar>
                <List>
                    {menuItems.map((item, index) =>
                        <ListItem button key={index} href={item.link}>
                            <Link style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }} to="/"  >{item.text}</Link>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </>
    );
}









