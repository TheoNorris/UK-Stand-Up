![UK STAND UP](/readme-documents/uk-stand-up-head.png)

UK STAND UP is a project celebrating UK rap artists. Through API technologies you will be able to view different artists biographies, social links, 
view a small discography with links to the artists music and see the social media the artist has. There will also be a main image of the artist.
The website is a one page site but this will completely change depending on the artist due to the information received from the API's.

 ## UX

 This website will be created for enthusiasts of UK rap. The site users will be supporters of individual artists, the genre as a whole,
 and even possible other music fans interested in expanding their knowledge of music. The website will be a simple, stylish website. It will be easy to navigate
 through, showcasing some of the U.K's best rappers.

 * As a user I can see what the main focus of the website is.
 * As a user I can read a brief history of UK rap.
 * As a user I will be able to search different artists.
 * As a user I can read a biography on each artist.
 * As a user I can see a photo of the artist.
 * As a user I can see a small discography of the artist with spotify links to the artists music.
 * As a user I can navigate myself to any social media the artist has.
 
My wireframes were made using [Balsamic Wireframes](https://balsamiq.com/?gclid=CjwKCAjw_qb3BRAVEiwAvwq6VoxJmpo6YvKPm4Qr_cVEjXzA8ve5qDOPE7VZbqIWtsFXiAf3okxfpxoCWF0QAvD_BwE). You can view them [here](/readme-documents/uk-wireframes.pdf).

## Existing Features

 * A select bar to select your favourite artists
 * A biography of each chosen artist.
 * Thumbnails of the artists discography with links taking you to that particular song or album on spotify using happi and last.fm API's.
 * Social links for each individual artist opening the associated web pages in a new window using happi and last.fm API's.
 * A biography and photo of each chosen artist using happi and last.fm API's.

 ### Features left to implement

* In the future I would like to use an API that also uses back-end development such as Spotify. This way I could also implement some form of music player. 
I could also implement a top tracks playlist for the artists.

* I would also like to implement a larger artists search bar. The Happi API I am using requires an artist ID number instead of name. If I was able to use the spotify API it would be possible to search the artist by name. 
Also if I had more time, I could have added more javascript in order to search the artist's ID numbers. This is something I will implement in the future.

* I would also like to implement a section for tour dates. I looked at two seperate API's for this. I had to apply for keys which I am still waiting for. 
I also looked at the Ticket Master API but the artists were not well known enough to have their tour dates on this API.
 
## technologies used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)

HTML5 is a markup language used for structuring and presenting content on the World Wide Web.

* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.

* [Javascript](https://en.wikipedia.org/wiki/JavaScript)

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.

* [J. Query (3.4.1)](https://jquery.com/download/)

jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.

* [Google Fonts](https://fonts.google.com/)

Google Fonts (previously called Google Web Fonts) is a library of 991 free licensed font families, an interactive web directory for browsing the library, 
and APIs for conveniently using the fonts via CSS[1] and Android.

* [Bootstrap (4.4.1)](https://getbootstrap.com/)

An open source toolkit for developing with HTML, CSS, and JS.

* [Font Awesome (V5.6.3)](https://fontawesome.com/)

A toolkit for icons.

* [API technologies](https://en.wikipedia.org/wiki/Application_programming_interface)

An application programming interface (API) is a computing interface which defines interactions between multiple software intermediaries.

## Testing

* Having written my code for my .html page I have validated it on [The W3C Markup validation service](https://validator.w3.org/). 

I acknowledge that there is a warning for an empty H2 element. This is filled when the API is activated.

* I have validated my css on [Jigsaw](https://jigsaw.w3.org/css-validator/). 

* My Javascript has been tested using [JSHint](https://jshint.com/).

This website was tested across multiple browsers (Chrome, Safari, Firefox and Microsoft edge.) It is also responsive, 
having tested it on chrome developer tools across ipad, various iphones, samsungs etc. I have also tested it on iphone x, iphone 7, macbook and desktop.

### User stories Testing

* As a user I will be able to search different artists.

I have been through each individual artist and checked that there is the correct bio, 
photo, albums and social links and these are responsive on all platforms.

* As a user I can see a small discography of the artist with spotify links to the artists music.

I have checked if each album link goes to the correct album on spotify by clicking upon each link.

* As a user I can navigate myself to any social media the artist has.

I have checked that each social media link goes to the correct artists social media account by clicking on each of the links.
 I acknowledge that the artist Kojey Radical's twitter link is not correct. I believe the API has the incorrect information.

### Problems Encountered

During the project I encountered some small problems,

* The first problem I had was how to put multiple album covers and album links into a div using a for loop.
 I solved this by placing the elements into a variable first, but the next problem was that the new variable output some text stating undefined at the beginning of the variables. 
 I removed this text with another variable then placed the variable into the div.

* Another problem I encountered was while viewing my website on my mobile, the description texts of the artists weren't so clear.
 I hadn't experienced this problem in chrome developer tools. It must be something involving screen resolution so I adjusted the font weight.

* I also witnessed some problems with image scalability when recieving artist images from the API's which I found relatively difficult to adjust. 
I overcame the problem with zoom and media queries.

* On the iphone 5/SE on developer tools I discovered that my texts for one artist was overflowing it's div. 
I adjusted the font sizes in media queries for this sized screen.

## Deployment

This site is hosted by GitHub pages deployed directly from the master branch. To deploy the website you must first go to your repository on 
GitHub pages. You then click on settings, scroll down to GitHub pages. Select 'master branch' in source, then after a couple of minutes your website
will be deployed. You can then follow the link given in the GitHub pages section (https://theonorris.github.io/UK-Stand-Up/)

![GitHub pages example](/readme-documents/github-pages-example.png)

**To run locally you can clone this repository directly into the editor of your choice by firstly,**

* copying the link from clone or download on my GitHub page.

![git copy](/readme-documents/gitclone-example.png)

* then, pasting git clone https://github.com/TheoNorris/UK-Stand-Up.git into your terminal.

![git clone](/readme-documents/gitclone.png)

* To cut ties with this GitHub repository, type `git remote rm origin`into the terminal.

![git remove](/readme-documents/git-remove.png)

## Credits

### content and media

Most of the Rap history was taken from [wikipedia](https://en.wikipedia.org/wiki/British_hip_hop#:~:text=The%20first%20UK%20record%20label,acts%20was%20founded%20in%201986.&text=Music%20of%20Life%20was%20swiftly,through%20in%20his%20vocal%20style.),
besides small parts being written by me. The Photo of London on the main page is by [Pierre Blaché](https://www.instagram.com/pierre9x6/[) taken from [pexels](https://www.pexels.com/).
The artists bio's are taken from the [last.fm API](https://www.last.fm/api/). While the artists photos, album covers, names and social links are taken from the [happi API](https://happi.dev/docs/music).

### Acknowledgements

A thank you to [Cormac](https://github.com/armedcor), my tutor and [Precious](https://github.com/precious-ijege), my mentor for their continual help throughout the project.