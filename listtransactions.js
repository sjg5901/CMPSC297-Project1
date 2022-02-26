// ./routes/listtransactions.js

// * Lists all transactions in the system, not currently on blocks

// * Imports

const Transaction = require("../src/transaction");


function listtransactions(app) {


    // List all transactions

    app.get("/listtransactions", function (request, response) {

        // Iterate through all transactions and create a response string

        let txStr = "";

        for (let i = 0; i < global.transactions.length; i++) {

            txStr += global.transactions[i].prettify();
        
        }


        // Send the response for creating a new transaction

        response.status(200).send(txStr);           // HTTP status code 200: OK
                                                    // Response message
    });
}

// Make accessible elsewhere

module.exports = listtransactions;