// we have pulic and private key(if i want to send BTCH to someone so this happens irght ??)
// when i send ki, send 100 dollars to the harkirrat
// 1 > i sign this message with my pirvate key
// 2 > this plain message-- > converted into the hash
// 3 > then this digitally signed messge + my public key forwared to the some solana miner how verify this, by my public key

// Message(amount, receiver, blockhash...) → bytes mein convert
// Un bytes ka hash nikalta hai(Ed25519 andar khud karta hai)
// Us hash ko private key se sign karte hain → signature
// Network ko jaata hai: original message(plain) + signature