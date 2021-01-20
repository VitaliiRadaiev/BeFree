{
	// let homeMap = document.querySelector('.home-map');
	// if(homeMap) {
	// 	let height = document.querySelector('.promo-header__bg-bottom').clientHeight;
	// 	homeMap.style.marginTop = -height - 5 + 'px';
	// }

	var isMap = document.getElementById("map");
	if(isMap) {
		var map;

		var center = {
			lat: 55.754374,
			lng: 37.617068,
		}

		var markerPosition = {
			lat: 55.754374,
			lng: 37.617068,
		}

		// Функция initMap которая отрисует карту на странице
		function initMap() {

			// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
			map = new google.maps.Map(document.getElementById('map'), {
				// При создании объекта карты необходимо указать его свойства
				// center - определяем точку на которой карта будет центрироваться
				center: {lat: center.lat, lng: center.lng},
				// zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.

				zoom: 14,

				// Добавляем свои стили для отображения карты
				styles: [
					{
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#f5f5f5"
						}
					  ]
					},
					{
					  "elementType": "labels.icon",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#616161"
						}
					  ]
					},
					{
					  "elementType": "labels.text.stroke",
					  "stylers": [
						{
						  "color": "#f5f5f5"
						}
					  ]
					},
					{
					  "featureType": "administrative.land_parcel",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#bdbdbd"
						}
					  ]
					},
					{
					  "featureType": "administrative.locality",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#bdbdbd"
						}
					  ]
					},
					{
					  "featureType": "administrative.neighborhood",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#919191"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#eeeeee"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#e5e5e5"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					},
					{
					  "featureType": "road",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#ffffff"
						}
					  ]
					},
					{
					  "featureType": "road.arterial",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#c6fbf7"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#616161"
						}
					  ]
					},
					{
					  "featureType": "road.local",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					},
					{
					  "featureType": "transit.line",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#e5e5e5"
						}
					  ]
					},
					{
					  "featureType": "transit.station",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#eeeeee"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#c9c9c9"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#c6fbf7"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry.stroke",
					  "stylers": [
						{
						  "color": "#c6fbf7"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					}
				  ]
			});

			// Создаем маркер на карте
			var marker = new google.maps.Marker({

				// Определяем позицию маркера
			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
			    map: map,

			    // Пишем название маркера - появится если навести на него курсор и немного подождать
			    title: '',
			    label: '',

			     icon: 'img/icons/mainLoacal.svg',
			});

		}
	}
}