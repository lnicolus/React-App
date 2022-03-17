# Coder Grocery: Final Project for ReactJS course at CoderHouse

## The author and his teachers ✒️
* **Federico Osandón** - *Teacher at CoderHouse* - [federico-osandon] (https://github.com/federico-osandon)
* **Juan Martín Cereceda** - *Tutor at CoderHouse* - [juancereceda] (https://github.com/juancereceda)
* **Lucas Nicolussi** - *Student, Author* - [lnicolus] (https://github.com/lnicolus)

## Warning 🛠️
_None of the image resources used in this project are my own. This site is non-profit and its sole purpose is academic and for showing coding-skills to teachers and potential employers. 
They belong to their authors._

## Quick Overview 👀
You may check out a deploy of the SPA in web here : https://tender-thompson-24ef66.netlify.app/ \
You may check want to check the Firestore database as well here : https://console.firebase.google.com/u/1/project/grocery-ecommerce-c1750/firestore/data/
Be advised! The API-Key of the Firestore database is available to access the database and its visible in config.js, as it will not be visible to anyone without the keys. Access is free, as this project is non-profit.

## Dependencies

#### Development ⌨️
- **React** : v17.0.2
    - It supports a collection of reusable JS code snippets useful to the UI building of components. Its responsibity is rendering the components of the present SPA´s view layers. 
For this project in particular, it not only provided that, but also the component feature has allowed for a more readable, maintainable and reusable code. Just check the sheer quantity
of components and imagine if all of them where on one JS file!

- **React Router Dom** : v6.2.1
    - Allows navigation between components by optimized renderization instead of reloading the full site on navigation by handling URL parameters. 
- **NodeJS**: v16.4.2
    - Provides the development enviroment for constant testing of errors and functionality by simulating a host.
- **Prettier Code Formatter** : v9.3.0
    - It has collaborated inmensely in keeping the code readable for me and for whomever visits this repository. Prettier autoformats the spacing in the code to maximize legibility.

#### Styles
- **Bootstrap** : v5.1.3
    - CSS framework that accelerates development time by providing pre-made, intuitive styles and pre-made HTML structures.
- **React-Bootstrap** : v2.1.0
    - Replaces the vainilla JS in Bootstrap rebuilding each component without uneeded dependencies such as Jquery. It helps considerable to streamline the development times by making the Bootstrap 
compatible and specifically designed for the components of this project. I have used button variants, alerts, button, buttons group, card, among others.

#### Backend
- **Firebase** : v9.6.6
    - It´s a Google plataform for web and mobile app development that gives Backend as a (free) service. In this project it has provided the request of data to renderize according to what is on the
database, allowing me to simply change the values in the back-end to see an inmediate result in the front-end and vice-versa. For example if I buy products the stock will be updated in the database,
if I change the picture of a product, or even add a new one, it will simply appear without the need of hardcoding laboriously.

#### Deployment
- **Netlify**: https://app.netlify.com/
   - For ease of use to teachers, tutors, reviewers, colleague students and testers, I´ve deployed the SPA here by recommendation of my teacher. Since Github requires several configurations to deploy
a project developed in ReactJS and Netlify does not, thus we saved time.

## License

MIT✨

## Briefing of the project
 I´ve developed a simulation of a grocery (E-Commerce) in SPA format where the user can sort through 2 categories of products and check every individual fruit or vegetable to check a description. In that detailed card
its possible to choose how many kilograms the user wishes to buy, giving then the option to keep buying or just head to the cart. The cart has a widget that displays current quantity of Kgs selected and the
total price (kgs*price according to each product). The cart itself details everything about the selected product except the picture, giving also the information on the total of the bill and allowing to delete
individual items or empty the cart entirely. Once confirmed, a buying form is renderized, where the data is validated to avoid errors, if everything checks out, the order is submitted to the backend, which in
turn returns an order ID visible to the user.

## How to run this project

Once you download the code, you must install NodeJS (https://nodejs.org/en/) from console using npm install in the highest folder of the master.
Just access from terminal to the same folder and run "npm start" (without the colons) to begin the development enviroment.

# About ReactJS

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).