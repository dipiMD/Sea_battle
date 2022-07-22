class Stat {
    constructor (played, wins, singleCage, doubleCage, tripleCage, quadroCage, user_id) {
        this.played = played;
        this.wins = wins;
        this.singleCage = singleCage,
        this.doubleCage = doubleCage;
        this.tripleCage = tripleCage;
        this.quadroCage = quadroCage;
        this.user_id = user_id;
    }
}
var user_id;
let stat;
function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
            if (xhr.status >= 400)
                reject(xhr.response);
            else
                resolve(xhr.response);
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send(JSON.stringify(body));
    })
}


function loginValidate(username, password) {
    sendRequest('GET', 'http://localhost:3000/api/user/' + username)
    .then(res => {
        if (res.password == password) {
            window.location.href = 'index.html'            
        } else if (username.length == 0) {
            alert("Введите имя пользователя");
        } else if (password.length == 0){
            alert("Введите пароль");
        } else
            alert("Неправильный пароль");
    })
    .catch(rej =>  {
        alert("Неправильное имя пользователя");
    });
}

function registerValidate(username, pass, rep) {
    sendRequest('GET', 'http://localhost:3000/api/user/' + username)
    .then(res => {
        if (username.length == 0)
            alert("Введите логин");
        else if (res) {
            alert("Пользователь с таким логином уже зарегистрирован");
        } else if (pass.length == 0) {
            alert("Введите пароль");
        } else if (rep.length == 0) {
            alert("Повторите пароль");
        } else if (pass != rep) {
            alert("Пароли не совпадают");
        } else {
            sendRequest("POST", 'http://localhost:3000/api/user', {
                username: username,
                password: pass
            }).then(res => {
                window.location.href = 'index.html'
            })      
        }           
    })
}

function indexLoad() {
    console.log(user_id);
    if (user_id === null) {
        alert("Перед продолжением войдите в аккаунт");        
    }
}
//alert("Успешная регистрация");
                //stat = new Stat(res.played, res.wins, res.singleCage, res.doubleCage, res.tripleCage, res.quadroCage, res.user_id);
                //console.log(stat);