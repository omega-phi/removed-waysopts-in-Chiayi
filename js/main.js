$( document ).ready(function() {
	
	var mymap = L.map('mapid').setView([23.4784641, 120.3154893], 11);
	
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		noWrap : true 
	}).addTo(mymap);
	
	iconSize = [15, 15]; // size of the icon
	iconAnchor = [8, 8]; // point of the icon which will correspond to marker's location
	popupAnchor = [0, -9]; // point from which the popup should open relative to the iconAnchor
	
	var green_point = L.icon({
		iconUrl: 'img/green_point.png',
		iconSize: iconSize,
		iconAnchor: iconAnchor,
		popupAnchor: popupAnchor
	});
	var red_point = L.icon({
		iconUrl: 'img/red_point.png',
		iconSize: iconSize,
		iconAnchor: iconAnchor,
		popupAnchor: popupAnchor
	});
	var yellow_point = L.icon({
		iconUrl: 'img/yellow_point.png',
		iconSize: iconSize,
		iconAnchor: iconAnchor,
		popupAnchor: popupAnchor
	});
	var blue_point = L.icon({
		iconUrl: 'img/blue_point.png',
		iconSize: iconSize,
		iconAnchor: iconAnchor,
		popupAnchor: popupAnchor
	});
	
	var x;
	for(x=0 ; x<detected_by_scraper.length ; ++x){
		var display = '名稱: <b>';
		display += detected_by_scraper[x].name;
		display += '</b><br>';
		display += '位置: ';
		display += detected_by_scraper[x].lat;
		display += ' ';
		display += detected_by_scraper[x].lon;
		display += '<br>';
		display += '<a target="_blank" rel="noopener noreferrer" href = "http://maps.google.com/maps?q=&layer=c&cbll=' + detected_by_scraper[x].lat + ',' + detected_by_scraper[x].lon + '">街景連結</a>';
		
		L.marker([detected_by_scraper[x].lat, detected_by_scraper[x].lon], {icon: yellow_point}).addTo(mymap).bindPopup(display);
	}
	
	for(x=0 ; x<confirmed_by_players.length ; ++x){
		var display = '名稱: <b>';
		display += confirmed_by_players[x].name;
		display += '</b><br>';
		display += '位置: ';
		display += confirmed_by_players[x].lat;
		display += ' ';
		display += confirmed_by_players[x].lon;
		display += '<br>';
		display += '<a target="_blank" rel="noopener noreferrer" href = "http://maps.google.com/maps?q=&layer=c&cbll=' + confirmed_by_players[x].lat + ',' + confirmed_by_players[x].lon + '">街景連結</a>';
		
		L.marker([confirmed_by_players[x].lat, confirmed_by_players[x].lon], {icon: red_point}).addTo(mymap).bindPopup(display);
	}
	
});