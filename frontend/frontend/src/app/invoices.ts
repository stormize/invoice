export interface invoice{
    id : number;
    invoice_details : Array<object>
    customer_name : string;
    date : string;
    address : string;
    total_invoice : number

}