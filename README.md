# GeolocatorCa

## Description
GeolocatorCa is a responsive web application that allows users to save and delete geolocations in two different ways:

1. **Manual Selection on Map:**
   - Users can add a location by manually selecting a point on the map.
   - Clicking the "Add Location" button will save the location if the coordinates are valid.

2. **Text Input:**
   - Users can also add locations by specifying coordinates in the text input.
   - Clicking the "Add Location" button will save and display the location on the map if the coordinates are correct.

3. **Delete Marker:**
   - Users can delete each of the previously added locations by clicking on the corresponding marker on the map. A popup will appear with the option to delete the location.


## Technologies Used
- React for the frontend.
- Node.js and Express for the backend.
- MongoDB for data storage.
- Leaflet for interactive maps.
- Bootstrap for responsive design.


## Setting Up MongoDB Database

Before running the GeolocatorCa application, make sure to set up a MongoDB database. Follow these steps:

1. **Install MongoDB:**
   - If you haven't installed MongoDB, download and install it from the official [MongoDB website](https://www.mongodb.com/try/download/community).

2. **Run MongoDB Server:**
   - Open a terminal and run the MongoDB server by executing the following command:
     ```
     mongod
     ```
   - This will start the MongoDB server on the default port 27017.
   - Additional steps may be required, in Windows you need to enter the following path "C:\Program Files\MongoDB\Server\7.0\bin" then execute mongod

3. **Update Connection String Server Code if is neccesary:**
   - In the GeolocatorCa server code (e.g., `server.js`), update the MongoDB connection string to use the 'Challenge' database:
     ```javascript
     mongoose.connect('mongodb://localhost:27017/Challenge', {
     });
     ```
     Once mongo is running, the server will automatically create the collection and database 

Now, your MongoDB database is set up and ready to be used by the GeolocatorCa application. You can proceed with running the backend and frontend as described in the setup instructions.


## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install` in both the frontend and backend directories.
3. Start the server using `npm run start` in the backend directory.
4. Start the client using `npm run start` in the frontend directory.
5. Open your web browser and navigate to `http://localhost:3000`.
