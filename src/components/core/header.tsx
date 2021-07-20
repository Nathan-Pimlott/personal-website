import React, { useEffect } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    Typography,
    Button,
    InputBase,
    TextField,
    Input,
} from "@material-ui/core";
import { AccountCircle, Search, ShoppingBasket } from "@material-ui/icons";

import Classes from "../../styles";
import { withRouter } from "react-router";
import { observer } from "mobx-react-lite";

const Logo = require("../../assets/profilepic.png");

const Header = () => {
    const classes = Classes();

    return (
        <div className={classes.headerContainer}>
            <AppBar position="static">
                <Toolbar>
                    <img
                        src={Logo}
                        alt="profilepicture"
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                    />

                    <Typography
                        variant="h6"
                        style={{ color: "white", marginLeft: 20 }}
                    >
                        Nathan Pimlott
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(observer(Header));
