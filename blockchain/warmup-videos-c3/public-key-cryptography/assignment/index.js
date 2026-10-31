// Assignment -
//     What do you think happens to the first element here ? Does it throw an error ?
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300; 
// 255 ke baad wrap around ho jayega means 255 , 256(0) 266(1)
// 300 % 255 = 44
// so at the index number 1 , 44 will be appear