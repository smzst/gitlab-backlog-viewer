import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface IProps {
    title: string;
    weight: number;
    labels: string[];
    url: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const Ticket: React.FC<IProps> = props => {
    const classes = useStyles();
    const {title, weight, labels, url} = props;

    return (
        <div className={classes.root}>
            <List component="nav" dense>
                <ListItem component="div">
                    <ListItemText
                        primary={title}
                        secondary={`weight: ${weight} / labels: ${labels.join(", ")}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" href={url}>
                            <KeyboardArrowRight/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    )
};

export default Ticket;