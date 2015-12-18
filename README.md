# ng-presentation

An introductory talk about [AngularJS](https://angularjs.org/), originally given at
[a Meetup](http://www.meetup.com/es/Gran-Canaria-JavaScript-Community/events/227434180/?eventId=227434180)
at the [School of Computer Engineering](http://www.eii.ulpgc.es/) in Gran Canaria, Spain, on December 18, 2015.
The slides and the demo application are available both in English and Spanish.

This presentation has been created with [reveal.js](http://lab.hakim.se/reveal-js/).

### Installation

If you want to run the demo application locally, make sure to set the DB parameters in demo/endpoint/index.php to fit
your MySQL installation. You'll also need a "songs" table with the following structure:

    CREATE TABLE songs(
	    id INT PRIMARY KEY AUTO_INCREMENT,
        author VARCHAR(255),
        title VARCHAR(255)
    );
