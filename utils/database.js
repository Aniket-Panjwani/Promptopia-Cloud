<<<<<<< HEAD
import { CloudantV1, IamAuthenticator } from '@ibm-cloud/cloudant';

let cloudantDb;

export const connectToDB = async () => {
  if (cloudantDb) {
    return cloudantDb;
  }

  try {
    const cloudant = CloudantV1.newInstance({
      authenticator: new IamAuthenticator({
        apikey: process.env.CLOUDANT_API_KEY
      }),
      serviceUrl: process.env.CLOUDANT_URL
    });

    // Test the connection
    await cloudant.getAllDbs();
    cloudantDb = cloudant;

    return cloudantDb;
  } catch (error) {
    console.log('Error connecting to Cloudant:', error);
    throw error;
  }
};

// Helper function to get database instance with necessary methods
export const getDatabase = (dbName) => {
  if (!cloudantDb) {
    throw new Error('Database not connected. Call connectToDB first.');
  }
  return {
    async get(id) {
      const result = await cloudantDb.getDocument({
        db: dbName,
        docId: id
      });
      return result.result;
    },
    async create(doc) {
      const result = await cloudantDb.postDocument({
        db: dbName,
        document: doc
      });
      return result.result;
    },
    async find(query) {
      const result = await cloudantDb.postFind({
        db: dbName,
        selector: query.selector
      });
      return result.result;
    },
    async update(id, doc) {
      const result = await cloudantDb.putDocument({
        db: dbName,
        docId: id,
        document: doc
      });
      return result.result;
    },
    async delete(id, rev) {
      const result = await cloudantDb.deleteDocument({
        db: dbName,
        docId: id,
        rev: rev
      });
      return result.result;
    }
  };
};
=======
import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
>>>>>>> 3060b94a7a6f1c530a30c0c4ee2d6bb9d68e547f
