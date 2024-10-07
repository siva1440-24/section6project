export interface Ticket {
    id: string,
    requests : string,
    title : string,
    status : 'open' | 'closed';
}