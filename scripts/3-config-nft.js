import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xF4C6F9452A7F14E82972AD9Ec7FE82dDcb96BfB7");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Glitched Ghost",
        description: "This NFT will give you access to GhostDAO!",
        image: readFileSync("scripts/assets/ghost.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();