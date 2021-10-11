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
### 1. Installer un service de base de données :
- Ici j'ai utiliser un service SQL .
- Voir la configuration du ` .env` .

### 2. .Env :
Aprés avoir pull le projet configurer le .env à la base du projet,
mariadb ou Mysql, `initialisation identique.`

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
Prisma :
- https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-mysql

### 3. Installation des dépendances :
````
npm install
````

### Les scrypts de démarage :
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
- Démarrer le server avec la compilation automatique de babel
````
npm run watch:dev
````
- Actualiser la documentation 
````
npm run start-gendoc
````
Pour plus d'information sur la documentation Swagger :
- Swagger-autogen : https://github.com/davibaltar/swagger-autogen
- Swagger : https://swagger.io/docs/

Demarrer les tests Jest :
````
npm run test
````
Pour plus d'information sur Jest et Frisby :
- Jest : https://jestjs.io/docs/getting-started
- Frisby : https://github.com/vlucas/frisby

### Points de terminaison implémentés :

#### /api/user
Chemin | Méthode | Description
---|---|---
/api/user/post | POST | Ajoute un user
/api/user/get | POST | Selectionne un user
/api/user/list | GET | Liste tout les users
/api/user/put | PUT | Mise à jour d'un user
/api/user/delete | DELETE | Supprime un user

Merci de votre intérêt


