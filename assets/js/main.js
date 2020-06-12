function artistInformationHTML(id_artist) {

return $("#artist-name").html(id_artist.result.artist),
$("#artist-image-div").css({"background": `url(${id_artist.result.cover}) no-repeat center center`, "zoom": "130%", "min-height": "600px"}),
$("#mobile-artist-image-div").css({"background": `url(${id_artist.result.cover}) no-repeat center center`, "zoom": "90%", "min-height": "300px"}),
$("#facebook").attr("href", "https://www.facebook.com/" + id_artist.result.facebook),
$("#instagram").attr("href", "https://www.instagram.com/" + id_artist.result.instagram),
$("#spotify").attr("href", "https://open.spotify.com/search/" + id_artist.result.artist), 
$("#twitter").attr("href", "https://www.twitter.com/" + id_artist.result.twitter),
$("#youtube").attr("href", "https://open.youtube.com/search/" + id_artist.result.youtube); 
}



function artistDescriptionHTML(artist){

return $("#artist-description-p").html(artist.artist.bio.summary),

$("#artist-description-p").children().css("color", "#3f83ff").attr("target", "_blank");

}

$("p#artist-description-p").children().attr("target", "_blank");

function artistAlbumHTML(id_artist){

artistAlbums = id_artist.result.albums;

for (i = 0; i < artistAlbums.length && i < 5; i++) {

var artistCoverString = artistAlbums[i].cover;
var albumLinks = artistAlbums[i].album.split()
var artistCovers = artistCoverString.split(" ");

var individualAlbumArt;

for (j = 0, h = 0; j < artistCovers.length, h < albumLinks.length; j++, h++) {


individualAlbumArt += `<a class="album-links" href="https://open.spotify.com/search/${id_artist.result.artist} ${albumLinks[h]}" target="_blank"><img class="album-img" src="${artistCovers[j]}" class="album-img"></a>`;


var albumArtToImg = individualAlbumArt.replace("undefined", "");}

document.getElementById("album-images").innerHTML = albumArtToImg; {
    if (true) {
        $('#album-images').wrap('<div class="album-images-container"></div>');
    }
}
};
};

function getArtist() {

var artistBio = $("#artists option:selected").val(),
    artistValue = $("#artists option:selected").val(); 

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

$.when(
  $.getJSON(`https://api.happi.dev/v1/music/artists/${artistValue}?apikey=014a1a2mKrOybg41LnU3DQB8IJhBQS29KaeVLZdEB6UI5DUHzx3qlyls`),
  $.getJSON(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistBio}&api_key=7a411bfbda49acb6aded07e273945b01&format=json`),
  $.getJSON(`https://api.happi.dev/v1/music/artists/${artistValue}/albums?apikey=014a1a2mKrOybg41LnU3DQB8IJhBQS29KaeVLZdEB6UI5DUHzx3qlyls`)
).then(
  function (firstResponse, secondResponse, thirdResponse) {
    var artistMeta = firstResponse[0];
    var artistDescription = secondResponse[0];
    var artistAlbum = thirdResponse[0]

    $("").html(artistInformationHTML(artistMeta));
    $("").html(artistDescriptionHTML(artistDescription));
    $("").html(artistAlbumHTML(artistAlbum));
  },
  function (errorResponse) {
    if (errorResponse.status === 404) {
      $("#artist-information").html(`<h2>No image found for ${artistValue}</h2>`);
    } else {
      console.log(errorResponse);
      $("#artist-information").html(
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
    }
  });
}


