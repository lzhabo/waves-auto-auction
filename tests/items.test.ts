import { Account } from "../src/models/account";
import { initMongo } from "./initMongo";
import {
  randomSeed,
  privateKey,
  publicKey,
  address,
} from "@waves/ts-lib-crypto";

import { accountCount, chainId } from "../src/config";

describe("items", () => {
  beforeAll(initMongo);
  it("issue 2 accounts", async () => {
    const accounts = await Promise.all(
      Array.from({ length: accountCount }, () => {
        const seed = randomSeed();
        const sk = privateKey(seed);
        const pk = publicKey(seed);
        const addressTestnetBase58 = address(seed, chainId);
        return Account.create({
          seed,
          address: addressTestnetBase58,
          privateKey: sk,
          publicKey: pk,
          chainId,
        });
      })
    );
    console.log(accounts);
  });
});
