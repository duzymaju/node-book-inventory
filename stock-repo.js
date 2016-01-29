'use strict';

function repo(conn) {
    const collName = 'wikmaj-stock';

    function getByIsbn(isbn) {
        return conn
            .then(db => {
                const collection = db.collection(collName);

                return collection.find({isbn: isbn}).limit(1).next();
            });
    }

    function upsert(doc) {
        return conn
            .then(db => {
                const collection = db.collection(collName);

                return collection.updateOne({isbn: doc.isbn}, doc, { upsert: true });
            })
    }

    return { getByIsbn, upsert }
}

module.exports = repo;


