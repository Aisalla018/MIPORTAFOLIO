document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView([-0.067818, -78.356906], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 14,
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    var circle = L.circle([-0.067818, -78.356906], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 2000
    }).addTo(map);

    var marker = L.marker([-0.067818, -78.356906], {
        icon: L.icon({
            iconUrl: "https://img.icons8.com/fluency/48/marker.png",
            iconSize: [30, 40]
        })
    }).addTo(map).bindPopup("<h3>Guayllabamba</h3>").openPopup();

    circle.on("mouseover", function () {
        map.setView(circle.getLatLng(), 15);
    });

    circle.on("mouseout", function () {
        map.setView(circle.getLatLng(), 13);
    });
});