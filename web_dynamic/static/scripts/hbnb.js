window.onload = function () {
  let amenities = {}
  let states = {}
  let cities = {}
  let locations = {}
  const URL = 'http://127.0.0.1:5000/api/v1/'
  // debugger
  $('.amenities input[type="checkbox"]').change(function() {
    if (this.checked) {
      amenities[$(this).data('id')] = ($(this).data('name'));
    } else {
      delete amenities[($(this).data('id'))];
    }
    //$('#h4_amenities').text(Object.values(amenities))
    $('#h4_amenities').text(Object.keys(amenities).map(function(k){return amenities[k]}).join(", "));
  });
 $('.locations li > input[type="checkbox"]').change(function() {
    if (this.checked) {
      states[$(this).data('id')] = ($(this).data('name'));
      locations[$(this).data('id')] = ($(this).data('name'));
    } else {
      delete states[($(this).data('id'))];
      delete locations[($(this).data('id'))];
    }
    $('div.locations > h4').text(Object.keys(states).map(function(k){return states[k]}).join(", "));
 });
  
 $('.locations li > ul > input[type="checkbox"]').change(function() {
    if (this.checked) {
      cities[$(this).data('id')] = ($(this).data('name'));
      locations[$(this).data('id')] = ($(this).data('name'));
    } else {
      delete cities[($(this).data('id'))];
      delete locations[($(this).data('id'))];
    }
    $('div.locations > h4').text(Object.keys(cities).map(function(k){return cities[k]}).join(", "));
  });

  $.get(`${URL}status/`, function (data, status) {
    if (data.status === 'OK'){
      $('#api_status').addClass('available')
      showPlaces()
    }
    else {
      $('#api_status').removeClass('available')
    }
  });

  function showPlaces (amnts={}) {
    $.ajax({
      url: `${URL}places_search/`,
      type: 'POST',
      data: JSON.stringify(amnts),
      dataType: 'json',
      contentType: 'application/json'
    }).done(function (data) {
      data.forEach(place => {
	$('section.places').append(
          '<article>' +
            '<div class="headline">' +
            '<h2>' + place.name + '</h2>' +
            '<div class="price_by_night"> $ ' + place.price_by_night + '</div>' +
            '</div>' +
            '<div class="information">' +
            '<div class="max_guest">' +
            '<div class="guest_icon"></div>' +
            '<p>' + place.max_guest + ' Guest</p>' +
            '</div>' +
            '<div class="number_rooms">' +
            '<div class="bed_icon"></div>' +
            '<p>' + place.number_rooms + ' Room</p>' +
            '</div>' +
            '<div class="number_bathrooms">' +
            '<div class="bath_icon"></div>' +
            '<p>' + place.number_bathrooms + ' Bathroom</p>' +
            '</div>' +
            '</div>' +
            '<div class="user"><b>Owner</b>: John Lennon</div>' +
            '<div class="description">' + place.description + '</div>' +
	    '<div class="reviews">' +
	    '<h2>Reviews</h2><span class="handle-reviews" data-name="' + place.id + '">show</span>' + 
            '<ul id="' + place.id + '">' +
	    '</ul>' +
	    '</div>' +
            '</article>'
	);
      });
    });
  };
  $(document).on('click', '.handle-reviews', function () {
//    debugger
    console.log(this)
    if ($(this).hasClass('used')) {
      $(`#${$(this).data('name')} > li`).remove();
      $(`#${$(this).data('name')} > br`).remove();
      $(this).removeClass("used");
    } else {
      $.get(`${URL}places/${$(this).data('name')}/reviews`, function (data, status) {
	if (status == 'success')
	  data.forEach(review => {
	    $(`#${review.place_id}`).append(
	      `<li class="remove-li">${review.text}</li><br>`)
	  });
      });
      $(this).addClass('used');
    }
  });
  
  $('section button').click(function () {
//    debugger
    const amnts = Object.keys(amenities)
    const sts = Object.keys(states)
    const cts = Object.keys(cities)
    $('.places > article').remove();
    showPlaces({'amenities': amnts, 'states': sts, 'cities': cts});
  });
}
