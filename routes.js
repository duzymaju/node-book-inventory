'use strict';

module.exports = function (stockRepo) {
    return {
        stock: {
            get(req, res, next) {
                const accept = req.headers.accept || '';
                const isbn = req.params.isbn;
                const requestId = req.header('x-request-id') || 'SuperInventoryBookId' + isbn;

                stockRepo.getByIsbn(isbn)
                    .then(result => {
                        if (!result) {
                            return next();
                        }
                        res.status(200)
                            .setHeader('X-Request-ID', requestId);
                        if (accept.match(/text\/html/)) {
                            res.send(`<span>${result.count}</span>`);
                        } else {
                            res.json(result);
                        }
                    })
                    .catch(err => {
                        next(err);
                    });
            },

            post(req, res, next) {
                let payload = req.body;

                stockRepo.upsert(payload)
                    .then((result) => {
                        console.log('inserted', result);
                        res.status(201).json({ status: 'ok dude' });
                    })
                    .catch(err => {
                        next(err);
                    });
            }
        },
        test: {
            ping(req, res) {
                res.status(200).send('ok');
            }
        },
        errors: {
            notFound(req, res) {
                res.status(404).json({
                    status: 404,
                    msg: '404 error'
                });
            },

            internal(err, req, res, next) {
                console.log(err.stack);
                res.status(500).json({
                    status: 500,
                    msg: err.message
                });
            }
        }
    }
};
