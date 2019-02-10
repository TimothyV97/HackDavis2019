function clickFunction() {
  var source = (document.getElementById('source').value);
  var dest = (document.getElementById('destination').value);
  var carType = (document.getElementById('carType').value);
  //console.log(carType);
  if (source.length != 0 && dest.length != 0) {
    var apiQuerry = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = proxyurl + apiQuerry + source + '&destinations=' + dest + '&key=AIzaSyA5A-5qiyE0LJgG7_Ns5U2jZ422hvX4sGg';
    
    var dist;
    $.getJSON(url, function (data) {
      if (data.rows.length == 1) {
        dist = parseFloat(data.rows[0].elements[0].distance.text);
      }
      //console.log(data.rows[0].elements[0].distance.text);
      
      console.log(dist * carType);
    });
  }else {
    console.log("error");
  }
}

function addCars() {
  // emissions in g/km
  var myobject = {
      'Peugeot iOn' : 88,
      'Volkswagen Polo' : 99,
      'Vauxhall Ampera' : 102,
      'Smart ForTwo' : 105,
      'Nissan Leaf' : 106,
      'Volkswagen Golf' :108
  };
  var select = document.getElementById("carType");
  for(index in myobject) {
      select.options[select.options.length] = new Option(index, myobject[index]);
  }
}
