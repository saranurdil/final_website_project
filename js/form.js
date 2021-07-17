

getElmById('btn-login').addEventListener('click', (e) => {
    e.preventDefault();
    
    let email = getElmById('email').value;
    let password = getElmById('password').value;
    let isValid = true;

    if (!isEmailValid(email) || !isPasswordValid(password)) {
        isValid = false;
    }
    if(isValid){
        let database = [];
        if(localStorage.users){
            database = JSON.parse(localStorage.users);
        }

        let user = getUser(email, password, database);

        if(user){
            document.location.href = 'userpage.html';
            sessionStorage.user = JSON.stringify(user);
    
        }
        else{
            alert(`This user does not exist`);
        }
    }


})

function getUser(email, password, database) {
    let result = null;
    if (!email || !password) {
        return result;
    }
    for(let user of database){
        if (user.email == email && user.password == password) {
            result = user;
            break;
        }
    }
    return result;
}
function getElmById(id){
    return document.getElementById(id);
}
function getElmBySelector(selector){
    return document.querySelector(selector);
}


function isEmailValid(email = ''){
    let isValid = false;

    if(!email){
        return isValid;
    }
    if(email.indexOf('@') > 0){
        isValid = true;
    }

    return isValid;
}

function isPasswordValid(password = ''){
    let isValid = false;

    if(!password){
        return isValid;
    }
    if(password.length >= 6){
        isValid = true;
    }

    return isValid;
}