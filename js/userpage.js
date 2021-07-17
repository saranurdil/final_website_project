document.addEventListener('DOMContentLoaded', () => {
    let user = JSON.parse(sessionStorage.user);

    
    if(!user.name || !user.surname || !user.email){
        alert('Error404');
        document.location.href = 'index.html';
    }

    document.title = `${user.name} ${user.surname}`;
    getElmbyId('name').innerText += `${user.name} `;
    getElmbyId('surname').innerText += `${user.surname} `;
    getElmbyId('wel').innerText += ` ${user.name} ${user.surname}`;
    getElmbyId('age').innerText += ` ${user.name} ${user.age}`;

})

function getElmbyId(id){
    return document.getElementById(id);
}