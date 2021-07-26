import * as React from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";

import Classes from "../../styles";

export default function AboutMeIndex() {
    const classes = Classes();

    return (
        <div id="about" className={classes.sectionContainer}>
            <Typography variant="h2" id="home-title" className={classes.title}>
                About me
            </Typography>
            <div className={classes.largeMarginTop}>
                <Typography variant="h4">
                    Work Life | JavaScript & Coffee
                </Typography>
                <Typography className={classes.marginTop} variant="h6">
                    I am a full stack JavaScript software developer based in
                    Manchester, UK.
                </Typography>
                <Typography className={classes.marginTop}>
                    I have been a developer now for{" "}
                    {moment("2015-09-01").fromNow(true)} professionally and have
                    worked with a variety of systems, tools and development
                    methods over the years with team sizes ranging from a 2
                    person team to several 10+ person teams. I'm glad I've had
                    the chance to work in such different teams as it really
                    shows 2 different sides of development.
                </Typography>
                <Typography variant="h4" className={classes.marginTop}>
                    Personal Life | Games & Japan
                </Typography>
                <Typography className={classes.marginTop}>
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
