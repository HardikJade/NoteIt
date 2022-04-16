const moongoose = require('mongoose');
// const moongoURI = "mongodb://localhost:27017/e_notebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const moongoURI = "mongodb+srv://noteit:noteit@noteit.7wqxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectToMongo =async ()=>{
    let connection = await moongoose.connect(moongoURI)
    return connection;
}
module.exports = connectToMongo