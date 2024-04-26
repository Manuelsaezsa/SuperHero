const createSuperHeroChart = (superhero) => {
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2",
        title: {
            text: "Estadísticas de poder del Superhéroe",
        },
        
        data: [{
            type: "pie",
			showInLegend: "true",
			legendText: "{label}",
			indexLabel: "{label} ({y})",

            dataPoints: [
                { label: "Inteligencia", y: parseInt(superhero.powerstats.intelligence) || 0 },
                { label: "Fuerza", y: parseInt(superhero.powerstats.strength) || 0 },
                { label: "Velocidad", y: parseInt(superhero.powerstats.speed) || 0 },
                { label: "Durabilidad", y: parseInt(superhero.powerstats.durability) || 0 },
                { label: "Poder", y: parseInt(superhero.powerstats.power) || 0 },
                { label: "Combate", y: parseInt(superhero.powerstats.combat) || 0 }
            ]
        }],
        backgroundColor: "#ffff99",
    });

    chart.render();
}
