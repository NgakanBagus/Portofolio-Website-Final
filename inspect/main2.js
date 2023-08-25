const Inspect = document.querySelectorAll(".inspect");
const apiKey = "https://jsonplaceholder.typicode.com/users";

async function hitApi() {
    let api = await fetch(apiKey);
    let users = await api.json();
    return users;
}

async function ShowApi() {
    let dataApi = await hitApi();
    let userData = dataApi.map(user => `
            <h2> Name: ${user.name} </h2>
            <h3> Username: ${user.username} </h3>
            <p> Email: ${user.email} </p>
            <p> Phone: ${user.phone} </p>
    `).join("");
    
    Inspect[0].innerHTML = userData; 
}

ShowApi();
