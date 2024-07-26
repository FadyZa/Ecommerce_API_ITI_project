

import mongoose from 'mongoose';

// connection mongoose
export const dbConnection = mongoose.connect(`mongodb://localhost:27017/nodeTest15`)
.then(()=>console.log(`DB is connected`))
.catch(()=>console.log(`err`));
