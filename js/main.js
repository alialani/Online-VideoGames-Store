$(document).ready(function(){

	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

	var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains: ['otile1','otile2','otile3','otile4']
	});

	var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
		subdomains: ['otile1','otile2','otile3','otile4']
	});

	var mapLayers = {
		"Satellite": satLayer,
		"Map View": drawLayer,
		"Open Street Maps": osm
	};

	var map = L.map('map-container').setView([46.852, -121.760], 13);

	L.control.layers(mapLayers).addTo(map);
	satLayer.addTo(map);

	var rainierMtnMarker = L.marker([46.852, -121.760]).addTo(map);
	rainierMtnMarker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.");
	
	var spaceNeedleMarker = L.marker([47.6205063,-122.3492774]).addTo(map);
	spaceNeedleMarker.bindPopup("<b>Welcome to the Space Needle Tower!</b><br>This tower is 605 feet high.");
	
	var seattleUnvMarker = L.marker([47.6095159,-122.316813]).addTo(map);
	seattleUnvMarker.bindPopup("<b>Welcome to Seattle University!</b><br>This is my school, yay!!");

});