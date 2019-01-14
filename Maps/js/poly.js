var map;
 
 var pasangantitik =[];

 var mode ="off";

 function initMap() {

 	var mapOptions = {
 		center: {lat:3.5979792 , lng: 98.6873892},
 		zoom:15,
 		mapTypeId: "google.maps.MapTypeId.HYBRID"

};

 	map = new google.maps.Map(document.getElementById('map'),mapOptions);

 	map.addListener('click', function(e){

 		if(mode === "off")
 		{
 			alert("Click the Start button operation polygon!")
 		}
 		else{
 			pasangantitik.push(e.latLng);
 		}
 	});

 }

 function aturMode()
 {
 	if(document.getElementById('btn').innerHTML=="Start"){
 		mode = "on";

 		document.getElementById('btn').innerHTML == "Stop";
 		pasangantitik.length=0;
 	}
 	else
 	{
 		mode="off";
 		document.getElementById('btn').innerHTML == "Start";

         var area = new google.maps.Polygon({
         	paths:pasangantitik,
         	strokeColor: '#FFC107',
          //strokeOpacity: 0.8,
          strokeWeight: 5,
          fillColor: '#FFC107',
          fillOpacity: 0.35
         });

         area.setMap('map');

         pasangantitik.length=0;

 	}
 }
