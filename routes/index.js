const {Router} = require('express');
const router = Router();
const Post  = require('../models/Post');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//rutas

router.post('/posts', (req, res) => {
  try {
   const {title,content} = req.body;
   
   if(!title || !content){
    return res.status(400).send({error: 'Todos los campos son obligatorios'})
   }
   const post = Post.create({title,content});
   res.send("se creo el post");
  } catch (error) {
    console.log("no se creo el post");
   res.send(error);
   
  }
})


router.get("/posts",  (req, res) => {
  try {
    const posts = Post.findAll();
    res.send(posts);
  } catch (error) {;
    res.status(500).send("No se encontraron posts");
  }
});




module.exports = router;
