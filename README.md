# Crud_nodeES6_Prisma
Petite API nodejs en Es6 avec Prisma et l'infrastructure Express

- Os :
Linux pop!_OS 21.04 

## Service utilsés :
- Babel (Compilateur)
- Jest avec Frisby (module de test)
- Prisma (ORM)
- Swagger (documentation automatique)

## Installation :
### 1. Installer mySQL ou mariadb
### 2. Env.
Aprés avoir pull le projet configurer le .env à la base du projet,
mariadb ou Mysql, initialisation identique.

De la forme :
````
mysql://USER:PASSWORD@HOST:PORT/DATABASE
````
Exemple :
.env
````
DATABASE_URL="mysql://root:randompassword@localhost:3306/mydb"
````

Pour plus d'info voir le site web :
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-mysql

### 3. Installation des dépendances 
````
npm install
````

### Les différents scrypt de démmarage
````
"scripts": {
    "start": "npm run prod",
    "server": "node ./dist-server/bin/www",
    "watch:dev": "nodemon",
    
    "transpile": "babel ./server --out-dir dist-server",
    "build": "npm-run-all clean transpile",
    "clean": "rimraf dist-server",

    "dev": "NODE_ENV=development npm-run-all build server",
    "prod": "NODE_ENV=production npm-run-all build server",

    "test": "jest",
  
    "start-gendoc": "node ./dist-server/swagger.js"
  },
 ````

