//refer this: https://github.com/mongodb-developer/nodejs-quickstart/tree/master

const { MongoClient } = require('mongodb');
require('dotenv').config();

//async means after this method will then only it goes for next method call
async function main() {
    const client = new MongoClient(process.env.DATABASE_URL);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // await listDatabases(client);    //call for displaying no of databases

        //#region Create a single new listing also multi listing

        // await createListing(client,
        //     {
        //         _id:2,
                // name: "ram",
                // summary: "A charming loft in Paris",
                // bedrooms: 1,
                // bathrooms: 1
        //     }
        // );

        //createMultipleListings is there for inserting many data
        //#endregion

        //#region reading data of db with id

        await findOneListingByID(client, 1);

        //check documentation code for displaying many records
        //#endregion

        //#region updating data of db with id

        // await updateOneListingByID(client, 1,{name: "ram",
        // summary: "nothing",
        // bedrooms: 1,
        // bathrooms: 1,
        // FSTATUS:'A'});

        //check documentation code for displaying many records
        //#endregion

    } catch (e) {
        console.error(e);
    }finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

//this is method you have to call this method inside "async main" method only
//below is just defining methods not calling it
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// Make the appropriate DB calls
//below method for inserting single data
async function createListing(client, newListing){
    //below line creates new db new document and inserts data into it
    const result = await client.db("oj1").collection("usersdata")
    .insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function findOneListingByID(client, id){
    const result = await client.db("oj1").collection("usersdata").findOne({_id : id});

    //find works like where clause of oracle
    // const result = await client.db("oj1").collection("usersdata").find({
    //     "FSTATUS" : { "$in": ["A"] }
    // });
    if (result){
        console.log(`found a listing with id '${id}':`);
        console.log(result);
    } else{
        console.log(`No listing`)
    }
}

async function updateOneListingByID(client, id, dataToUpdate){
    const result = await client.db("oj1").collection("usersdata").updateOne({_id:id},{$set:dataToUpdate});
    console.log(`${result.matchedCount} document(s) matched the query criteria `);
    console.log(`${result.modifiedCount} document(s) updated `);
}

//I'm deleting like updating status to I or else again you've to create a new record
//again typing time it'll take for permanently delete there is option called deletOne
//but here I'm not using it
// async function deleteOneListByID