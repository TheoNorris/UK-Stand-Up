
function artistInformationHTML(id_artist) {
return $("#artist-name").html(id_artist.result.artist),
$("#artist-image").attr("src", id_artist.result.cover),
$("#facebook").attr("href", "https://www.facebook.com/" + id_artist.result.facebook),
$("#instagram").attr("href", "https://www.instagram.com/" + id_artist.result.instagram),
$("#spotify").attr("href", "https://open.spotify.com/search" + "/" + id_artist.result.artist); 
/*$("#instagram").attr(function(){
    if (id_artist.result.instagram === "") {
"https://www.instagram.com/";
} else {
"https://www.instagram.com/" + id_artist.result.instagram };
})*/

}

var artistValue;

console.log(artistValue)

function getArtist(event) {

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
  $.getJSON(`https://api.happi.dev/v1/music/artists/${artistValue}?apikey=014a1a2mKrOybg41LnU3DQB8IJhBQS29KaeVLZdEB6UI5DUHzx3qlyls
`)
).then(
  function (response) {
    var artistMeta = response;

    $("").html(artistInformationHTML(artistMeta));
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