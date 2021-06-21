function initMap() {
    const target = { lat: 49.26469349328672, lng: -123.17712968209983 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        restriction: {
            latLngBounds: {
                north: 49.3544,
                south: 49.1309,
                west: -123.2955,
                east: -122.9551
            }
        },
        center: target
    });
    const marker = new google.maps.Marker({
        position: target,
        map: map,
    });
}

