# API_Pokedex

Fully functioning digital Pokedex built using Node.js, Axios API and [the Pokémon API](https://pokeapi.co/). From start to finish, this project took around 2 weeks to complete. 


## Features

* **Database search**: Search for Pokémon by name, ID number or search for one at random. 
* **Image viewer**: View Pokémon from the front and back in both their shiny and base forms. 
* **User friendly interface**: Featuring a sliding data-pad and buttons to easily cycle back and forth through the database. 
* **Power button**: Simply press the power button to “power down” the entire device interface.

See a UI demo [here](https://codepen.io/nootuff/full/LYZVWEz).

## Installation
To build, simply navigate to the repository and use `npm install` to install dependencies, then run with `node app.js`.

## Upcoming features

* **React integration**: To prevent the entire page from reloading each time a GET request is made, I will be integrating React into this project to reload only the data that is passed to the ejs files. 
* **Error page**: The app currently crashes if a user searches for something that is not in the database. To solve this I will be adding an error page that can be displayed when this occurs. 
