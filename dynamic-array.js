/*
    .innerText = add content to html elements

    inbuilt functions used here 
        1. document.querySelector("element name or .class_name");  --> used to access one html element
        2. document.querySelectorAll("element name or .class_name") --> used to access more than one simlar  html element like <li>
        3. document.getElementById("id");  -->used to access an html element by id  

        4. .appendChild();  --> method used to add a new child node to a specified parent node
                               
                            syntax   parentElement.appendChild(newChild);   
        5. document.createElement("") --> to create an html element
*/

    let mobilePhoneList = document.getElementById("luxury-mobile-list"); //also use document.querySelector("#luxury-car-list"); 
    let array_mobile = ["Apple","Samsung","Vivo","Redmi"];
    array_mobile.push("nothing"); //to add element to an array
    console.log(array_mobile);

    for(let mobile_phones of array_mobile)
    {
        let mobiles = document.createElement("li"); //create each <li> and <li> is now inside mobiles 
        mobiles.innerText= mobile_phones;  //add the array elments into <li> 
        mobilePhoneList.appendChild(mobiles);
    }


//luxury car list

    //to access the <ul>tag
    let ulTagList = document.getElementById("luxury-car-list");
    let car_array = ["BMW","Benz","Audi","volvo"];
    console.log(car_array);

    //dynamically addding list
    for(let car_list of car_array)
    {
        let createListForCar = document.createElement("li");
        createListForCar.innerText = car_list;
        ulTagList.appendChild(createListForCar);
    }


//fruit list

    //to access ul tag
    let ulTagFruits = document.querySelector(".fruit-list")
    let fruit_array = ["Appple" , "Orange" ,"banana","grapes"];
    console.log(fruit_array);

    //dynamic adding
    for(let fruitList of fruit_array)
    {
        let createFruitList = document.createElement("li"); //
        createFruitList.innerText = fruitList;      //write the array elements to li tag
        ulTagFruits.appendChild(createFruitList);   //appending list to ul tag
    }
//names

    //create array
    let ulTagPerson = document.querySelector(".person-name-list")
    let person = ["habii","Thakku","Chikku","Devu"];
    console.log(person);

    //dynamically add list
    for(let personList of person)
    {
        let createPersonList = document.createElement("li");
        createPersonList.innerText = personList;
        ulTagPerson.appendChild(createPersonList);
    }