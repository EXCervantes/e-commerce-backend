# E-Commerce Back End

## Table of Contents

- [E-Commerce Back End](#e-commerce-back-end)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Technologies and Packages Used](#technologies-and-packages-used)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Video Demonstrating Application In Use](#video-demonstrating-application-in-use)
    - [Screenshots of the Application](#screenshots-of-the-application)
  - [Credits](#credits)
  - [License](#license)

## Description

This project is an application an E-commerce back end as a REST API. It uses packages such as "PostgreSQL Node client" and "Dotenv" through Express.js using Sequelize to handle database interaction. The Node language manager uses those packages to perform CRUD actions such as to create, update, get, and delete the categories, products, and tags of the E-commerce database.

Creating this application helped practice more on utilizing Sequelize to manage the database in a more quicker way. There were some challenges encountered in this project such so figuring out how to update and post products following a set criteria.

## Technologies and Packages Used

- [Node.js](https://nodejs.org/en)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL Node client](https://www.npmjs.com/package/pg)
- [Dotenv](https://www.npmjs.com/package/dotenv)
  
## Installation

First to use this application head to the [Employee Tracker](https://github.com/EXCervantes/employee-tracker) and clone the repository. To learn how to clone a repository checkout this guide [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

You must have `node` installed on your system. Go [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) for instructions on how to do so. In addition to properly run this application natively you must have [PostgreSQL](https://www.postgresql.org/) installed on your system. Follow instructions on the website for details on how to get that application running.

This application utilizes a package that requires a file named `.env` to be created on the user's native system in the root directory of the cloned repo. The following lines must exist in this file:

```md
DB_NAME='ecommerce_db'
DB_USER='postgres'
DB_PASSWORD='user's password created during PostgreSQL install'
```

Finally to initialize this application run `node index.js` or `npm start` in the Terminal.
  
## Usage
  
To run the application open the Terminal or GitBash in VSCode and run `node index.js`.

### Video Demonstrating Application In Use

Here is a [link]() to a video demonstrating how this application works.

### Screenshots of the Application

![Screenshot 1](assets/images/employeetrackerscreen1.jpg)
![Screenshot 2](assets/images/employeetrackerscreen2.jpg)
![Screenshot 3](assets/images/employeetrackerscreen3.jpg)

## Credits

Referenced for examples of include with attributes in Sequelize.

"_node.js - How to use an include with attributes with sequelize? - Stack Overflow_". (2018, April 25). Stack Overflow. Retrieved June 26, 2024, from https://stackoverflow.com/questions/21883484/how-to-use-an-include-with-attributes-with-sequelize
  
## License

This project is licensed under [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Please see the [License](https://opensource.org/licenses/MIT) page for more info.

