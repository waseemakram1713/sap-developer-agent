const cds = require('@sap/cds');

class CatalogService extends cds.ApplicationService {
    init() {
        const { Books, Orders } = this.entities;

        // 1. BEFORE PHASE: Strict domain validation before persistence hits
        this.before('CREATE', 'Orders', async (req) => {
            const { book_ID, quantity } = req.data;

            // Read existing stock status safely via transaction context
            const targetBook = await SELECT.one.from(Books, book_ID);
            if (!targetBook) return req.reject(404, `Target book structural reference not found.`);

            if (targetBook.stock < quantity) {
                // Terminate request early to avoid wasting DB compute blocks
                return req.reject(400, `Insufficient stock availability. Remaining items: ${targetBook.stock}`);
            }

            // Calculate field context values programmatically prior to database insertion
            req.data.totalPrice = targetBook.price * quantity;
            req.data.orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
        });

        // 2. AFTER PHASE: Trigger clean asynchronous side effects out-of-band
        this.after('CREATE', 'Orders', async (insertedOrder, req) => {
            // Deduct stock levels inside a secondary decoupled operation block
            await UPDATE(Books, insertedOrder.book_ID).with({
                stock: { '-=': insertedOrder.quantity }
            });
            
            console.log(`🧹 [Clean Core Side-Effect]: Stock updated for Book ${insertedOrder.book_ID}`);
        });

        // 3. ON PHASE: Overriding or targeting specific custom actions safely
        this.on('rejectReview', async (req) => {
            const { orderID, reason } = req.data;
            
            await UPDATE(Orders, orderID).with({ status: 'Rejected' });
            
            // Return updated projection data cleanly back to runtime layers
            return SELECT.one.from(Orders, orderID);
        });

        return super.init();
    }
}

module.exports = { CatalogService };