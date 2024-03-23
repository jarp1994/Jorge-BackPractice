# Proyecto blog personal

## Paso 1: Clone el repositorio

```bash
git clone https://github.com/jorge-riano/Jorge-Ria-o-blog-mentoring.git
```

## Paso 2: Instalar dependencias

```bash
cd Jorge-Ria-o-blog-mentoring
npm install
```

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

## Paso 7: Crear los modelos de la base de datos
```bash
npx sequelize init
```
