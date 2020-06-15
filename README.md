![UK STAND UP](/assets/readme-documents/UK-STAND-UP-HEAD.png)

This project is a website celebrating UK rap artists. Through API technologies you will be able to view different artists biographies, social links, 
view a small discography with links to the artists music and see the social media the artist has. There will also be a main image of the artist.
The website has only one page but this will completely change depending on the artist due to the information received from the API's.

I am creating this project in order to showcase Josh Leedam's Photography. I will be using HTML and CSS to create a website 
containing five pages. A home page, a page of the photographers work, a thubnail page, a page containing a brief history of the photographer
and a contact page.

 ## UX

 This website will be created to promote Josh Leedam's photography to potential fans, customers and employers.
 The site users will be supporters of his work, enthusiasts of photography/wildlife/nature and customers/employers.
 The website will be a simple, sleek and beautiful website with easy to navigate links, showcasing some of the photographers 
 most stunning work.

 ![Josh Leedam Homepage](/assets/readme-documents/josh-leedam-home.png)

 * As a user I can see what the main focus of the website is.
 * As a user I can navigate myself to any social media the photographer has.
 * As a user I can navigate myself through the additional pages efficiently and effectively.
 * As a user I can view the photograpers work.
 * As a user I can fill out a form registering for newsletters.
 * As a user I can contact the photographer in regards to purchasing work or offering contracts.

My wireframes were made using Balsamic Wireframes. You can view them [here](assets/readme-documents/milestone-project-one-wireframes.pdf).

## Existing Features

 * A navigation bar allowing users to scroll through the various pages.
 * Social links opening the associated web pages in a new window.
 * A photo page featuring a carousel to showcase the photographers work using a bootstrap feature with javascript.
 * A thumbnail page featuring thumbnails that when clicked on exhibit a full-size photo in a seperate tab.
 * A newsletter form to fill out, so the user can receive monthly newsletters.
 * A contact form for the user to fill out to contact the photographer for projects or any type of interest.

 ### Features left to implement

 * A functioning facebook link (The photographer doesn't have facebook.)
 * functioning contact and newsletter form.
 * A page exhibiting work for sale.
 
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

## Testing

Having written my code for each .html page I have validated them on [The W3C Markup validation service](https://validator.w3.org/).
The same applies to my css which I have validated on [Jigsaw](https://jigsaw.w3.org/css-validator/).

1. Navbar
* Going through each of the pages, I clicked on each navigation bar link to ensure all pages worked individually.

2. Social Media links
- I went to the social media links on each of the pages and clicked on them to ensure they opened up in new tabs using 'target="_blank"'.

3. Newsletter form
- On each page  I checked the newsletter form was responsive and each input required text. I then repeated the process with each box until the form was filled.

4. Photopage carousel
- On the photo page I checked if the carousel was responsive in all media sizes by scrolling through it on each media platform.

5. Portfolio thumbnail link
- I navigated to the portfolio page. clicked on the thumbnail page link. ensured the page opened in the same window correctly.

6. Thumbnail page
- Went through each individual thumbnail and clicked on them to ensure they were all opened in their individual tabs.

7. Contact form
- I checked the contact form was responsive and each input required text. I completed this by trying to submit the form without any text. I then repeated the process with each box until the form was filled.

This website was tested across multiple browsers (Chrome, Safari, Firefox and Microsoft edge.) It is also responsive, having
tested it on chrome developer tools across ipad, various iphones, samsungs etc. I have also tested it on iphone x, iphone 7, macbook
and desktop.
On smaller resolution screens I have extracted some features from the contact page. I have taken away the newsletter form and image on mobile devices.
This is in order to keep the page clean, fresh and minimalistic.

## Deployment

This site is hosted by GitHub pages deployed directly from the master branch. To deploy the website you must first go to your repository on 
GitHub pages. You then click on settings, scroll down to GitHub pages. Select 'master branch' in source, then after a couple of minutes your website
will be deployed. You can then follow the link given in the GitHub pages section (https://theonorris.github.io/Josh-Leedam-Photography/)

![GitHub pages example](/assets/readme-documents/github-pages-screenshot.png)

To run locally you can clone this repository directly into the editor of your choice by pasting `git clone https://github.com/TheoNorris/Josh-Leedam-Photography.git` into your terminal.

![git clone](/assets/readme-documents/git-clone.png)

To cut ties with this GitHub repository, type `git remote rm origin`into the terminal.

![git remove](/assets/readme-documents/git-remove.png)

## Credits

### content

All content in the about me section of this site was written by me.

### Media 

All Photos were given to me by [Josh Leedam](https://www.instagram.com/josh_leedam_photos/).

### Acknowledgements

The photo carousel was adapted from [Bootstrap](https://getbootstrap.com/docs/4.0/components/carousel/).

The thumbnails layout was adapted from [w3schools](https://www.w3schools.com/howto/howto_css_thumbnail.asp).

The contact form was adapted from [w3schools](https://www.w3schools.com/howto/howto_css_responsive_form.asp).

The index page background image was set up using [w3schools](https://css-tricks.com/perfect-full-page-background-image/).

A thank you to Cormac, my tutor and Precious, my mentor for their continual help throughout the project.