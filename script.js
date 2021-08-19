/**
 * Get data from api 
 * @param {string} country 
 * @param {string} code 
 * @returns res
 */
async function getData(country,code) {
    let url = `http://api.zippopotam.us/${country}/${code}`;
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

/**
 * Render data from fetch
 * @param {string} country 
 * @param {string} code 
 */
async function renderData(country,code) {
    // send parameters for fetch data
    let data = await getData(country,code);
    if(data) {
        document.querySelector('#state').value = data.places[0]['state'];
        document.querySelector('#city').value = data.places[0]['place name'];
        document.querySelector('#results').style.display = "block";
        document.querySelector('#get').style.display = "none";
        document.querySelector('#clear').style.display = "block";
	};
}

/**
 * 
 */
function clickBtn() {
    document.querySelector('#get').addEventListener("click", function( event ) {
        let country = document.querySelector('#counrty').value.toLowerCase();
        let code =  document.querySelector('#zip').value;
        if(country != '' && code!=''){
            renderData(country,code);
        }
    });
}

/**
 * 
 */
function clear() {
    document.querySelector('#clear').addEventListener("click", function( event ) {
        document.querySelector('#state').value = '';
        document.querySelector('#city').value = '';
        document.querySelector('#zip').value = '';
        document.querySelector('#counrty').value = '';
        document.querySelector('#results').style.display = "none";
        document.querySelector('#get').style.display = "block";
        document.querySelector('#clear').style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    clickBtn();
    clear();
});
