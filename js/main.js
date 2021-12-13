// Menu items and checkbox
const menuItems = document.querySelectorAll('.menuitem');
const checkbox = document.querySelector('#mobileicon');

// Add event listeners to menu items
for (const menuItem of menuItems) {
    menuItem.addEventListener('click', () => {
        // If checkbox is checked, uncheck it
        if (checkbox.checked) {
            checkbox.checked = false;
        }
    })
}

/* ----- Billede slider til forsiden ------ */

var root = document.querySelector('.SimpleSlider');
var slides = root.querySelectorAll(':not(:first-child)');
for (i = 0; i < slides.length; i++) {
    slides[i].classList.add('is-hidden');
}
root.addEventListener('transitionend', function() {
    root.insertBefore(root.querySelector(':first-child.is-hidden'),null);
});
setInterval(function() {
    root.querySelector(':first-child').classList.add('is-hidden');
    root.querySelector(':nth-child(2)').classList.remove('is-hidden');
}, 4000)

/* ----- Arrangementer filter ------ */

    function filter(input) {
        var array = [];
        var data = document.getElementsByClassName("data");
        for (let i = 0; i < data.length; i++) {
          array.push(data[i]);  
        }
        
        for (let i = 0; i < array.length; i++) {
          if (input == "alle"){
            array[i].style.display = "block"
          }
          
          else if (array[i].className.includes(input)){
            array[i].style.display = "block"
          }
          else {
            array[i].style.display = "none"
          }
             
        }
        
        }

/* ----- Data tæller ------ */

function myFunction() {
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
}


// Mapbox //
mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhcmFiaXJrIiwiYSI6ImNrd3V3N2xreDBtdnEycm1pMTJtc2ltN2sifQ.FbzTAHd_SqKJHLkeSdPqxg';
            
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/clarabirk/ckwuv3dg17x7f14t5sgtng8q9',
  center: [10.2202, 56.1544],// starting position
  zoom: 7
  });

  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.8805, 56.378353]
      },
      properties: {
        title: 'Østergaard Hovedgaard',
        description: 'Østergårdsvej 5, 8870 Langå'
      }
    },
  { 
  
    type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [10.21162, 56.15075]
      },
      properties: {
        title: 'Turbinehallen Aarhus',
        description: 'Kalkværksvej 12, 8000 Aarhus'
      }
      },
    
      { 
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [9.20017, 55.69727]
        },
        properties: {
          title: 'Vandel Flyvestation',
          description: 'Søndre Ringvej, 71'
        }
        },

        {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.44075, 55.39221]
        },
        properties: {
          title: 'Odense Congress Center',
          description: 'Ørbækvej 350, 5220 Odense'
        }
        },
  
        { 
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [9.53129, 55.71410]
          },
          properties: {
            title: 'Spinderihallerne',
            description: 'Spinderigade 11, 7100 Vejle'
          }
        },

        {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.38933, 55.43875]
        },
        properties: {
          title: 'DOK5000',
          description: 'Havnegade 20, 5000 Odense'
        }
        },
  
        { 
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [11.96906, 55.66254]
          },
          properties: {
            title: 'Ledreborg Slot',
            description: 'Skottehusvej, 4320 Lejre'
          }

        },

        {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [12.14848, 55.76982]
        },
        properties: {
          title: 'CPH Lounge',
          description: 'Gundsølillevej 63, 4000 Roskilde'
        }
        },
  
        { 
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [12.62250, 55.77912]
          },
          properties: {
            title: 'Pladeværkstedet',
            description: 'Refshalevej 167g, 1432 København K'
          }

        },

        {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [12.58696, 55.76707]
        },
        properties: {
          title: 'Pressen',
          description: 'Vester Voldgade 33, 1785 København V'
        }
        },
  
        { 
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [12.65821, 55.72268]
          },
          properties: {
            title: 'Vilhelm Lauritzen Terminal',
            description: 'Vilhelm Lauritzens Alle 1, 2770 Kastrup'
          }
    }]
  };
  // add markers to map
  geojson.features.forEach(function(marker) {
  
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';
  
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
  });


