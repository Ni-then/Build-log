function callback() {
    console.log('Callback executed after 2 seconds');
}
setTimeout(callback, 0);
for(let i = 0;i<=10;i++){
    console.log(i)
}
// means setTimeout ek async function hota hai , means its will not block the thread , it will wait 