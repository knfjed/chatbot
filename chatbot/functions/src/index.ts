import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
const db = admin.firestore();

export const addDataset = functions.https.onRequest(
  async (res: any, req: any) => {}
);
