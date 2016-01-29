'use strict';

function repo() {
    let stock = new Map();

    return {
        getByIsbn(isbn) {
            if (!stock.has(isbn)) {
                return Promise.resolve(null);
            }
            return Promise.resolve(stock.get(isbn));
        },

        upsert(doc) {
            stock.set(doc.isbn, doc);
            return Promise.resolve({ memoryRepo: true });
        },
        wipe() {
            stock.clear();
        }
    };
}

module.exports = repo;


