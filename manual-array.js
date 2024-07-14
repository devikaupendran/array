//add list manually 

   let cars_array = ["BMW","Benz","Volvo","Audi"]
    console.log(cars_array);
    console.log(cars_array[0]); // access first element

/*
    let list = document.querySelector(".list-item");
    console.log(list); //this just only contain one "li"
*/

//to access all "li"  inside ul tag

    let list = document.querySelectorAll(".list-item");
    console.log(list);

//to add each item in the array to list

    list[0].innerText = cars_array[0];
    list[1].innerText = cars_array[1];
    list[2].innerText = cars_array[2];
    list[3].innerText = cars_array[3];
    



