
function artistInformationHTML(id_artist) {

var instagram = id_artist.result.instagram; 

 console.log(instagram);
    

return $("#artist-name").html(id_artist.result.artist),
$("#artist-image").attr("src", id_artist.result.cover),
$("#facebook").attr("href", "https://www.facebook.com/" + id_artist.result.facebook),
$("#instagram").attr("href", "https://www.instagram.com/" + id_artist.result.instagram),
$("#spotify").attr("href", "https://open.spotify.com/search/" + id_artist.result.artist); 
}




function artistDescriptionHTML(artist){

return $("#artist-description-p").html(artist.artist.bio.summary);

}

function artistAlbumHTML(id_artist){

artistAlbums = id_artist.result.albums;

for (i = 0; i < artistAlbums.length && i < 5; i++) {

var artistCoverString = artistAlbums[i].cover;
var artistCovers = artistCoverString.split(" ");

var individualAlbumArt;

for (j = 0; j < artistCovers.length; j++) {

$(".album-img").attr("src", artistCovers[j]);

individualAlbumArt += '<img class="album-img" src="' + artistCovers[j] + '" class="album-img">';

var albumArtToImg = individualAlbumArt.replace("undefined", "");}

document.getElementById("album-images").innerHTML = albumArtToImg;
};
};

function getArtist() {

var artistBio = $("#artists option:selected").val(),
    artistValue = $("#artists option:selected").val(); 
 
if (artistValue === "Kano") {
 artistValue = "64731";
} else if (artistValue === "Wretch 32") {
  artistValue = "25889"; 
} else if (artistValue === "Kojey Radical") {
  artistValue = "23636";
} else if (artistValue === "Klashnekoff") {
  artistValue = "106201"; 
} else if (artistValue === "Coops") {
 return artistValue = "152363"; 
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

