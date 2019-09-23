import React, {useEffect} from 'react';
import './css/App.css';
import Container from '@material-ui/core/Container'
import Header from "./Header";
import Grid from "@material-ui/core/Grid";
import Detail from "./Detail";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Ticket from "./Ticket";
import ticketListStore from "../stores/ticketListStore";
import {observer} from "mobx-react";
import ax from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: 48,
        },
        ticketsColumn: {
            marginTop: 20,
            paddingRight: 80,
        },
    }),
);

const isSelected = (index: number) =>
    index === ticketListStore.selectedTicket.index;

const App: React.FC = () => {
    useEffect(() => {
        ax.get("localhost:9000")
            .then(resp => {
                ticketListStore.tickets = resp.data.tickets
            })
            .catch(e => {
                // todo
                console.log(e);
            })
    }, []);

    const classes = useStyles();

    return (
        <div>
            <Header/>
            <Container className={classes.container}>
                <Grid container component="div">
                    <Grid item xs={6} component="div" className={classes.ticketsColumn}>
                        {ticketListStore.tickets.map(t => (
                            <Ticket
                                key={t.index}
                                title={t.title}
                                weight={t.weight}
                                labels={t.labels}
                                url={t.url}
                                selected={isSelected(t.index)}
                                setSelectedTicketIndex={() => ticketListStore.setSelectedTicketIndex(t.index)}
                            />
                        ))}
                    </Grid>
                    <Grid item xs={6} component="div">
                        <Detail
                            title={ticketListStore.selectedTicket.title}
                            description={ticketListStore.selectedTicket.description}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default observer(App);
