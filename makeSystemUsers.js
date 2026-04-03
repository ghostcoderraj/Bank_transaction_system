require('dotenv').config();
const mongoose = require('mongoose');

async function makeSystemUsers() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('Connected to DB...');
        // We use the raw collection to bypass the 'immutable: true' schema property
        const result = await mongoose.connection.collection('users').updateMany(
            {}, 
            { $set: { systemUser: true } }
        );

        console.log(`Successfully updated ${result.modifiedCount} regular user(s) to system users!`);
        console.log('You can now log in or use your existing token in Postman and it will work.');
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

makeSystemUsers();
