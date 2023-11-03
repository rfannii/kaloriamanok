// kaloria.js

$(document).ready(function () {
    $('#keresGomb').click(function () {
        var query = $('#etelNev').val(); // Módosítás itt: '#etelNev'

        // Ellenőrizd, hogy az étel nevét megadták-e
        if (query.trim() === "") {
            alert("Kérlek add meg az étel nevét!");
            return;
        }
        // Elküldjük az étel nevét az API-nak
        $.ajax({
            method: 'GET',
            url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
            headers: { 'X-Api-Key': 'NmD/5iIb8tOSYd5Xu52RAQ==2YMu5R4vaFhvB12N'},
            contentType: 'application/json',
            success: function(result) {
                if (result.items && result.items.length > 0) {
                    var item = result.items[0];
                    var output = "Étel: " + item.name + "<br>";
                    output += "Tömeg: " + item.serving_size_g + " g<br>";
                    output += "Kalóriák: " + item.calories + "<br>";
                    output += "Zsír: " + item.fat_total_g + " g<br>";
                    output += "Telített zsír: " + item.fat_saturated_g + " g<br>";
                    output += "Fehérje: " + item.protein_g + " g<br>";
                    output += "Szénhidrát: " + item.carbohydrates_total_g + " g<br>";
                    output += "Cukor: " + item.sugar_g + " g<br>";
                    output += "Rost: " + item.fiber_g + " g<br>";
                    $('#kaloriaEredmeny').html(output);
                } else {
                    $('#kaloriaEredmeny').text("Nincs találat");
                }
            },
        });
    });
});

