import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Launch from '@material-ui/icons/Launch';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Tooltip} from "@material-ui/core";
import Label from "./Label";

interface IProps {
    title: string;
    weight: number;
    labels: string[];
    url: string;
    selected?: boolean;
    setSelectedTicketIndex: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            backgroundColor: theme.palette.background.paper,
        },
        list: {
            padding: 0,
        },
    }),
);

const Ticket: React.FC<IProps> = props => {
    const classes = useStyles();
    const {title, weight, labels, url, selected, setSelectedTicketIndex} = props;

    return (
        <div className={classes.root}>
            <List component="nav" dense className={classes.list}>
                <ListItem component="div" button onClick={setSelectedTicketIndex} selected={selected}>
                    <ListItemText
                        primary={title}
                        secondary={labels.map(l => <Label value={l} backgroundColor="#FFF" fontColor="#FFF"/>)}/>
                    <ListItemSecondaryAction>
                        <Tooltip title="View on GitLab">
                            <IconButton edge="end" href={url} target="_blank">
                                <Launch/>
                            </IconButton>
                        </Tooltip>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    )
};

export default Ticket;