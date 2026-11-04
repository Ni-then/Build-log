bip - 32 : HD wallets
bip - 39 : list of words

Problem (BIP-32 se pehle):
Har wallet ki alag private key yaad ya store karni padti thi. Ek bhi kho gayi toh wo wallet aur uske crypto hamesha ke liye gaye.

BIP-32 (HD wallets):
Ek seed banta hai, aur us seed se naye wallets (public + private key) derive hote hain. Ab har wallet ki key yaad rakhne ki zaroorat nahi.

Phir bhi problem:
Seed khud bahut lamba aur yaad rakhna mushkil hai.

BIP-39 (mnemonic):
Seed ki jagah 12 words yaad rakho. Ye 12 words PBKDF2 function se pass hote hain aur 512-bit seed ban jaata hai.

Flow:
12 words → seed → master key → child keys (wallets)

Derivation path (BIP-44):
m / 44' / coin_type' / account' / change / address_index

Solana first wallet: m/44'/501'/0'
Solana second wallet: m/44'/501'/1'
ETH first wallet: m/44'/60'/0'/0/0
ETH second wallet: m/44'/60'/0'/0/1



Note : from mnemonic , we can derive the wallets (private and public keys)
but from the wallets we cannot derive the mnemonic

Interview question 
solana , BTC , eth ka user balance kaha pr store hota hai ?
How does backpack knows ki user ke kitne wallets hai?