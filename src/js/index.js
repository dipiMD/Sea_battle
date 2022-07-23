let user_id = 15;
let stat;

function sendRequest(method, url, body = null) {
    return new Promise( (resolve, reject) => {
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
            window.location.href = 'index.html';            
        } else if (username.length == 0) {
            alert("Введите имя пользователя");
        } else if (password.length == 0) {
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
        if (username.length == 0) {
            alert("Введите логин");
        }
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
    //Сюда нужно передать user_id
    sendRequest('GET', 'http://localhost:3000/api/stat/' + user_id)
    .then(res => {
        stat = new Stat(res.id, res.user_id, res.played, res.wins, res.singleCage, res.doubleCage, res.tripleCage, res.quadroCage);
    })
    .catch(rej => {
        sendRequest('POST', 'http://localhost:3000/api/stat', {
            id: user_id
        })
        .then(res => {
            stat = new Stat(res.id, res.user_id, res.played, res.wins, res.singleCage, res.doubleCage, res.tripleCage, res.quadroCage);            
        })
    })
}

async function updateStat() {
    sendRequest('PUT', 'http://localhost:3000/api/stat', {
        user_id: stat.user_id,
        played: stat.played,
        wins: stat.wins,
        singleCage: stat.singleCage,
        doubleCage: stat.doubleCage,
        tripleCage: stat.tripleCage,
        quadroCage: stat.quadroCage
    })
}


class Stat {
    constructor (id, user_id, played, wins, singleCage, doubleCage, tripleCage, quadroCage) {
        this.id = id;
        this.user_id = user_id;
        this.played = played;
        this.wins = wins;
        this.singleCage = singleCage;
        this.doubleCage = doubleCage;
        this.tripleCage = tripleCage;
        this.quadroCage = quadroCage;
   }
}