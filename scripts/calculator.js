

import { Datsun, Mahindra, Ford, Maruti, Tata } from "./component/model.js";
 
let  data_obj = [
  // Mahindra
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/3ef1a06dd41a0079ff3e36294677c42b7f24983d.png?1584526260",
    brand: "Mahindra",
    model: "XUV500",
    price: "1666",
    id: "MAH1",
    seats: "7",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/59fca001231ef0e5665ea4e6e6b2eb2dd3d920dd.png?1584525284",
    brand: "Mahindra",
    model: "TUV300",
    price: "1333",
    id: "MAH2",
    seats: "7",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "3.1",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/063143885574b4ba5a1ae9a8b99f27cdeafeb170.JPG?1640076680",
    brand: "Mahindra",
    model: "Marazzo",
    price: "1333",
    id: "MAH3",
    seats: "8",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/063143885574b4ba5a1ae9a8b99f27cdeafeb170.JPG?1640076680",
    brand: "Mahindra",
    model: "KUV 100",
    price: "1166",
    id: "MAH4",
    seats: "7",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.9",
  },
  // Mahindra

  // Tata
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/55cf48c3aca88c14b839a360411dfe0dcc761c5a.jpg?1618911344",
    brand: "TATA",
    model: "Tigor",
    price: "1166",
    id: "TATA1",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/d44ae1d555cfe2dd4b499c3e75f2fcda0504a6de.JPG?1654862797",
    brand: "TATA",
    model: "Nexon",
    price: "1333",
    id: "TATA2",
    seats: "7",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.8",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/19eca74a7982804ba713dd9485861a7543422115.JPG?1638531037",
    brand: "TATA",
    model: "Tiago",
    price: "1166",
    id: "TATA3",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/95f6a817637e5bbc26dfbcb5a1a00808cfdcdeb6.png?1584525151",
    brand: "TATA",
    model: "Hexa",
    price: "1666",
    id: "TATA4",
    seats: "7",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "3.2",
  },
  // TATA

  // Maruti
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/d748d92c90c3b84a32f4115da1e5bd3f3f352937.jpg?1615958311",
    brand: "Maruti",
    model: "Baleno",
    price: "1166",
    id: "MARU1",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "3.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/4f978e418417cef5f069be1c013ee75b34c294ce.png?1613648724",
    brand: "Maruti",
    model: "Swift",
    price: "1166",
    id: "MARU2",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/524fda673d85d7affc94f9c54ddb2ed1219d3a4d.JPG?1638612892",
    brand: "Maruti",
    model: "Dzire(Petrol)",
    price: "1333",
    id: "MARU3",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/67ff26f4a0d5658901058b411ef69896b763d646.jpg?1640674355",
    brand: "Maruti",
    model: "Celerio",
    price: "1166",
    id: "MARU4",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "5.0",
  },
  // Maruti

  //datsun
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/741d5e6e6b4a35cc2623eaf23e251357903995a1.jpg?1628513745",
    brand: "Datsun",
    model: "Redi-GO",
    price: "1166",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.5",
    id: "DATS1",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/4e89a97a585c0f0145a7fbb9fbc8d83bf89c13a4.JPG?1628520075",
    brand: "Ford",
    model: "Aspire",
    price: "1166",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.5",
    id: "FORD1",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/e47541c407f8ee906e9fa81c43c732ada5614617.png?1584526352",
    brand: "Ford",
    model: "Ecosport",
    price: "1333",
    seats: "5",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "2.9",
    id: "FORD2",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/3bf7649c2df0514040ce86c781467daf2082f3b7.JPG?1625921612",
    brand: "Ford",
    model: "Figo",
    price: "1166",
    seats: "5",
    transmission: "Manual",
    fuel: "Petrol",
    rating: "4.5",
    id: "FORD3",
  },
  {
    url: "https://zoomcar-assets.zoomcar.com/photographs/original/9a1223f6808fd914fec05710f2a96f1c83fbb307.png?1584524611",
    brand: "Ford",
    model: "Freestyle",
    price: "1166",
    seats: "5",
    transmission: "Manual",
    fuel: "Diesel",
    rating: "4.5",
    id: "FORD4",
  },
];

//   model_car = localStorage.getItem("model_car");
let slider = document.getElementById("slider_price");
let value = document.getElementById("price_WRT_time");

let brand_type = document.getElementById("brand_model");
let div_model = document.getElementById("model");

brand_type.onchange = () => {   //uuperwala select


  if (brand_type.value == "Datsun") {

    div_model.innerHTML = Datsun();  //inport fetch data

    document.getElementById("Datsun").onchange = () => {  //niche wala select

      // console.log(document.getElementById("Datsun").value);

      data_obj.forEach(ele => {
         if(ele.model == document.getElementById("Datsun").value){
  // console.log(ele.price);


value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value*ele.price;
};

};
});


    };
  } else if (brand_type.value == "Mahindra") {
    div_model.innerHTML = Mahindra();
    document.getElementById("Mahindra").onchange = () => {
      localStorage.setItem("model_car", document.getElementById("Mahindra").value );
      data_obj.forEach(ele => {
         if(ele.model == document.getElementById("Mahindra").value){
  console.log(ele.price);
  value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value*ele.price;
}; }
         });
    };
  } else if (brand_type.value == "Tata") {
    div_model.innerHTML = Tata();
    document.getElementById("Tata").onchange = () => {
      localStorage.setItem("model_car", document.getElementById("Tata").value);
      data_obj.forEach(ele => {
      if(ele.model == document.getElementById("Tata").value){
  console.log(ele.price);
  value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value*ele.price;
};}
      });
    };
  } else if (brand_type.value == "Maruti") {
    div_model.innerHTML = Maruti();
    document.getElementById("Maruti").onchange = () => {
      localStorage.setItem( "model_car", document.getElementById("Maruti").value);
      data_obj.forEach(ele => {
      if(ele.model == document.getElementById("Maruti").value){
  console.log(ele.price);
  value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value*ele.price;
};
      }
      });

    };
  } else if (brand_type.value == "Ford") {
    div_model.innerHTML = Ford();
    document.getElementById("Ford").onchange = () => {
      localStorage.setItem("model_car",document.getElementById("Ford").value);
      data_obj.forEach(ele => {
      if(ele.model == document.getElementById("Ford").value){
  console.log(ele.price);}
  value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value*ele.price;
};
      });
    };
  }

}