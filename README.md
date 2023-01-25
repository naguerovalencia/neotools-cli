
# NeøTools CLI

NeøTools CLI is a NodeJS project bootstrapper designed to help you with your projects. It's a CLI tool that allows you to create a NodeJS base structure with a predefined logic and some useful tools.

    

## Installation

You can install neotools-cli with npm as follows:

```bash
  npm install -g neotools-cli
```
    
## Usage/Examples

You can start a new project with the command:
```
  neotools start
``` 
and it will start creating the structure and adding tools to your new project,
additionally, you will be prompted with a question at the end of the execution asking if you want to add the necesary dependences to the ***package.json*** file, if you choose **yes** you need to execute an ***npm install*** after finished.

You can also generate models, controllers and routes with the command:
```bash
  neotools --generate || neotools --g 
```
For example, if you want to generate a model, you can use the command:
 ```bash
  neotools --generate model || neotools -g m
```
You can generate **controllers** and **routes** in the same way.

Additionally, you can also generate all the elements of a model, controller and route with the command 
 ```bash
  neotools --generate all || neotools -g a
```

Each ***index.js*** file generated inside *./controllers*, *./models* and *./routes* has an *controller*, *model* and *route* **auto exporter**, so you dont have to export it manually for using it!

**The structure of projects created with NeøTools is as follows:**

    .
    ├── routes
    │   ├── index.js
    ├── controllers
    │   ├── index.js
    ├── models
    │   ├── index.js
    ├── utils
    │   ├── neo-logs.js
    │   └── common.functions.js
    ├── app.js
    ├── package.json 
    └── index.js

As an example, if you generate a controller with the command **neotools -g c** and you give it the name of ***user*** when prompted, the new controller will be added automaticaly to the controllers folder as follows:

    .
    ├── controllers
    │   ├── index.js
    └── └── + user.controller.js

**Note**: The same logic applies to new routes and models.  


## Modules


The **'utils'** folder contains the 'neo-logs.js' file, which is a tool to help you with the logs of your project, and the 'common.functions.js' file, which contains common functions that you can use in your project.

You can add the Logs or the Helpers module sepparately, just use the command 'neotools --add' or 'neotools -a' followed by the module name.

    Example: 'neotools --add logs' or 'neotools -a logs'
    Example: 'neotools --add helpers' or 'neotools -a helpers'
    Example: 'neotools --add logs utils' or 'neotools -a logs utils'

The necesary packages and dependences for your project will add automaticaly to your ***package.json*** when prompted to you at the end of the execution of the command ***neotools start***, but you can add it separately with the followig command:
```
    neotools --add dependences || neotools -a dependeces
```

These dependences are:

-   axios
-   body-parser
-   cors
-   express
-   express-fileupload
-   form-data
-   jwt-simple
-   log4js
-   moment
-   mongoose
-   node-cron
-   nodemailer
-   nodemon
-   crypto

After adding it, you will need to execute an
```
  npm install
```
either having used the **neotools start** command or adding them separately with the **neotools --add dependences** command.

## Logs

NeøTools CLI has his own definition of **console.log** (overwritting it) for NodeJS, specifing the line of execution of the log itself, helping the debugging process a little bit further, while giving the chance of removing them precisely when a log ended up in production.

```javascript
  Example:   index.js

  console.log("test");

  console output:
  ---------------
  [index.js:4:9 ⚪️ ] » test

```

There's also a clasification of different logs type with different output colors:

```
console.error("test");    →   [index.js:4:9 🔴 ] »   test
console.success("test");  →   [index.js:4:9 🟢 ] »   test
console.info("test");     →   [index.js:4:9 🔵 ] »   test
console.warn("test");     →   [index.js:4:9 🟡 ] »   test
```




## Authors

- [@naguerovalencia](https://www.github.com/naguerovalencia)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/niav/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ni_coa)


## Appendix

More functionalities are on the way! :)

