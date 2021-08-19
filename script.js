async function getData(country,code) {
    let url = `http://api.zippopotam.us/${country}/${code}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData(country,code) {
    let data = await getData(country,code);
    if(data) {
        console.log(data);
        console.log(data.places[0]['place name']);
        document.querySelector('#state').value = data.places[0]['state']; //data.places[0]['state'];
        document.querySelector('#city').value = data.places[0]['place name']; //data.places[0]['place name'];

        let results = document.querySelector('#results');
        results.style.display = "block";

        /* let html = '';
        let htmlSegment = `<div class="user">
                            <h2>${data.country} ${data.places[0].state}</h2>
                            <div class="email"><a href="email:${data}">${data}</a></div>
                        </div>`;

        html += htmlSegment; */

        //let container = document.querySelector('.container');
        //container.innerHTML = html;
	};
}

function clickBtn() {
    let btn = document.querySelector('#get');
    btn.addEventListener("click", function( event ) {
        let country = document.querySelector('#counrty').value.toLowerCase();
        let code =  document.querySelector('#zip').value;
        if(country != '' && code!=''){
            renderData(country,code);
        }
    });
}
clickBtn();