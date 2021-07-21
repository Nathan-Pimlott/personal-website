import { Typography, Grid } from "@material-ui/core";
import * as React from "react";
import Lottie from "react-lottie";

import * as waveAnimationData from "../../assets/lottie/wave.json";
import Classes from "../../styles";
const Logo = require("../../assets/profilepic.png");

const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: waveAnimationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

function MensHeader() {
    const classes = Classes();

    return (
        <React.Fragment>
            <Grid
                container
                justify="center"
                style={{ backgroundColor: "white" }}
                className={classes.titleContainer}
            >
                <Grid
                    item
                    xs={12}
                    sm={10}
                    md={8}
                    lg={6}
                    xl={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={Logo}
                        style={{ height: 200, width: 200, borderRadius: 100 }}
                    ></img>
                    <Typography
                        variant="h2"
                        id="home-title"
                        style={{ textAlign: "center", marginTop: 20 }}
                    >
                        Hi 👋 I'm Nathan.
                    </Typography>
                    <Typography
                        variant="h3"
                        id="home-subtitle"
                        style={{ textAlign: "center" }}
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
                style={{ margin: "auto", backgroundColor: "white" }}
            />
        </React.Fragment>
    );
}

export default MensHeader;
