function clickFunction() {
  var source = (document.getElementById('source').value);
  var dest = (document.getElementById('destination').value);
  var car  = (document.getElementById('carType').value);
  var carMap = new Map();

  var apiQuerry = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  var url = proxyurl + apiQuerry + source + '&destinations=' + dest + '&key=AIzaSyA5A-5qiyE0LJgG7_Ns5U2jZ422hvX4sGg';
  var dist;
  $.getJSON(url, function (data) {
    if (data.rows.length > 1 || data.rows.elements.status == "NOT_FOUND") {
      console.log("error");
    }
    else {
      dist = console.log(data.rows[0].elements[0].distance.text);
    }
  });

}