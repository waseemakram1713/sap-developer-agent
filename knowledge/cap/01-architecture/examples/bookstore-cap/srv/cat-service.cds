using { sap.engineering.bookstore as my } from '../db/schema';

service CatalogService @(path: '/odata/v4/catalog') {
    
    @readonly entity Books as projection on my.Books;
    
    @insertonly entity Orders as projection on my.Orders;

    // Custom action avoiding framework shadowing conflicts
    action rejectReview(orderID: UUID, reason: String) returns Orders;
}