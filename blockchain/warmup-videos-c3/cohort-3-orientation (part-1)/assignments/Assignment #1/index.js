// Problem: 00000 se start hone wala hash chahiye

// Maan lo tumhe aisa input chahiye jiska hash 00000... se shuru ho. Kya tum calculation karke seedha input nikal sakte ho? Nahi, kyunki function one-way hai aur output unpredictable hai. Koi shortcut ya formula exist hi nahi karta.

// To bachta hai sirf ek tareeka: try karte jao, try karte jao.

// "test0"  → a3f5c1...   ❌
// "test1"  → 9b2e7d...   ❌
// "test2"  → 4c81aa...   ❌
// ...
// "test847291" → 00000f3a...   ✅ mil gaya!

// Isi ko (brute force )kehte hain: sabhi possibilities ek ek karke try karna jab tak jawab na mile.


// Kitni tries lagengi ?

//     Har hex character 16 possible values me se ek hota hai.Pehle 5 characters sab 0 hone ki probability:

// (1 / 16) ^ 5 = 1 / 1,048, 576

// Yaani average me lagbhag 10 lakh tries me ek hit milega.Agar 6 zeros chahiye to ~1.6 crore tries, 7 zeros pe ~27 crore.Har extra zero pe kaam 16 guna badh jata hai.

const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);