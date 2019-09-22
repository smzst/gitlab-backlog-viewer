import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {GITLAB_HEADER_COLOR} from "../constants";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: GITLAB_HEADER_COLOR,
            flexGrow: 1,
        },
    }),
);

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar variant="dense"/>
        </AppBar>
    )
};

export default Header;