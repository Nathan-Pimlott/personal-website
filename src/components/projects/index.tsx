import * as React from "react";
import { Typography, Grid } from "@material-ui/core";

import Classes from "../../classes";

export default function ProjectsIndex() {
    const classes = Classes();

    return (
        <div id="projects" className={classes.sectionContainer}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
                    <Typography
                        variant="h2"
                        id="home-title"
                        className={classes.title}
                    >
                        My projects
                    </Typography>
                    <div className={classes.largeMarginTop}>
                        <Typography variant="h4">Personal website</Typography>
                        <Typography className={classes.marginTop}>
                            This website is built using ReactJs & Webpack and
                            uses components & styles from Material UI.
                        </Typography>
                        <Typography>
                            Feel free to check out the code on my{" "}
                            <a
                                className={classes.link}
                                href="https://github.com/Nathan-Pimlott/personal-website"
                            >
                                github
                            </a>{" "}
                            (it's a static website so not as interesting as some
                            of the other projects below).
                        </Typography>
                        <Typography variant="h4" className={classes.marginTop}>
                            Online Store
                        </Typography>
                        <Typography className={classes.marginTop}>
                            An online store that allows you to view a list of
                            products, add them to your basket and update the
                            quantity. The project is split into a:
                        </Typography>
                        <Typography>
                            UI which is built in React using webpack &
                            Typescript, uses Jest and Cypress for testing,
                            Material UI for components (with some custom
                            styling), and axios for calling the API.
                        </Typography>
                        <Typography>
                            API which is built in NodeJs & Typescript using Jest
                            for testing and MySql for the DB.
                        </Typography>
                        <Typography>
                            You can check the UI out{" "}
                            <a
                                href="https://github.com/Nathan-Pimlott/store-fe"
                                className={classes.link}
                            >
                                here
                            </a>{" "}
                            and the API{" "}
                            <a
                                href="https://github.com/Nathan-Pimlott/store-api"
                                className={classes.link}
                            >
                                here
                            </a>
                            .
                        </Typography>
                        <Typography variant="h4" className={classes.marginTop}>
                            React Starter
                        </Typography>
                        <Typography className={classes.marginTop}>
                            I have built a React "starter" to get up and running
                            with a basic UI quicker than writing the full thing
                            out every time. It's a basic webpack/ReactJs
                            application set up with react-router and Material
                            UI.
                        </Typography>
                        <Typography>
                            Check it out{" "}
                            <a
                                href="https://github.com/Nathan-Pimlott/react-starter"
                                className={classes.link}
                            >
                                here
                            </a>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
