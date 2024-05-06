# My Project for PZ #

This project was made specially for PZ. 
Hope you like my simple web application example.

The front end I decided to use what I know best which is React with Typescript. For the back end I chose NodeJS - This was actually my first time ever setting up & using a NodeJS backend, so I had to look up documentation along the way, but it was a very fun experience!

Summary:
This is a very basic and timeboxed web application build. You can calculate the price of your cheese by using the input field below each of the cheeses. By having a value in this field, it will automatically update your Shopping List at the top of the page. You can view the list and see the totals there as well. There is only one of my endpoints actually properly implemented and that is just the basic /cheeses one that returns the list of cheeses, I didn't implement the rest of them in this simple version of the project.

Requirements:
- Node
- Docker Desktop (optional)


How to run the Backend:
1. while in the root, cd to `backend` and run `npm i`
2. open up Docker Desktop on your computer, then in the `backend` dir of this project run `docker-compose up --build` to make the server environment to run in docker desktop (if you do not have docker, to run the backend you can also just do it through node in the terminal as long as you have it installed by running `node server.js`)


How to run the Front End:
1. while in the root, cd to `pz-cheeseria` and run `npm i`
2. duplicate the `.env.example` file and create your own `.env` file
3. then while in the same directory run `npm run dev` to run the dev environment in localhost

(Stock images used in this example are from Unsplash under the Unsplash Licence https://unsplash.com/license)
