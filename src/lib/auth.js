import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import dns from "node:dns/promises"
dns.setServers(["8.8.8.8", "8.8.4.4"])
const client = new MongoClient(process.env.AUTH_DB_URL);
const db = client.db('better_auth_db');

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    // requireEmailVerification: true, 
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});