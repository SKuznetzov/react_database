const { createClient } = require("@astrajs/collections")

ASTRA_DB_ID = 34279e7a-6426-44b6-80b4-4db70fbb948b
// ASTRA_DB_REGION = St.Ghislain,Belgium
ASTRA_DB_USERNAME=
ASTRA_DB_PASSWORD=

exports.handler = async function (event, context, callback) {
    const astraClient = await createClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      username: process.env.ASTRA_DB_USERNAME,
      password: process.env.ASTRA_DB_PASSWORD,
    })
console.log(astraClient)





