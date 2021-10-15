const btnSend = document.querySelector('#btn-send');
const tbody = document.querySelector('tbody');
const msgContainer = document.querySelector('#msgContainer');
const message = document.querySelector('#message');

btnSend.addEventListener('click', (ev) => {
    ev.preventDefault();
    const name = document.forms['regist']['name'].value;
    const rating = document.forms['regist']['rating'].value;

    if (name == '') {
        msgContainer.style.display = 'block';
        msgContainer.classList.add('w3-container', 'w3-red');
        message.innerText = 'Please fill the name of the movie field';
        setTimeout(() => {
            msgContainer.style.display = 'none';
            msgContainer.classList.remove('w3-container', 'w3-red');
            message.innerText = '';
        }, 5000);
        return false;
    }

    if (rating < 0 || rating > 10) {
        msgContainer.style.display = 'block';
        msgContainer.classList.add('w3-container', 'w3-red');
        message.innerText = 'The range to rating the movie is of 0 to 10';
        setTimeout(() => {
            msgContainer.style.display = 'none';
            msgContainer.classList.remove('w3-container', 'w3-red');
            message.innerText = '';
        }, 5000);
        return false;
    }

    sendData(name, rating);
});

// Solicitudes
const getfilms = async () => {
    let films = await fetch('/get-films');
    let json = await films.json();

    let html = '';
    json.films.forEach(film => {
        html += `<tr>
                    <td>${film.name}</td>
                    <td>${film.rating}<img src='./img/star.jpg' width='17' style='position: relative; bottom: 3px;'></td>
                </tr>`;
    });
    tbody.innerHTML = html;
}

const sendData = async (name, rating) => {
    let res = await fetch('/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, rating})
    });
    res = await res.json();

    msgContainer.style.display = 'block';
    msgContainer.classList.add('w3-container', 'w3-green');
    message.innerText = res.message;
    setTimeout(() => {
        msgContainer.style.display = 'none';
        msgContainer.classList.remove('w3-container', 'w3-green');
        message.innerText = '';
    }, 3000);

    getfilms();
}

// Llamando la solicitud de cargar todas las peliculas
getfilms();