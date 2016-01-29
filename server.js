'use strict';

const app = require('./app');

const server = app.listen(process.env.PORT || 3001, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
