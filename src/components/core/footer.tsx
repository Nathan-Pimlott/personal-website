import React from "react";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";

import Classes from "../../classes";

export default function Footer() {
    const classes = Classes();
    return (
        <div className={classes.footerContainer}>
            <Typography className={classes.footerText}>
                © Nathan Pimlott {dayjs().format("YYYY")}
            </Typography>
        </div>
    );
}
