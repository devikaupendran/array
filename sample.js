/*
    innerText 
        used to to manipulate or read text content only, without affecting any HTML structure or risking unintended changes to the page.

        var element = document.getElementById('example');
        element.innerText = 'This is new text content.';
*/

/*
    innerHTML
        Use innerHTML when you need to insert or modify HTML elements inside another element, such as adding new elements, changing existing ones, or dynamically generating HTML content based on data.

        var element = document.getElementById('example');
        element.innerHTML = '<strong>This is <em> new </em> HTML content.</strong>';      
*/

//access a html element and write using js

    let num1 = 10;
    let num2 = 30;
    let result = num1 + num2 ;
    console.log(result);

    let heading = document.querySelector(".heading-class");
    console.log(heading);

    heading.innerText = "The sum of 2 numbers are : " +result;

