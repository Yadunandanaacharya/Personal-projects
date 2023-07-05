//from documentation
//https://www.mongodb.com/developer/languages/javascript/node-connect-mongodb/

const { MongoClient } = require('mongodb');
require('dotenv').config();

/**
* Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
* See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
*/
// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";       
//process.env.DATABASE_URL takes uri from .env file

async function main(){
    const client = new MongoClient(process.env.DATABASE_URL);

    try {
        await client.connect();
    
        await listDatabases(client);
    
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);