//create array
let ulTagCars = document.querySelector(".car-name-list");
    let cars_array = ["BMW","Porche","Benz","Volvo","Saab"];
    cars_array.push("Audi");
    //forEach function
        cars_array.forEach(function(carList)
        {
            let listForCars = document.createElement("li"); //list created
            listForCars.innerText = carList; //write array element to list
            ulTagCars.appendChild(listForCars);
        })