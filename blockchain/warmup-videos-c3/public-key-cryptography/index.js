let uint8Arr = new Uint8Array([0, 255, 127, 128]);
// maximum value (0-255) 2^8 
// 255 --> after the 255 this will wrap of 256 (0) 
uint8Arr[1] = 300; //300-256 = 44
console.log(uint8Arr)

// means normal array meh each ele contains 8 bytes(64bits)
// and yeh kitni yada space use krta hai, even if i just store, 10, 20, 30
// this is 3 ele, 3 * 8 = 24 bytes
// but unit8Array meh hr ele sirf 1 bytes ka hota hai means
// 2 ^ 8 possibilityes ho skti hai 


// soch ek meter jisme sirf 3 digit hain(000 se 999). 999 ke baad 1 aur badhao to 1000 nahi dikhata, wapas 000 ho jaata hai.Yehi wrap around hai.

// Uint8Array bhi aisa hi meter hai, bas 0 se 255 tak ka. 255 ke baad wapas 0.

// js
// const b = new Uint8Array(3);
// b[0] = 255;  // 255 (limit pe, theek hai)
// b[1] = 256;  // 0   (255 ke baad ek aur = wapas 0)
// b[2] = 300;  // 44  (256 ke baad 44 aur = 44)

// 300 mein se ek poora chakkar(256) hata do, to bacha 44. Yehi 300 % 256 = 44 hai.

let str = "hello";
const binaryRepresentation = new TextEncoder().encode(str);
console.log(binaryRepresentation);