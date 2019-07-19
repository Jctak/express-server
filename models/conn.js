const pgp = require("pg-promise")({
    query: e => {
        console.log("QUERY:", e.query);
    }
});

const options = {
    host: "localhost",
    database: "baseball",
    user: "jctak"
};

// const db = pgp("postgres://jctak@localhost/baseball");
const db = pgp(options);
module.exports = db;
