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
                style={{ backgroundColor: "white" }}
                className={classes.titleContainer}
            >
                <Typography
                    variant="h2"
                    id="home-title"
                    style={{ marginTop: 20 }}
                >
                    About me
                </Typography>
            </div>
            <div style={{ padding: "0 100px", backgroundColor: "white" }}>
                <Typography variant="h4">
                    Work Life | JavaScript & Coffee
                </Typography>
                <Typography variant="h6">
                    I am a full stack JavaScript software developer based in
                    Manchester, UK.
                </Typography>
                <Typography style={{ marginTop: 20 }}>
                    I have been a developer now for{" "}
                    {moment("2015-09-01").fromNow(true)} professionally and have
                    worked with a variety of systems, tools and development
                    methods over the years with team sizes ranging from a 2
                    person team to several 10+ person teams. I'm glad I've had
                    the chance to work in such different teams as it really
                    shows 2 different sides of development.
                </Typography>
                <Typography variant="h4" style={{ marginTop: 20 }}>
                    Personal Life | Games & Japan
                </Typography>
                <Typography>
                    When I'm not working, I'm usually messing around with
                    personal coding projects, playing games (big Pokémon fan) or
                    reading manga.
                </Typography>
                <Typography>
                    I've also been studying 日本語 for the last year or so with
                    the intention of being able to understand some of the anime
                    without having the subtitles turned on, which has turned out
                    to be extremely time consuming (who would have thought? 🤷‍♂️).
                    I'm hoping to get over to 日本 sometime in the next couple
                    of years as well.
                </Typography>
            </div>
        </div>
    );
}

export default AboutMeIndex;
