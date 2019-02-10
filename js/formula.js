function clickFunction() {
  var source = (document.getElementById('source').value);
  var dest = (document.getElementById('destination').value);

  if (source.length != 0 && dest.length != 0) {
    var apiQuerry = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = proxyurl + apiQuerry + source + '&destinations=' + dest + '&key=AIzaSyA5A-5qiyE0LJgG7_Ns5U2jZ422hvX4sGg';
    
    var dist;
    $.getJSON(url, function (data) {
      if (data.rows.length == 1) {
        dist = (data.rows[0].elements[0].distance.text);
      }
      console.log(dist);
    });
  }else {
    console.log("error");
  }
}

function addCars() {
  var myobject = {
      ValueA : 'Text A',
      ValueB : 'Text B',
      ValueC : 'Text C',
      ValueD : 'Text D',
      ValueE : 'Text E',
      ValueF : 'Text F'
  };
  var select = document.getElementById("carType");
  for(index in myobject) {
      select.options[select.options.length] = new Option(index, myobject[index]);
  }
}
