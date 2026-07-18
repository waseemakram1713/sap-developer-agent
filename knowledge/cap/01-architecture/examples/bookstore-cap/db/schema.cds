namespace sap.engineering.bookstore;

using { managed, cuid } from '@sap/cds/common';

entity Books : cuid, managed {
    title  : String(255) @mandatory;
    author : String(255) @mandatory;
    stock  : Integer @assert.range: [ 0, null ];
    price  : Decimal(9,2);
}

entity Orders : cuid, managed {
    orderNumber : String(50);
    book        : Association to Books;
    quantity    : Integer @mandatory;
    totalPrice  : Decimal(9,2);
    status      : String(20) @assert.range: [ 'Pending', 'Approved', 'Rejected' ] default 'Pending';
}