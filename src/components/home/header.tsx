import { Typography } from "@material-ui/core";
import * as React from "react";
import classnames from "classnames";

import Classes from "../../styles";

function MensHeader() {
    const classes = Classes();

    return (
        <Typography
            style={{ backgroundColor: "white" }}
            className={classes.titleContainer}
            variant="h3"
            id="mens-title"
        >
            Nathan Pimlott
        </Typography>
    );
}

export default MensHeader;
