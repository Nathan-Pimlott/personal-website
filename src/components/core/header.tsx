import React, { useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    useScrollTrigger,
} from "@material-ui/core";
import Lottie from "react-lottie";

import * as waveAnimationData from "../../assets/lottie/wave.json";
import Classes from "../../styles";
import { withRouter } from "react-router";
import { observer } from "mobx-react-lite";

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

// ElevationScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     window: PropTypes.func,
// };

export default function Header() {
    const classes = Classes();

    return (
        <div className={classes.headerContainer}>
            <ElevationScroll>
                <AppBar position="static">
                    <Toolbar style={{ display: "flex" }}>
                        <Typography
                            variant="h6"
                            style={{ color: "white", marginLeft: 20 }}
                        >
                            Nathan | ネイサン
                        </Typography>

                        <div
                            style={{
                                flex: 1,
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Button
                                style={{
                                    cursor: "pointer",
                                    padding: "0 20px",
                                    color: "white",
                                    textTransform: "none",
                                }}
                                href="#home"
                            >
                                Home
                            </Button>
                            <Button
                                style={{
                                    cursor: "pointer",
                                    padding: "0 20px",
                                    color: "white",
                                    textTransform: "none",
                                }}
                                href="#about"
                            >
                                About Me
                            </Button>
                            <Button
                                style={{
                                    cursor: "pointer",
                                    padding: "0 20px",
                                    color: "white",
                                    textTransform: "none",
                                }}
                                href="#experience"
                            >
                                Experience
                            </Button>
                            <Button
                                style={{
                                    cursor: "pointer",
                                    padding: "0 20px",
                                    color: "white",
                                    textTransform: "none",
                                }}
                                href="#projects"
                            >
                                My Projects
                            </Button>
                            <Button
                                style={{
                                    cursor: "pointer",
                                    padding: "0 20px",
                                    color: "white",
                                    textTransform: "none",
                                }}
                                href="#contact"
                            >
                                Contact Me
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div>
    );
}
