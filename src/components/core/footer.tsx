import React from "react";
import { Typography } from "@material-ui/core";

import Classes from "../../styles";

function Footer() {
    const classes = Classes();
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                padding: 20,
                backgroundColor: "white",
            }}
        >
            Footer
        </div>
    );
}

export default Footer;
