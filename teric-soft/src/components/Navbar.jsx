import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    makeStyles,
    Slide,
    useScrollTrigger,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#002c51",
        color: "white",
        boxShadow: "none",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
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
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Navbar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: "Home", link: "#" },
        { text: "About", link: "#" },
        { text: "Services", link: "#" },
        { text: "Contact", link: "#" },
    ];

    return (
        <>
            <HideOnScroll>
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
                        <Typography variant="h6" className={classes.title}>
                            My-Employees
                        </Typography>

                        <div className={classes.menuLinks}>
                            {menuItems.map((item, index) => (
                                <Button key={index} color="inherit" href={item.link}>
                                    {item.text}
                                </Button>
                            ))}
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
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
                    <Typography variant="h6" className={classes.title}>
                        My Website
                    </Typography>
                </Toolbar>
                <List>
                    {menuItems.map((item, index) =>
                        <ListItem button key={index} href={item.link}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </>
    );
}















