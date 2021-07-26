import { createUseStyles } from "react-jss";

import buttonStyles from "./components/button";

const primaryColor = "#536172";

const classes = createUseStyles({
    ...buttonStyles(primaryColor),
    marginTop: {
        marginTop: "20px !important",
    },
    largeMarginTop: {
        marginTop: "50px !important",
    },
    sectionContainer: {
        padding: "100px !important",
        backgroundColor: "white !important",
    },
    titleContainer: {
        padding: "100px !important",
    },
    title: {
        fontWeight: "200 !important",
    },
    timelinePaper: {
        padding: "10px 20px !important",
    },
    alignCenter: {
        textAlign: "center",
    },
    // HEADER
    headerContainer: {
        width: "100% !important",
        backgroundColor: `${primaryColor} !important`,
    },
    headerTitle: {
        flex: "none !important",
        color: "white !important",
        cursor: "pointer !important",
    },
    //// HEADER
    link: {
        color: "black",
        textTransform: "none",
        textDecoration: "none",
        fontWeight: "bold",
    },
    formCard: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
    },
    // FOOTER
    footerContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 20,
        backgroundColor: "white",
        textAlign: "center",
    },
    footerText: {
        margin: "auto !important",
    },
    //// FOOTER
    mainPhoto: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    // HOME
    homeContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    homeTitle: {
        textAlign: "center",
        marginTop: 20,
    },
    //// HOME
    lottie: {
        margin: "auto",
        backgroundColor: "white",
    },
});

export default classes;
