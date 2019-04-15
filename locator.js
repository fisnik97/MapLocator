
var data = [];

(function getData(){
    data = [
        {
            "TS" : "51000200",
            Position : {
                lat :42.637692,
                lng: 21.143390
            }
        },
        {
            "TS" : "33000200",
            Position : {
                lat : 42.742812,
                lng: 21.330540
            }
        },
        {
            "TS" : "10001200",
            Position : {
                lat : 42.311008,
                lng: 20.1558826
            }
        },
        {
            "TS" : "10001200",
            Position : {
                lat : 42.441008,
                lng: 20.638826
            }
        },
        {
            "TS" : "10001200",
            Position : {
                lat : 42.671008,
                lng: 20.118826
            }
        },
        {
            "TS" : "10001200",
            Position : {
                lat : 42.1121008,
                lng: 21.848826
            }
        }
    ]
})();

function initMap() {
  var initLoc = {lat: 42.637692, lng: 21.143390};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: initLoc});

  var img = {
    url:'xMarker.png',
    size: new google.maps.Size(30,  50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,32),
    scaledSize: new google.maps.Size(30, 30),
    labelOrigin : new google.maps.Point(10,-10)
  }

  for(v in data){
      let tsObj = data[v];
      console.log(tsObj.Position)
      let marker = new google.maps.Marker({
           position: tsObj.Position,
           map : map,
           label : {
               text:tsObj.TS,
               color:'Red',
               fontSize:"20px",
               fontWeight:"bold"
           },
           animation: google.maps.Animation.DROP,
           icon: img,
           draggable:true
        });
      marker.addListener('click', showData);
  }   

  function showData(data){
        console.log(data);
  }   
}