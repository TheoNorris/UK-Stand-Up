document.getElementById("socials").style.visibility = "hidden";

/*Function sending API information from Happi.dev to HTML*/
function artistInformationHTML(id_artist) {
document.getElementById("socials").style.visibility = "visible";

  var socialLinks = {
    "facebook": id_artist.result.facebook,
    "instagram": id_artist.result.instagram,
    "twitter": id_artist.result.twitter,
    "youtube": id_artist.result.youtube,
  }
console.log(socialLinks)

  for(const prop in socialLinks) {

    var socialNames = ["facebook", "instagram", "twitter", "youtube"];

    for (i = 0; i < socialNames.length; i++) {
    
        if (socialLinks[prop] != "") {
     
        $(".social-media-container").html(`<a id="${socialNames[i]}" class="social-links" href="https://www.${socialNames[i]}.com/${socialLinks[prop]}" target="_blank"><i class="fab fa-${socialNames[i]}-square"></i></a>`);
        console.log(socialLinks[prop])
        }
    }
}
        
    

  return (
    $("#artist-name").html(id_artist.result.artist),
    $("#artist-social").html(id_artist.result.artist + "´s Socials"),
    $("#artist-image-div").css({
      background: `url(${id_artist.result.cover}) no-repeat center center`,
      zoom: "130%",
      "min-height": "600px",
    }),
    $("#mobile-artist-image-div").css({
      background: `url(${id_artist.result.cover}) no-repeat center center`,
      zoom: "90%",
      "min-height": "300px",
    })
    
  );
}

/*Function sending description from last.fm to artist bio*/
function artistDescriptionHTML(artist) {
  return (
    $("#artist-description-p").html(artist.artist.bio.summary),
    $("#artist-description-p")
      .children()
      .css("color", "#3f83ff")
      .attr("target", "_blank")
  );
}

//JQuery ensuring link in artist description is opened in seperate tab
$("p#artist-description-p").children().attr("target", "_blank");

document.getElementById("album-images-container").style.visibility = "hidden";
//A function retrieving album cover through a for loop and placing in the html with a nested loop
function artistAlbumHTML(id_artist) {
  document.getElementById("album-images-container").style.visibility = "visible";
  var artistAlbums = id_artist.result.albums;
  var i = 0;
  for (i = 0; i < artistAlbums.length && i < 5; i++) {
    var artistCoverString = artistAlbums[i].cover;
    var albumLinks = artistAlbums[i].album.split();
    var artistCovers = artistCoverString.split(" ");

    var individualAlbumArt;
    var j = 0;
    var h = 0;
    for (
      j = 0, h = 0;
      j < artistCovers.length, h < albumLinks.length;
      j++, h++
    ) {
      individualAlbumArt += `<a class="album-links" href="https://open.spotify.com/search/${id_artist.result.artist} ${albumLinks[h]}" target="_blank"><img class="album-img" src="${artistCovers[j]}" class="album-img"></a>`;

      var albumArtToImg = individualAlbumArt.replace("undefined", "");

       document.getElementById("album-images").innerHTML = albumArtToImg;
    }

   
  }
}

//function collecting artist from selector for the api's

function getArtist() {
  var artistBio = $("#artists-selector option:selected").val(),
    artistValue = $("#artists-selector option:selected").val();

  if (artistValue === "AJ Tracey") {
    artistValue = "23599";
  } else if (artistValue === "Dream Mclean") {
    artistValue = "116406";
  } else if (artistValue === "Kojey Radical") {
    artistValue = "23636";
  } else if (artistValue === "Klashnekoff") {
    artistValue = "106201";
  } else if (artistValue === "Bonkaz") {
    artistValue = "226544";
  } else {
    return;
  }

  //API retrieval and appointment
  $.when(
    $.getJSON(
      `https://api.happi.dev/v1/music/artists/${artistValue}?apikey=014a1a2mKrOybg41LnU3DQB8IJhBQS29KaeVLZdEB6UI5DUHzx3qlyls`
    ),
    $.getJSON(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistBio}&api_key=7a411bfbda49acb6aded07e273945b01&format=json`
    ),
    $.getJSON(
      `https://api.happi.dev/v1/music/artists/${artistValue}/albums?apikey=014a1a2mKrOybg41LnU3DQB8IJhBQS29KaeVLZdEB6UI5DUHzx3qlyls`
    )
  ).then(
    function (firstResponse, secondResponse, thirdResponse) {
      var artistMeta = firstResponse[0];
      var artistDescription = secondResponse[0];
      var artistAlbum = thirdResponse[0];

      $("").html(artistInformationHTML(artistMeta));
      $("").html(artistDescriptionHTML(artistDescription));
      $("").html(artistAlbumHTML(artistAlbum));
    },

    //error responses
    function (errorResponse) {
      if (errorResponse.status === 404) {
        $("#artist-information").html(
          `<h2>No image found for ${artistValue}</h2>`
        );
      } else {
        console.log(errorResponse);
        $("#artist-information").html(
          `<h2>Error: ${errorResponse.responseJSON.message}</h2>`
        );
      }
    }
  );
}
