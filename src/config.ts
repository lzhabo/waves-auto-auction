import path from "path";
import { config } from "dotenv";
import { loadVar } from "./utils";

config({ path: path.join(__dirname, "../.env") });
config({ path: path.join(__dirname, ".env") });

export const mongoUrl = loadVar("MONGO_URL");
export const chainId = loadVar("CHAIN_ID");
export const accountCount = +loadVar("ACCOUNTS_COUNT");
export const farmingDappAddress = loadVar("FARMING_dApp_ADDRESS");
export const auctionDappAddress = +loadVar("AUCTION_dApp_ADDRESS");
