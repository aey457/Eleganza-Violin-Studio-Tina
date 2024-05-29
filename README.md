# Eleganza Violin Studio- Tina
To run the website, you could:
A. Database setup
1. Download XAMPP (apachefriends.org) from https://www.apachefriends.org/zh_tw/download.html
2. Start the MySQL Database server
3. import db_violin 0520.sql from databse folder to your database

B. Front-end folder: eleganza-next, to run the development server:
1. npm i 
2. npm run dev

C. Back-end folder: express-base-esm-main, to run the development server:
1. npm i
2. npm run dev
3. add an .env under the express-base-esm-main, and set up the connection with the databse using db_violin 0520.sql:
    PORT=3005
    NODE_ENV=development
    DB_HOST=127.0.0.1
    DB_PORT=3306 (vary according to your local server port)
    DB_DATABASE= your database name using db_violin 0520.sql
    DB_USERNAME= your username
    DB_PASSWORD= your password
    ACCESS_TOKEN_SECRET= your access token
Be sure to connect to the databse and table successfully, so that the content of website can be shown.