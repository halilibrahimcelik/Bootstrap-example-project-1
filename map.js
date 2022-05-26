class Map {
  constructor() {
    this.coordinates = {
      lat: 39.897174,
      lng: 32.771146,
    };
    this.render();
  }

  render() {
    if (!google) {
      alert("Could not load maps library, please try again later");
      return;
    }

    const map = new google.maps.Map(document.getElementById("map"), {
      center: this.coordinates,
      zoom: 6,
    });

    new google.maps.Marker({
      position: this.coordinates,
      map: map,
    });
  }
}

new Map();
