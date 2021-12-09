import * as mongoose from "mongoose";
import { Document } from "mongoose";

export interface IAccountParams {
  seed: string;
  address: string;
  privateKey: string;
  publicKey: string;
  chainId: string;
  balance?: string;
  ducks?: string[];
}

export type TAccountDocument = Document & IAccountParams;

const AccountSchema = new mongoose.Schema({
  seed: { type: String, required: true },
  address: { type: String, required: true },
  privateKey: { type: String, required: true },
  publicKey: { type: String, required: true },
  chainId: { type: String, required: true },
  balance: { type: String, required: false },
  ducks: { type: Array(String), required: false },
});

export const Account = mongoose.model<TAccountDocument>(
  "Account",
  AccountSchema
);
