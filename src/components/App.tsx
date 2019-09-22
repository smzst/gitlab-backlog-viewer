import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container'
import {sampleData, sampleDescription} from "./sampleData";
import Ticket from "./components/Ticket";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import Detail from "./Detail";
import {createStyles, makeStyles, Theme} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        ticketsColumn: {
            marginTop: 17,
        },
    }),
);

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Header/>
            <Container>
                <Grid container component="div">
                    <Grid item xs={6} component="div" className={classes.ticketsColumn}>
                        {sampleData.map(d => (
                            <Ticket
                                key={d.url}
                                title={d.title}
                                weight={d.weight}
                                labels={d.labels}
                                url={d.url}
                            />
                        ))}
                    </Grid>
                    <Grid item xs={6} component="div">
                        <Detail
                            title={"issues#1231 \"広告構造データマートへ格納\" リリース"}
                            description={sampleDescription}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default App;
