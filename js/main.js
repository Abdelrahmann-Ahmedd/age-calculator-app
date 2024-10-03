let day = document.getElementById("d");
let month = document.getElementById("m");
let year = document.getElementById("y");

let daysText = document.querySelector(".days");
let monthsText = document.querySelector(".months");
let yearsText = document.querySelector(".years");

let btn = document.querySelector("button"); 


function calcAge() {
    const today = new Date();
    let years = today.getFullYear() - Number(year.value);
    let months = (today.getMonth()) - Number(month.value);
    let days = (today.getDate()) - Number(day.value);

    if (days < 0) {
        months -= 1;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }
    
    daysText.innerHTML = days;
    monthsText.innerHTML = months;
    yearsText.innerHTML = years;
}

function validationEmty(element) {
    if(element.value == "") {
        showError(element,"This field is required");
        return false
    } else {
        hideError(element);
        return true
    }
}

function checkDay() {
    if (Number(day.value) > 30 || Number(day.value) <= 0 ) {
        showError(day,"Input valid Day");
        return false;
    } else {
        hideError(day);
        return true;
    }
}

function checkMonth() {
    if(Number(month.value) > 12 || Number(month.value) <= 0 ) {
        showError(month,"Input valid Month");
        return false
    } else {
        hideError(month);
        return true;
    }
}

function checkYear() {
    let da = new Date()
    if(Number(year.value) > da.getFullYear() || Number(year.value) <= 0 ) {
        showError(year,"Input valid Year");
        return false;
    } else {
        hideError(year);
        return true;
    }
}

function showError(ele,message) {
    ele.previousElementSibling.style.color = "red"
    ele.nextElementSibling.innerHTML = message;
}

function hideError(ele) {
    ele.nextElementSibling.innerHTML = "";
    ele.nextElementSibling.style.color = "red"
    ele.previousElementSibling.style.color = "black"
}

btn.addEventListener("click", function() {
    let one = validationEmty(day);
    let two = validationEmty(month);
    let three = validationEmty(year);
    if (one&& two && three) {
        let four = checkDay();
        let five = checkMonth();
        let six = checkYear();
        if (four && five && six ) {
            calcAge();
        }
    }
});