import * as React from "react";
import { Typography, Grid } from "@material-ui/core";
import Lottie from "react-lottie";
import moment from "moment";

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

function AboutMeIndex() {
    const classes = Classes();

    return (
        <div>
            <div
                style={{ backgroundColor: "#ebebeb" }}
                className={classes.titleContainer}
            >
                <Typography
                    variant="h2"
                    id="home-title"
                    style={{ marginTop: 20 }}
                >
                    Experience
                </Typography>
            </div>
            <div
                style={{ padding: "0 100px", backgroundColor: "#ebebeb" }}
            ></div>
        </div>
    );
}

export default AboutMeIndex;
