# Merchandising Society Club Website
## Roles and Group Members  
>- Project Manager: David J. Cha (david.j.cha@stonybrook.edu)
>- Lead Programmer: Daekyung Kim (daekyung.kim@stonybrook.edu)
>- Product Owner: MSC (msc.sunykr@gmail.com)
>- Designer: Haseung Lee (haseung.lee@stonybrook.edu)

## Purpose
>The Merchandising Society Club wishes to create an online platform for their business. 
  	
## The Problem  
The Merchandising Society Club (MSC) makes Fashion Institute of Technology (FIT) and Stony Brook University merchandise. Their goal is to not only produce merchandise for students and faculties but also to showcase and sell their products that are crafted after extensive research on fashion trends and sales planning. Thus, to display their products for sale, MSC runs its own physical Retail Revolution Store at FIT, and they are currently in need of expanding their collection online. Particularly during the COVID 19 crisis, customers cannot regularly access the offline retail store. Thus, having an online means of accessing MSC is a massive benefit for them. 

## The Solution  
Our solution is to create a flexible website for MSC that will allow them to manage and maintain an online platform that has several different sections which include an MSC about page, mailing subscriptions, an MSC product collection for showcasing merchandise, and a virtual showroom to replicate their physical Retail Revolution Store online.

## Current Version <br> 
> #### 1.00 Beta Release 12/03/2020   <br>
#### Admin Login ID/PW: admin@&#65279;test&#46;com / admin 
Deployed complete design with all API calls; some parts (mostly inquiry forms) are still yet to be discussed with the project owner.
User side and Admin sides are mostly interactive, in terms of managing the data. Collections with real data, mobile view of the web application, loading gifs by sections that require loading time, admin login, admin data analysis, admin collections data management are complete.
*Gmail's strict security policy has stopped SMTP, therefore this part needs to be discussed with the project owner (possibly creating another domain email account).
Thus, purchase inquiry, general inquiry, and email subscription are not stable at the moment. <br>
###### Edit: [12/5/2020] General inquiry seems to be party stable (may break after a few more submissions), but the other 2 forms are not functional yet.

> #### 0.03 Beta Release 11/11/2020   <br>
Deployed iterated design with additional API Calls implemented in the front-end.  Searching & filtering feature of collection items, our team members management by admins, inquiry forms are added. 
> #### 0.02 Beta Release 11/3/2020    <br>
Deployed initial design and look of the web application with carousel CRUD in admin feature. Most of the requried APIs from the backend, 360 degree view of a product feature, page animations, scroll, and general responsive design are added.    
> #### 0.01 Beta Release 10/26/2020  <br>
Deployed initial design and look of the web application with zero-features. 

 
## Deployment <br>
>**Front-end deployed on Firebase** <br>
>https://merchandising-society.web.app/ <br> <br>
>**Back-end deployed on Heroku** <br>
>https://sunyk-msc-backend.herokuapp.com/ <br>


## Frameworks and Technologies Used <br>
>React.js <br>
>Django <br>
>Amazon S3 <br>
 
## Installation <br> 
>**Front-end** <br>
>Git clone the repository and go to the "frontend" directory. <br>
>Install packages and run the application by the following commands. <br>
>Open localhost:3000 on Chrome Browser, if it does not automatically load on your machine. <br> 

```
npm install
npm start
```
>Works on both Windows and Mac <br>

>**Back-end** <br>
> Install Django 3 - https://www.djangoproject.com/ <br> 
> Install Python 3 that fits with your os - https://www.python.org/downloads/ <br> 
> Install Heroku CLI - https://devcenter.heroku.com/articles/heroku-cli <br>
> Start a virtual environment - https://docs.python.org/3/tutorial/venv.html <br> 
> ~~Go to the "backend/sunyk-msc-backend" directory.~~ Clone the following directory - https://github.com/Habced/sunyk-msc-backend <br>
> Run the following only once on initial setup. <br>
```
// While the virtual environment is running
python get-pip.py
pip install -r requirements.txt
```
> Run the following after making changes to the code. <br>
```
python manage.py makemgirations
python manage.py migrate
python manage.py runserver
```


## Instructions for Deployment <br>
>**Front-end** <br>
>Change directory to "frontend". <br>
>Initialize Firebase setups. <br>
>Run build and deploy. <br>
```
npm run build
firebase deploy
```
>**Back-end** <br>
>~~Change directory to "backend/sunyk-msc-backend".~~ Go to the directory where you cloned https://github.com/Habced/sunyk-msc-backend <br>
```
pip freeze > requirements.txt
git add .
git commit -m 'with a message'
git push heroku master
```
>*DO NOT RUN 'python manage.py makemigrations' and 'python manage.py migrate' on heroku bash! 'makemigrations' and 'migrate' should only be done locally.

## Envrionment and Settings
>This project has been tested on running Chrome 86.0.4240.111 (Official Build) (64-bit) on various devices, including mobile devices. <br> 
>This project is also extensively built for Chrome Browser. Other browsers may behave diffrently in stylings. <br> 
>This project should work on Windows and Mac. The backend portion will also work on linux machines.

## Bug Report
* List of known bugs so far is shown in the bottom of this document - https://docs.google.com/document/d/1F2VT2uxXTtgqkSdHsZDD1JYNprkv5WWZQzJMY1aoMUI/edit?usp=sharing
* Contributors can issue a bug from this link - https://github.com/jwcha1030/CS416_GroupProject/issues
* Issues with the API directly can be found as comments here - https://docs.google.com/spreadsheets/d/1b4XPErknaVPMNBPf7zuzlBbYz6Cvb3ZSYmrM4xtOyqc/edit?pli=1#gid=0
