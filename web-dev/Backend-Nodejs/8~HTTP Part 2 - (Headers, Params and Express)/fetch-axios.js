async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
}
getData()

async function getDataAxios(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
}
getDataAxios()

// fetch  : built in 
// axios  :  external, more features