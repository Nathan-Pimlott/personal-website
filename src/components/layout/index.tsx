import * as React from "react";

import Home from "../home";
import AboutMe from "../aboutMe";
import Experience from "../experience";
import Projects from "../projects";
import ContactMe from "../contactMe";

export default function Layout() {
    return (
        <React.Fragment>
            <Home />
            <AboutMe />
            <Experience />
            <Projects />
            <ContactMe />
        </React.Fragment>
    );
}
