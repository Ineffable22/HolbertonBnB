<div align="center">
<h1>HolbertonBnB (AirBnB Clone)</h1>
</div>

# Description
This repository contains a complete Full Stack web application. The stack is HTML5/CSS3/JavaScript(jQuery) on the front-end, Python(Flask)/Gunicorn on the back-end, and MySQL on the database.

<img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/concepts/74/hbnb_step5.png" alt="Web infrastructure design"/>

This Project at Holberton School is divided into four projects developed in two months. And this project is created to include all the features created in the previous project, but with the difference that the code is optimized, the code is more documented and the deployment is more complete.

Below I leave links with the four versions.

1. [AirBnB_Clone](https://github.com/Ineffable22/AirBnB_clone)
2. [AirBnB_Clone_v2](https://github.com/Ineffable22/AirBnB_clone_v2)
3. [AirBnB_Clone_v3](https://github.com/Ineffable22/AirBnB_clone_v3)
4. [AirBnB_Clone_v4](https://github.com/Ineffable22/AirBnB_clone_v4)

The builds of the AirBnB_Clone versions are separate and isolated code bases. While the first one was started from scratch, each of versions 2, 3, and 4 involved inheriting and building on top of repositories started by previous cohorts at Holberton School. Additionally, the work completed for each version involved collaboration and pair programming with a cohort partner. In other words, I worked with a different cohort partner for each version. This not only helps in personal improvement in Soft Skills and Hard Skills, but in showing that you can adapt in various environments both with different partners and also with advanced code and that you can correct it if necessary.

I consider this repository as one that stands out because I make use of multiple technologies.

I started this repository as a duplicate of AirBnB_clone_v4, the final version was worked on within the scope of the Holberton syllabus. Since then, I have:

- Remove all irrelevant code and organize only what is necessary to implement the application.
- I put together each of the front-end, back-end and APIs strictly with my code, copying the personal implementations of each one that I worked on in the four versions.
- Fixed the front-end and wrote new self-deploying Puppet and Fabric scripts.
- Wrote detailed and organized documentation for all parts of the repository and API routes.


## Environment variables

- `HBNB_ENV`: running environment. It can be “dev” or “test” for the moment (“production” with fabric)
- `HBNB_MYSQL_USER`: the username of your MySQL
- `HBNB_MYSQL_PWD`: the password of your MySQL
- `HBNB_MYSQL_HOST`: the hostname of your MySQL
- `HBNB_MYSQL_DB`: the database name of your MySQL
- `HBNB_TYPE_STORAGE`: the type of storage used. It can be “file” (using FileStorage) or db (using DBStorage)
- `HBNB_API_HOST`: the API host or 0.0.0.0 by default
- `HBNB_API_PORT`: the API port or 5000 by default
- `HBNB_WEB_HOST`: The WEB host or 0.0.0.0 by default
- `HBNB_WEB_PORT`: the API port or 5001 by default

# Requirements and dependencies 
```Python
sudo apt-get install libmysqlclient-dev
pip install -r requirements.txt
```
To use test fixtures use mysql directory with data dummy

## Usage
Activate API Client
```Python
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m api.v1.app
```
Activate Web Server
```Python
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.hbnb
```

## Author:
<div align="center">
<a href="https://www.linkedin.com/in/miguel-enrique-grillo-orellana/">
<img src="https://img.shields.io/badge/Miguel-Linkedind-blue"></a>


<a href="https://medium.com/@Miguel_Grillo"><img src="https://miro.medium.com/max/1200/0*jTIO9a1_5T3mv-pR.png" alt="Link Medium" width="100px" height= "50px"></a>
</div>

## License :lock:
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
