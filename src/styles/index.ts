import { createUseStyles } from "react-jss";

import buttonStyles from "./components/button";

const primaryColor = "#536172";

const classes = createUseStyles({
    ...buttonStyles(primaryColor),
    largeMarginTop: {
        marginTop: 20,
    },
    titleContainer: {
        fontWeight: "200 !important",
        padding: 50,
    },
    headerContainer: {
        width: "100%",
        backgroundColor: `${primaryColor} !important`,
    },
    headerTitle: {
        flex: "none",
        color: "white !important",
        cursor: "pointer",
    },
});

export default classes;
