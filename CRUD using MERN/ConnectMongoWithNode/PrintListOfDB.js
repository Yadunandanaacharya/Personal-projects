//code reference: https://www.mongodb.com/community/forums/t/how-to-list-all-databases-in-atlas-using-nodejs-driver/222607
//by alexbevi


let {MongoClient} = require('mongodb');
const urlToAtlasCluster = 'mongodb+srv://yadu:pass1234@cluster0.zxztpyx.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(urlToAtlasCluster);

function containsEntry(array, value) {
  return array.filter(e => e.name == value).length > 0;
}

async function run() {
  try {
    await client.connect();
    const admin = client.db("admin");
    
    const result = await admin.command({ listDatabases: 1, nameOnly: true });
    console.log(result.databases);
    console.log(`Contains "myTestDatabase": ${containsEntry(result.databases, 'myTestDatabase')}`);
    console.log(`Contains "local": ${containsEntry(result.databases, 'local')}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);