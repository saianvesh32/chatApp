 const mongoose = require('mongoose');

 const url=`mongodb+srv://chatAppAdmin:Anvesh32@cluster0.ws3j1cp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
 mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))
