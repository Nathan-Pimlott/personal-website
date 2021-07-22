import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import Lottie from "react-lottie";

import * as waveAnimationData from "../../assets/lottie/wave.json";
import Classes from "../../styles";
import { withRouter } from "react-router";
import { observer } from "mobx-react-lite";

const Header = () => {
    const classes = Classes();

    return (
        <div className={classes.headerContainer}>
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
                            href="/#/"
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
                            href="/#/about-me"
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
                            href="/#/experience"
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
                            href="/#/my-work"
                        >
                            My Work
                        </Button>
                        <Button
                            style={{
                                cursor: "pointer",
                                padding: "0 20px",
                                color: "white",
                                textTransform: "none",
                            }}
                            href="/#/contact-me"
                        >
                            Contact Me
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(observer(Header));
