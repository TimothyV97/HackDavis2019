var request = new XMLHttpRequest();
var sourceAdd;
var destinationAdd;

function clickFunction(){
    sourceAdd = document.getElementById('source').value;
    destinationAdd = document.getElementById('destination').value;
}

var apiQuerry = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';

request.open('GET', apiQuerry + sourceAdd + '&destinations='+ destinationAdd + '&key=AIzaSyA5A-5qiyE0LJgG7_Ns5U2jZ422hvX4sGg', true);
request.onload = function () {
    var data = JSON.parse(this.response);
    
}
