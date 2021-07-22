import * as React from "react";

import Home from "../home";
import AboutMe from "../aboutMe";
import Experience from "../experience";

function Layout() {
    return (
        <React.Fragment>
            <Home />
            <AboutMe />
            <Experience />
        </React.Fragment>
    );
}

export default Layout;
