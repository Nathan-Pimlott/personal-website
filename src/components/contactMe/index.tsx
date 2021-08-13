import * as React from "react";
import {
    Typography,
    TextField,
    Card,
    Button,
    Grid,
    Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import Classes from "../../classes";

export default function ContactMeIndex() {
    const classes = Classes();

    const [state, setState] = React.useState({
        name: "",
        email: "",
        message: "",
        submitResult: null,
    });

    function handleClick() {
        setState({
            name: "",
            email: "",
            message: "",
            submitResult: true,
        });
    }

    function closeSnackbar() {
        setState({
            ...state,
            submitResult: null,
        });
    }

    return (
        <React.Fragment>
            <div id="contact" className={classes.titleContainer}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
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
                                    If you want to get in touch with me, fill
                                    out the below form and I will get back to
                                    you.
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    label="Name"
                                    value={state.name}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            name: e.target.value,
                                        })
                                    }
                                    className={classes.marginTop}
                                />
                                <TextField
                                    variant="outlined"
                                    label="Email"
                                    value={state.email}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            email: e.target.value,
                                        })
                                    }
                                    className={classes.marginTop}
                                />
                                <TextField
                                    variant="outlined"
                                    label="Message"
                                    value={state.message}
                                    multiline
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            message: e.target.value,
                                        })
                                    }
                                    className={classes.marginTop}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.marginTop}
                                    onClick={handleClick}
                                    disabled={
                                        !state.name ||
                                        !state.email ||
                                        !state.message
                                    }
                                >
                                    Submit
                                </Button>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {!!state.submitResult && (
                <Snackbar
                    open={true}
                    autoHideDuration={3000}
                    onClose={closeSnackbar}
                >
                    <Alert
                        elevation={6}
                        variant="filled"
                        onClose={closeSnackbar}
                        severity={
                            state.submitResult === true ? "success" : "error"
                        }
                    >
                        {state.submitResult === true
                            ? "Message sent successfully!"
                            : "Oops. An error occurred. Please try again."}
                    </Alert>
                </Snackbar>
            )}
        </React.Fragment>
    );
}
