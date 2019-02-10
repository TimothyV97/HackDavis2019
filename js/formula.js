function clickFunction() {
  var source = getsource();
  var dest = (document.getElementById('destination').value);
  var carMileage = (document.getElementById('carType').value);


  if (source.length != 0 && dest.length != 0) {
    var apiQuerry = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = proxyurl + apiQuerry + source + '&destinations=' + dest + '&key=AIzaSyA5A-5qiyE0LJgG7_Ns5U2jZ422hvX4sGg';
    var dist;

    $.ajax({
      url: url,
      type: 'GET',
      async: false,
      success: function (data) {
        if (data.rows.length == 1) {
          dist = parseFloat(data.rows[0].elements[0].distance.text.replace(/,/g, ''));
        }
        //console.log(dist)
        console.log(data);
        console.log(carMileage);
        console.log(dist);

        //Alters placeholder div to contain result
        //Calculates to
        var res = (dist * carMileage / 1000).toFixed(2);
        if (res != "NaN") {
          (document.getElementById("result")).innerHTML = res;
        }
        else {
          alert("Please Select Your Car Model!");
        }
      }
    });
  } else {
    alert("Please enter a source and a destination!");
  }
}

function addCars() {
  var config = {
    apiKey: "AIzaSyCO31FM4nMGgRrF8oNlLdMwG9EGoL1Qqyw",
    authDomain: "hackdavis2019-1549747004882.firebaseapp.com",
    databaseURL: "https://hackdavis2019-1549747004882.firebaseio.com",
    projectId: "hackdavis2019-1549747004882",
    storageBucket: "hackdavis2019-1549747004882.appspot.com",
    messagingSenderId: "690575260659"
  };
  firebase.initializeApp(config);
  var rootRef = firebase.database().ref();
  rootRef.on('child_added', function (snapshot) {
    var newPost = snapshot.val();
    var select = document.getElementById("carType");
    for (p in newPost) {
      select.options[select.options.length] = new Option(p, newPost[p]);
    }
  });
}

function useMyLocation() {
  if (document.getElementById("myLocation").checked == true) {
    document.getElementById("sourceDest").innerHTML = "<p></p>";
    //$("#sourceDest").remove();
  }
  else {
    document.getElementById("sourceDest").innerHTML = "<div class=\"col-12 col-md-9 mb-2 mb-md-0\"\><input type=\"text\" name = \"source\" id = \"source\" class=\"form-control form-control-lg\" placeholder=\"Enter your source...\"\></div>";
  }
}

function directionsFunc() {
  var dest = (document.getElementById('destination').value);
  var source = getsource();

  console.log(dest);
  console.log(source);
  document.getElementById("newMap").innerHTML = "<div><iframe width=600px height=390px frameborder=\"0\" style=\"border:0\"  scrolling=\"auto\" src = \"https://www.google.com/maps/embed/v1/directions?key=AIzaSyA5A-5qiyE0LJgG7_Ns5U2jZ422hvX4sGg&origin=" + source + "&destination=" + dest + "&mode=transit\" allowfullscreen > </iframe ></div> ";
}

function getsource() {
  if (document.getElementById("myLocation").checked == true) {
    var locationUrl = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyA5A-5qiyE0LJgG7_Ns5U2jZ422hvX4sGg"
    $.ajax({
      url: locationUrl,
      type: 'POST',
      async: false,
      success: function (data) {
        var lat = data.location.lat;
        var lng = data.location.lng;
        currentLocation = lat + ', ' + lng;
      }
    });
    return currentLocation;
  }
  else {
    return (document.getElementById('source').value);
  }
}
