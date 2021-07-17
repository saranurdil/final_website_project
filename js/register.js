class DOMmanager{

    getElmById(id){
        return document.getElementById(id);
    }
    getElmBySelector(selector){
        return document.querySelector(selector);
    }
}
class User{

    constructor(name, surname, email, password, birthYear){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.birthYear = birthYear;
        this.age = this.getAge();
    }
    getAge(){
        let date = new Date();
        let age = date.getFullYear() - this.birthYear;
        return age;
    }


}

class Validator{

    constructor(){

    }
    isEmailValid(email = ''){
        let isValid = false;
    
        if(!email){
            return isValid;
        }
        if(email.search('@') != -1){
            isValid = true;
        }
    
        return isValid;
    }
    
    isPasswordValid(password = ''){
        let isValid = false;
    
        if(!password){
            return isValid;
        }
        if(password.length >= 6){
            isValid = true;
        }
    
        return isValid;
    }
}
class DatabaseManager{

    constructor(database){
        this.database = database;
    }
    getUser(email) {
        let result = null;
        if (!email) {
            return result;
        }
        for(let user of this.database){
            if (user.email == email) {
                result = user;
                break;
            }
        }
        return result;
    }
    
}
let domManager = new DOMmanager();
    validator = new Validator();
domManager.getElmById('btn-register').addEventListener('click', (e) => {
    e.preventDefault();

    // get email, password, name, surname
    let name = domManager.getElmById('name').value;
    let surname = domManager.getElmById('surname').value;
    let birthYear = domManager.getElmById('year').value;
    let email = domManager.getElmById('email').value;
    let password = domManager.getElmById('password').value;

    let isValid = true;

    if(!validator.isEmailValid(email)){
        isValid = false;
    }
    if(!validator.isPasswordValid(password)){
        isValid = false;
    }

    if(isValid){
        // get data from database
        let data = [];
        if(localStorage.users){
            data = JSON.parse(localStorage.users);
        }

        let dataManager = new DatabaseManager(data);
        // check if the user exists
        if(dataManager.getUser(email)){
            alert('This user already exists')
        }
        else{
            let user = new User(name, surname, email, password, birthYear);
            // add user to database
            data.push(user);
            localStorage.users = JSON.stringify(data);
            alert('You successfully registered')
        }
        }
})

domManager.getElmBySelector('#email').addEventListener('change', () =>{

    let email = domManager.getElmById('email').value;

    if(!validator.isEmailValid(email)) {
        domManager.getElmBySelector('.email-valid').innerText = 'Given email is wrong!';
    }
    else{
        domManager.getElmBySelector('.email-valid').innerText = '';
    }

});
domManager.getElmBySelector('#password').addEventListener('change', () =>{
    let password = domManager.getElmById('password').value;

    if(!validator.isPasswordValid(password)) {
        domManager.getElmBySelector('.password-valid').innerText = 'The minimum length of the password must be at least 6 characters long!';
    }
    else{
        domManager.getElmBySelector('.password-valid').innerText = '';
    }
});




