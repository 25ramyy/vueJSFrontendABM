# vueJSFrontendABM
ABM para metodologia de sistemas realizado en vue js


Pasos para levantar el proyecto



![image](https://user-images.githubusercontent.com/81629876/172968835-e6aed28d-35c6-41f5-9111-e33c6375c8be.png)

Debe instalar la ultima version lts de nodeJS en su PC

https://nodejs.org/es/

![image](https://user-images.githubusercontent.com/81629876/172969023-04b4c2ea-0790-4b5d-9213-1c5f52d74953.png)

Necesitará instalar mongoDB localmente

https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/


![image](https://user-images.githubusercontent.com/81629876/172968883-de212de1-166b-4584-90ce-73d6270eb8cd.png)


Tambien necesitará un visualizador de DB para manejar sus conecciones de MongoDB localmente


https://robomongo.org/

Finalmente necesitaremos de Git para pullear estos repositorios
https://git-scm.com/

Una vez tengamos todo configurado, lo que debemos hacer es abrir robo3t y conectarnos a Mongo (por defecto localhost:27017)

![image](https://user-images.githubusercontent.com/81629876/172969177-5ff8078d-c833-4c9c-91c8-a960a4b1588a.png)


Crearemos una db llamada "instrumentosdb"

![image](https://user-images.githubusercontent.com/81629876/172969255-e3c35d86-afa1-45af-9e45-cc21cd2a1659.png)


Y una coleccion llamada "instrumentos" adentro de esa db
![image](https://user-images.githubusercontent.com/81629876/172969316-2576d0f9-3737-47fa-811b-7a0897037524.png)

Una vez realizado, cargaremos nuestra db con informacion, click derecho en la coleccion instrumentos insert document

![image](https://user-images.githubusercontent.com/81629876/172969418-fd8bb4c2-3ef8-446c-a489-c43808254a0a.png)

Insertaremos todo el json llamado "instrumentos.json" que se encuentra en el repositorio de NodeABMBackend

Una vez realizado esto, pullear ambos proyectos, instalar sus packetes y 

Para backend:
npm i
npm start

![image](https://user-images.githubusercontent.com/81629876/172969692-625fa1a4-1765-47b5-8096-28468b4b30b1.png)


Para frontend:
npm i
npm run serve

![image](https://user-images.githubusercontent.com/81629876/172969742-75169efb-f451-4285-9f5d-1ba309eed116.png)


luego de esto podemos ingresar a nuestro navegador a la ruta "localhost:8080" y veremos la web

Recuerde tambien instalar el Access-Control-Allow-Origin en su navegador https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=es para poder visualizar la pagina



