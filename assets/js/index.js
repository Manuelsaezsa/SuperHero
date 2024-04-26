const BASE_URL = "https://www.superheroapi.com/api.php/4905856019427443";


const inputsuperhero = $("#input-superhero")
const buttonSearch = $("#search-superhero");


const getOneSuperHero = (inputsuperhero) => {
    
    return $.ajax({
        type: "GET",
        url: `${ BASE_URL }/${ inputsuperhero }`,
        dataType: 'json',
        success: function (data) {
            
            if(data.response && data.response == 'error') {
                let htmlCard = `
                    <div class="card" style="width: 18rem; ">
                        <div class="card-body">
                            <h5 class="card-title">Inserte un número valido del 1 al 732</h5>
                        </div>
                    </div>
                    `;

                $(".onesuperhero-section").html(htmlCard);
                return $("#chartContainer").html(' ');
            }   
            let htmlCard = `
                <div class="card" style="width: 18rem; ">
                    <img src="${data.image.url}" class="card-img-top" alt="Foto de ${data.name}">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">ID: ${data.id}</p>
                        <p class="card-text">${data.connections["group-affiliation"]}</p>
                        <p class="card-text">${data.biography.publisher}</p>
                        <p class="card-text">${data.work.occupation}</p>
                        <p class="card-text">${data.biography["first-appearance"]}</p>
                        <p class="card-text">${data.appearance.height.join('&nbsp;&nbsp;')}</p>
                        <p class="card-text">${data.appearance.weight.join('&nbsp;&nbsp;')}</p>
                        <p class="card-text">${data.biography.aliases.join('&nbsp;&nbsp;')}</p>
                    </div>
                </div>
            `;
            
            $(".onesuperhero-section").html(htmlCard);
            createSuperHeroChart(data);
        },
        error: function (data) {
            console.log("error con la petición");
        }
    });
    
}


buttonSearch.on('click', function(event) {
    event.preventDefault()
    getOneSuperHero(inputsuperhero.val());
    
})


$("#search-superhero").on("click", function () {
    $(".parpadear").parpadear();
});


$(document).ready(function() {
    $("#reload-image").on("click", function() {
        location.reload(); // Recargar la página
    });
});
