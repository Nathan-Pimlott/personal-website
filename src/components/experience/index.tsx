import React from "react";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from "@material-ui/lab";
import { Paper, Typography, Grid } from "@material-ui/core";
import Classes from "../../classes";

export default function ExperienceIndex() {
    const classes = Classes();

    return (
        <div id="experience" className={classes.titleContainer}>
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
                    <Typography
                        variant="h2"
                        id="experience-title"
                        className={classes.title}
                    >
                        Experience
                    </Typography>
                    <Timeline align="alternate">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    2019 - Current
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper
                                    elevation={3}
                                    className={classes.timelinePaper}
                                >
                                    <Typography variant="h6">
                                        Full stack JavaScript software developer
                                    </Typography>
                                    <Typography>etika finance</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    2018 - 2019
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper
                                    elevation={3}
                                    className={classes.timelinePaper}
                                >
                                    <Typography variant="h6">
                                        Full stack JavaScript software developer
                                    </Typography>
                                    <Typography>Action365</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    2017 - 2018
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper
                                    elevation={3}
                                    className={classes.timelinePaper}
                                >
                                    <Typography variant="h6">
                                        Junior JavaScript software developer
                                    </Typography>
                                    <Typography>Action365</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    2016 - 2018
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper
                                    elevation={3}
                                    className={classes.timelinePaper}
                                >
                                    <Typography variant="h6">
                                        Apprentice/Junior full stack software
                                        developer
                                    </Typography>
                                    <Typography>Swinton Insurance</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </div>
    );
}
