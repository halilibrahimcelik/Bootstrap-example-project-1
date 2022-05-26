class Map {
  constructor() {
    this.coordinates = {
      lat: 39.897174,
      lng: 32.771146,
    };
    this.mybutton = document.getElementById("back-to-top");

    this.render();
    this.backToTop();
    this.scrollToTop();
    this.clickHandler();
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
  scrollToTop() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    }
  }
  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  clickHandler() {
    this.mybutton.addEventListener("click", this.backToTop);
  }
}

new Map();
