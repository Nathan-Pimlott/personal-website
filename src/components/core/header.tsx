import * as React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    useScrollTrigger,
    Hidden,
    Drawer,
    IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import classnames from "classnames";

import Classes from "../../classes";

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function Header() {
    const [state, setState] = React.useState({
        showMenu: false,
    });
    const classes = Classes();
    return (
        <div className={classes.headerContainer}>
            <ElevationScroll>
                <AppBar position="static">
                    <Toolbar>
                        {/* Hamburger on mobile */}
                        <Hidden smUp implementation="css">
                            <IconButton
                                id="header-mobile-menu-icon"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() =>
                                    setState({
                                        ...state,
                                        showMenu: !state.showMenu,
                                    })
                                }
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography
                            id="header-title"
                            variant="h6"
                            className={classes.headerTitle}
                        >
                            Nathan | ネイサン
                        </Typography>

                        <div className={classes.headerButtonsOuterContainer}>
                            {/* Menu for mobile */}
                            <Hidden smUp implementation="css">
                                <div
                                    className={classnames(
                                        "accordion",
                                        classes.headerButtonsInnerContainer,
                                        state.showMenu &&
                                            classes.headerButtonsInnerContainerOpen
                                    )}
                                >
                                    <a
                                        id="header-mobile-home-button"
                                        className={classes.headerMobileButton}
                                        href="#home"
                                        onClick={() =>
                                            setState({
                                                ...state,
                                                showMenu: false,
                                            })
                                        }
                                    >
                                        Home
                                    </a>
                                    <a
                                        id="header-mobile-about-me-button"
                                        className={classes.headerMobileButton}
                                        href="#about"
                                        onClick={() =>
                                            setState({
                                                ...state,
                                                showMenu: false,
                                            })
                                        }
                                    >
                                        About Me
                                    </a>
                                    <a
                                        id="header-mobile-experience-button"
                                        className={classes.headerMobileButton}
                                        href="#experience"
                                        onClick={() =>
                                            setState({
                                                ...state,
                                                showMenu: false,
                                            })
                                        }
                                    >
                                        Experience
                                    </a>
                                    <a
                                        id="header-mobile-projects-button"
                                        className={classes.headerMobileButton}
                                        href="#projects"
                                        onClick={() =>
                                            setState({
                                                ...state,
                                                showMenu: false,
                                            })
                                        }
                                    >
                                        My Projects
                                    </a>
                                    <a
                                        id="header-mobile-contact-button"
                                        className={classes.headerMobileButton}
                                        href="#contact"
                                        onClick={() =>
                                            setState({
                                                ...state,
                                                showMenu: false,
                                            })
                                        }
                                    >
                                        Contact Me
                                    </a>
                                </div>
                            </Hidden>
                            {/* Menu for desktop */}
                            <Hidden xsDown implementation="css">
                                <Button
                                    id="header-home-button"
                                    className={classes.headerButton}
                                    href="#home"
                                >
                                    Home
                                </Button>
                                <Button
                                    id="header-about-me-button"
                                    className={classes.headerButton}
                                    href="#about"
                                >
                                    About Me
                                </Button>
                                <Button
                                    id="header-experience-button"
                                    className={classes.headerButton}
                                    href="#experience"
                                >
                                    Experience
                                </Button>
                                <Button
                                    id="header-projects-button"
                                    className={classes.headerButton}
                                    href="#projects"
                                >
                                    My Projects
                                </Button>
                                <Button
                                    id="header-contact-button"
                                    className={classes.headerButton}
                                    href="#contact"
                                >
                                    Contact Me
                                </Button>
                            </Hidden>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div>
    );
}
