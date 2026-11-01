1. Transaction (user ka kaam)

User batata hai: “Main A ko 1 BTC bhej raha hoon”
Apni private key se sign karta hai (proof ki ye wahi hai)
Signed txn network pe bhej deta hai

2. Block banana (miner ka kaam)

Miner bahut saari txns ek block mein jodta hai
Block mein pichle block ka hash bhi hota hai (isi se chain banti hai)

3. Mining (nonce dhoondhna)

Miner block ka hash nikalta hai
Rule hai: hash ek target se chhota hona chahiye (jaise 0000... se shuru)
Pehli baar mein aisa hash nahi aata, to miner nonce (ek number) badalta rehta hai: 1, 2, 3...
Har nonce pe naya hash banta hai, jab tak sahi hash na mile
Isme koi shortcut nahi, sirf trial and error
block + nonce=1  → hash: 8f3a...   ❌
block + nonce=2  → hash: c91b...   ❌
block + nonce=84712 → hash: 0000a7...   ✅

4. Proof of Work

Sahi nonce milna = proof ki miner ne bahut computing mehnat ki
Baaki nodes isse ek hi baar hash karke verify kar lete hain (dhoondhna mushkil, check karna aasaan)

5. Block chain mein judta hai

Miner ko reward (naye BTC + fees) milta hai
Ab koi puraani block badalna chahe to usse us block ka aur uske baad ke sab blocks ka PoW dobara karna padega. Isliye cheating almost impossible hai.

Yaad rakhne ke liye:

User = sign karta hai
Miner = nonce dhoondhta hai (PoW)