console.log('Самооценка 60/60\n1. Вёрстка (10)\n2. При загрузке приложения на странице отображаются полученные от API изображения (10)\n3. Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API (10)\n4.Поиск (30)');

// GET IMAGES FROM API

const srchBar = document.querySelector('.srch-bar');
const srchIcon = document.querySelector('.srch-icon');

let url = `https://api.unsplash.com/search/photos?query=owl&per_page=20&client_id=tJQpMowetlcinyqj_1gtlJYzo3G4BP54fu1wopH7V6c`;

srchBar.addEventListener('keyup', updateData);
srchIcon.addEventListener('click', updateImg);

function updateData(event) {
    if (event.keyCode === 13) {
        gallery.innerHTML='';
        let value = srchBar.value;
        url = `https://api.unsplash.com/search/photos?query=${value}&per_page=20&client_id=tJQpMowetlcinyqj_1gtlJYzo3G4BP54fu1wopH7V6c`;
        getData();
    }
}

function updateImg() {
    gallery.innerHTML='';
    let value = srchBar.value;
    console.log(value);
    url = `https://api.unsplash.com/search/photos?query=${value}&per_page=20&client_id=tJQpMowetlcinyqj_1gtlJYzo3G4BP54fu1wopH7V6c`;
    getData();
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data);
}
getData();

// SHOW IMAGES

const gallery = document.querySelector('.gallery');

 function showData(data) {
    for (i=0; i < data.results.length; i++) {
        const img = document.createElement('img');
        img.classList.add('image');
        img.src = data.results[i].urls.regular;
        img.alt = 'image';
        gallery.append(img);
    }
} 

/* function showData(data) {
    let imgArray = data['results'].map(el => {
        let img = document.createElement('div');
        img.classList.add('image');
        img.style.backgroundImage = `url(${el.urls.regular})`;
        return img;
    });
    gallery.append(...imgArray);
} */