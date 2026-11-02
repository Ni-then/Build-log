// bitcoin addresses, eth addresses, sol addresses
// m/44/0/0 => 1st wallet on bitcoin
// m/44/501/0 => 1st wallet on solana
// m/44/60/0 => 1st wallet on eth

// m/44/0/1 => 2nd wallet on bitcoin   

import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonic = generateMnemonic();
console.log("Generated Mnemonic:", mnemonic);
const seed = mnemonicToSeedSync(mnemonic);