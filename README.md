
# NeøTools

NeøTools is a NodeJS project bootstrapper designed to help you with your projects. It's a CLI tool that allows you to create a NodeJS base structure with a predefined logic and some useful tools.

    

## Installation

You can install neotools-cli with npm as follows:

```bash
  npm install -g neotools-cli
```
    
## Usage/Examples

 You can start a new project with the command 'neotools start', and it will start creating the structure and adding tools to your new project.
You can also generate models, controllers and routes with the command
  ```bash
  neotools --generate || neotools --g 
```
For example, if you want to generate a model, you can use the command
 ```bash
  neotools --generate model || neotools -g m
```
You can generate **controllers** and **routes** in the same way.

Additionally, you can also generate all the elements of a model, controller and route with the command 
 ```bash
  neotools --generate all || neotools -g a
```

**The structure of projects created with NeøTools is as follows:**

    .
    ├── routes
    │   ├── index.js
    │   └── someRoute.route.js
    ├── controllers
    │   ├── index.js
    │   └── someController.controller.js
    ├── models
    │   ├── index.js
    │   └── someModel.model.js
    ├── utils
    │   ├── neo-logs.js
    │   └── common.functions.js
    ├── app.js
    ├── package.json 
    └── index.js

Where 'someRoute.route.js' is a file that contains the definition of a route, the same as 'someController.controller.js' and 'someModel.model.js'.

The **'utils'** folder contains the 'neo-logs.js' file, which is a tool to help you with the logs of your project, and the 'common.functions.js' file, which contains common functions that you can use in your project.

You can add the Logs or the Utils module sepparately, just use the command 'neotools --add' or 'neotools -a' followed by the module name.

    Example: 'neotools --add logs' or 'neotools -a logs'
    Example: 'neotools --add utils' or 'neotools -a utils'
    Example: 'neotools --add logs utils' or 'neotools -a logs utils'

## Authors

- [@naguerovalencia](https://www.github.com/naguerovalencia)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/niav/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/ni_coa)

