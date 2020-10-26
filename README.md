# Merchandising Society Club Website
**Purpose**
>The Merchandising Society Club wishes to create an online platform for their business. 
  	
**Roles and Group Members**  

>- Project Manager: David J. Cha (david.j.cha@stonybrook.edu)
>- Lead Programmer: Daekyung Kim (daekyung.kim@stonybrook.edu)
>- Product Owner: MSC (msc.sunykr@gmail.com)
>- Designer: Haseung Lee (haseung.lee@stonybrook.edu)

**The Problem**  
The Merchandising Society Club (MSC) makes Fashion Institute of Technology (FIT) and Stony Brook University merchandise. Their goal is to not only produce merchandise for students and faculties but also to showcase and sell their products that are crafted after extensive research on fashion trends and sales planning. Thus, to display their products for sale, MSC runs its own physical Retail Revolution Store at FIT, and they are currently in need of expanding their collection online. Particularly during the COVID 19 crisis, customers cannot regularly access the offline retail store. Thus, having an online means of accessing MSC is a massive benefit for them. 

**The Solution**  
Our solution is to create a flexible website for MSC that will allow them to manage and maintain an online platform that has several different sections which include an MSC about page, mailing subscriptions, an MSC product collection for showcasing merchandise, and a virtual showroom to replicate their physical Retail Revolution Store online.

**Current Version**  
> 0.01 Beta Release 10/26/2020 - Deployed initial design and look of the web application with zero-features. 

**Deployment** <br>
>**Front-end deployed on Firebase** <br>
>https://merchandising-society.web.app/ <br> <br>
>**Back-end deployed on Heroku** <br>
>https://sunyk-msc-backend.herokuapp.com/ <br>


**Framework Used** <br>
>React.js <br>
>Django <br>
>Amazon S3 <br>
 
**Installation** <br> 
>**Front-end** <br>
>Git clone the repository and go to the "frontend" directory. <br>
>Install packages and run the application by the following commands. <br>
>Open localhost:3000 on Chrome Browser, if it does not automatically load on your machine. <br> 

```
npm install
npm start
```
>**Back-end** <br>
> Install Django 3 - https://www.djangoproject.com/ <br> 
> Install Python 3 - https://www.python.org/downloads/ <br> 
> Start a virtual environment - https://docs.python.org/3/tutorial/venv.html <br> 
> Go to the "backend" directory. <br>
> Run the following only once on initial setup. <br>
```
python get-pip.py
pip install
```
> Run the following after making changes to the code. <br>
```
python manage.py makemgirations
python manage.py migrate
python manage.py runserver
```


**Instructions for Deployment** <br>
>**Front-end** <br>
>Change directory to "frontend". <br>
>Initialize Firebase setups. <br>
>Run build and deploy. <br>
```
npm run build
firebase deploy
```
>**Back-end** <br>
>Change directory to "backend". <br>
```
pip freeze > requirements.txt
git add .
git commit -m 'with a message'
git push heroku master
```
>*DO NOT RUN 'python manage.py makemigrations' and 'python manage.py migrate' on heroku bash! 'makemigrations' and 'migrate' should only be done locally.

**Envrionment and Settings**
>This project has been tested on running Chrome 86.0.4240.111 (Official Build) (64-bit) on various devices, including mobile devices. <br> 
>This project is also extensively built for Chrome Browser. Other browsers may behave diffrently in stylings. <br> 
