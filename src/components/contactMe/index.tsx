import * as React from "react";
import { Typography, TextField, Card, Button } from "@material-ui/core";

import Classes from "../../styles";

export default function ContactMeIndex() {
    const classes = Classes();

    const [state, setState] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    return (
        <div id="contact" className={classes.titleContainer}>
            <Typography
                variant="h2"
                id="contact-me-title"
                className={classes.title}
            >
                Contact me
            </Typography>
            <div className={classes.largeMarginTop}>
                <Card elevation={0} className={classes.formCard}>
                    <Typography>
                        If you want to get in touch with me, fill out the below
                        form and I will get back to you.
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="Name"
                        value={state.name}
                        onChange={(e) => {
                            setState({ ...state, name: e.target.value });
                        }}
                        className={classes.marginTop}
                    />
                    <TextField
                        variant="outlined"
                        label="Email"
                        value={state.email}
                        onChange={(e) => {
                            setState({ ...state, email: e.target.value });
                        }}
                        className={classes.marginTop}
                    />
                    <TextField
                        variant="outlined"
                        label="Message"
                        value={state.message}
                        multiline
                        onChange={(e) => {
                            setState({ ...state, message: e.target.value });
                        }}
                        className={classes.marginTop}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.marginTop}
                        onClick={() => {
                            setState({
                                name: "",
                                email: "",
                                message: "",
                            });
                        }}
                        disabled={!state.name || !state.email || !state.message}
                    >
                        Submit
                    </Button>
                </Card>
            </div>
        </div>
    );
}
