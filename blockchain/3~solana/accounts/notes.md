User account : contains lamports , don't have custom data
2> have lamports + custom data 
3> program accout : smart contracts , custom logics
4> program-dervied-address : contains how much qty we have like SOL , ETH 

More technicall depth : 

1. System account / wallet account: Sahi. Isme sirf lamports hote hain, koi custom data nahi. (Owner: System Program)

2. Data account: Sahi. Lamports + custom data (jaise token balance, user info). Ye data account kisi program ka owned hota hai.

3. Program account: Sahi. Isme executable code (smart contract) hota hai. executable = true.

4. PDA: Galat. PDA ke andar “kitni SOL/ETH hai” aisa kuch fix nahi hota. PDA ek address hai jo program ke seeds se derive hota hai, aur uski private key nahi hoti. Sirf program hi us par sign kar sakta hai. PDA ka account aksar data account hota hai, jisme program apna custom data rakhta hai (jaise vault, user state).

Simple example: Ek vault program socho. Program account = code. PDA = ["vault", user_pubkey] se bana address. Us PDA par ek data account hoga jisme user ka balance/state store hota hai.