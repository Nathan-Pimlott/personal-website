import React from "react";
import moment from "moment";
import { Typography } from "@material-ui/core";

import Classes from "../../styles";

export default function Footer() {
    const classes = Classes();
    return (
        <div className={classes.footerContainer}>
            <Typography className={classes.footerText}>
                © Nathan Pimlott {moment().format("YYYY")}
            </Typography>
        </div>
    );
}
