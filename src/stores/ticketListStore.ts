import {action, observable} from "mobx";
import {Ticket} from "../models/domain/Ticket";
import {sampleData} from "../sampleData";

class TicketListStore {
    @observable tickets: Ticket[] = sampleData;
    @observable selectedTicket: Ticket = this.findBy(1)!;

    @action setTickets(values: []): void {
        this.tickets = values
    }

    @action setSelectedTicketIndex(index: number): void {
        this.selectedTicket = this.findBy(index)!
    }

    private findBy(index: number): Ticket | undefined {
        return this.tickets.find(t => t.index === index)
    }
}

export default new TicketListStore();