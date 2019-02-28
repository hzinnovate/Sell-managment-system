function data(){
  var  mobiles = {
        samsung : {
            Data1 : {
                brand: "samsung",
                name : "Samsung Galaxy s4",
                screen : "5.0 inch",
                camera : "13 mp",
                ram : "2GB",
                rom : "16/32/64 GB storage, microSD card slot",
                battry : "2600 MAH",
            },
            Data2: {
                brand: "samsung",
                name : "Samsung Galaxy s5",
                screen : "5.1 inch",
                camera : "14 mp",
                ram : "2GB",
                rom : "16/32 GB storage, microSD card slot",
                battry : "2800 MAH",
            },
            Data3: {
                brand: "samsung",
                name : "Samsung Galaxy s6",
                screen : "5.1 inch",
                camera : "16 mp",
                ram : "3GB",
                rom : "32/64/128 GB storage, microSD card slot",
                battry : "2550 MAH",
            },
            Data4:{
                brand: "samsung",
                name : "Samsung Galaxy s7",
                screen : "5.1 inch",
                camera : "16 mp",
                ram : "4GB",
                rom : "32/64 GB storage, microSD card slot",
                battry : "3000 MAH",
            },
            Data5: {
                brand: "samsung",
                name : "Samsung Galaxy s8",
                screen : "5.8 inch",
                camera : "12 mp",
                ram : "4GB",
                rom : "64 GB storage, microSD card slot",
                battry : "3000 MAH",
            },
        },
        Iphone: {
            Data6:{
                brand: "Iphone",
                name : "Iphone 4s",
                screen : "3.5 inch",
                camera : "",
                ram : "512 MB",
                rom : "8/16/32/64GB storage, no card slot",
                battry : "1432 mAh",
            },
            Data7:{
                brand: "Iphone",
                name : "Iphone 5s",
                screen : "4.0 inch",
                camera : "",
                ram : "1 GB",
                rom : "16/32/64 GB storage, no card slot",
                battry : "1560 mAh",
            },
            Data8:{
                brand: "Iphone",
                name : "Iphone 6s",
                screen : "3.5 inch",
                camera : "",
                ram : "512 MB",
                rom : "8/16/32/64GB storage, no card slot",
                battry : "1432 mAh",
            },
            Data9:{
                brand: "Iphone",
                name : "Iphone 7s",
                screen : "3.5 inch",
                camera : "",
                ram : "512 MB",
                rom : "8/16/32/64GB storage, no card slot",
                battry : "1432 mAh",
            },
            Data10:{
                brand: "Iphone",
                name : "Iphone 8s",
                screen : "3.5 inch",
                camera : "",
                ram : "512 MB",
                rom : "8/16/32/64GB storage, no card slot",
                battry : "1432 mAh",
            },
        }
    }
    var prodect = []
    for(var key in mobiles){
        for(var key2 in mobiles[key]){
            prodect.push(mobiles[key][key2])
        }
    }
    // console.log(prodect)
    localStorage.setItem("prodect", JSON.stringify(prodect));
   var sales = [];
    localStorage.setItem("sales", JSON.stringify(sales));
}