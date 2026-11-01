import * as ed from "@noble/ed25519";
// EdDSA - Edwards-curve Digital Signature Algorithm  - ED25519
// ( Creating a public/private keypair )
// create a public private keypair
// define a message to sign
// convert message to unit8array
// sign the message with the private key
// verify the message with the public key
async function main() {
    // Generate a secure random private key
    const privKey = ed.utils.randomPrivateKey();
    // Convert the message "hello world" to a Uint8Array
    const message = new TextEncoder().encode("hello world");
    // Generate the public key from the private key
    const pubKey = await ed.getPublicKeyAsync(privKey);
    // Sign the message
    const signature = await ed.signAsync(message, privKey);
    // Verify the signature
    const isValid = await ed.verifyAsync(signature, message, pubKey);
    // Output the result
    console.log(isValid); // Should print `true` if the signature is valid
}

main();
