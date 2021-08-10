import * as React from "react";
import { Typography, Grid } from "@material-ui/core";
import Lottie from "react-lottie";

import * as waveAnimationData from "../../assets/lottie/wave.json";
import Classes from "../../classes";

const Logo = require("../../assets/profilepic.png");

const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: waveAnimationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export default function HomeIndex() {
    const classes = Classes();

    return (
        <div id="home">
            <Grid
                container
                justifyContent="center"
                className={classes.sectionContainer}
            >
                <Grid
                    item
                    sm={12}
                    md={10}
                    lg={8}
                    xl={6}
                    className={classes.homeContainer}
                >
                    <img src={Logo} className={classes.mainPhoto} />
                    <Typography
                        variant="h2"
                        id="home-title"
                        className={classes.homeTitle}
                    >
                        Hi 👋 I'm Nathan.
                    </Typography>
                    <Typography
                        variant="h3"
                        id="home-subtitle"
                        className={classes.alignCenter}
                    >
                        I write code & play games.
                    </Typography>
                </Grid>
            </Grid>
            <Lottie
                options={defaultOptions}
                height="auto"
                width="100%"
                isStopped={false}
                isPaused={false}
                // Lottie doesn't take a className prop. Maybe this can be wrapped in a container?
                style={{ margin: "auto", backgroundColor: "white" }}
            />
        </div>
    );
}
