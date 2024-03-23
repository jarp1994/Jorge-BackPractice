# Proyecto blog personal (Jorge Riaño)

## Paso 1: Clone el repositorio

```bash
git clone https://github.com/jorge-riano/Jorge-Ria-o-blog-mentoring.git
```

## Paso 2: Instalar dependencias

```bash
cd Jorge-Ria-o-blog-mentoring
npm install
```

Cree la base de datos en postgreSQL (nombre de ejemplo: blog_api)

### Luego de instalar las dependencias, copie el cree un archivo .env a partir del archivo .env.example (Asegurese de dar los valores correspondientes a cada una de las variables de entorno)


## Paso 3: Ejecutar el servidor

```bash
npm start
```

## Paso 4: Crear rutas para hacer las peticiones al servidor
ejemplo (Debes agregar la logica correspondiente a cada ruta)

```javascript
route.get('/posts', (req, res) => {
    res.send('Hello World') 
})

route.get('/posts/:id', (req, res) => {
    res.send('Hello World')
})

route.post('/posts', (req, res) => {
    res.send('Hello World')
})

route.put('/posts/:id', (req, res) => {
    res.send('Hello World')
})

route.delete('/posts/:id', (req, res) => {
    res.send('Hello World')
})

route.patch('/posts/:id', (req, res) => {
    res.send('Hello World')
})
```

## Paso 5: Probar el servidor
Ejecuta el programa de tu elección para hacer peticionas al servidor, asegurarte de que el servidor funciona (postman, insomnia, thunder_client, etc).

## Paso 6: Publicar el proyecto para guardar los cambios realizados
```bash
git add .
git commit -m "commit message"
git push
```

Para este proyecto se utilizara como base de datos postgresql en conjunto con el ORM Sequelize

## Comienza el proyecto:

Crea los modelos post y users con los siguientes campos:

user:
  - id: number
  - name: string
  - email: string
  - password: string
  - createdAt: Date (Auto generated)
  - updatedAt: Date (Auto generated)

post:
  - id: number
  - title: string
  - content: string
  - createdAt: Date (Auto generated)
  - updatedAt: Date (Auto generated)


## Crear la lógica de las rutas para hacer las peticiones al servidor

En este paso crearemos la lógica de las rutas para hacer las peticiones al servidor,
de modo que se puedan realizar todas las operaciones CRUD de los datos para ambos modelos.

Cualquier dudas o consultas puedes contactarme al interno

