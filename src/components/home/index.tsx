import { observer } from "mobx-react-lite";
import * as React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Classes from "../../styles";
import Loading from "../core/loading";
import Header from "./header";

const HomeIndex = () => {
    const classes = Classes();

    return (
        <div>
            <Header />
        </div>
    );
};

export default observer(HomeIndex);
