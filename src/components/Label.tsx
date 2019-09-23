import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";

interface IProps {
    value: string;
    backgroundColor: string;
    fontColor: string;
}

const useStyles = makeStyles((props: IProps) =>
    createStyles({
        root: {
            fontSize: 11,
            paddingLeft: 4,
            paddingRight: 4,
            fontWeight: 600,
            backgroundColor: props.backgroundColor,
            color: props.fontColor,
        },
    })
);

const Label: React.FC<IProps> = props => {
    const {value} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>{value}</div>
    )
};

export default Label;