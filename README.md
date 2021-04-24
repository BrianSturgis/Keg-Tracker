# Keg Tracker
<p align="center"> Authored by Brian Sturgis</p>
<p align="center">Project started on April 23rd, 2021</p>

## Description
This is an application for a Bar to track their keg inventory.

###  Functions
CREATE
onclick to create a new keg from form {_done_}

READ - Details
onclick toggle details {_done_}
view # of pints left in a keg (full keg ~ 124 pints) {_done_}
have keg say "OOS" when pintsLeft === 0 {stretch} {_done_}

UPDATE
onclick for decrementing quantity(inventory) - (kegs !<= 0) {_done_}
update keg {stretch} {_done_}

DELETE
onclick to delete a keg (inventory) {stretch} {_done_}

### Known Bugs
- none yet 
  

<div align="center">

## Component Diagram

## User Stories
|  # 	|  Stories 	|
|---	|---	|
|  1 	|  A user should be able to Create, Update, Delete, and see list and details of kegs in the tap room. 	|
|  2 	|   Decrease kegQuantity remaining per keg when a pint is purchased. For instance, if a user clicks "Buy", the quantity will decrease by one.	|
|  3 	|   When the quantity of an keg is reduced to 0, the keg should say "Out of Stock". A user should not be able to reduce the quantity of a keg below 0.	|
|  4 	|   When the quantity of an keg is reduced to 0, the user should be prompted with the option to restock the keg.	|
|  5 	|   When there is a keg in the inventory that is extra expensive, the user should see the details of the keg listed in red font, not black.	|
|  6 	|   Kegs should have fields for name, brand, price, alcoholContent.	|
|  7 	|   A user should be able to see how many pints are left in a keg.	|
</div>
<div align="center">

---

## Wireframe


</div>

## Stretch Goals
- Implement more CSS/CSS objects

## Technologies Used
- [VS Code](https://code.visualstudio.com/download)
- Git & GitHub
- ES6 JavaScript
- JSX
- React Framework v17.0
- npm
- node.js
- `create-react-app`
- webpack v5.11.1
- Babel
- ESLint
- node.js v15.8.0
- Bootstrap v5.0.0
- Adobe Photo Shop
- Adobe XD


### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..

Copyright (c) 2020 **Brian Micheal Sturgis**