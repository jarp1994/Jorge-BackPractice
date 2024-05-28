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


router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.send(posts);
  } catch (error) {;
    res.status(500).send("No se encontraron posts");
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ where: { id } });
    res.send(post);
  } catch (error) {
    res.status(500).send("No se encontro el post");
  }
});

router.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await Post.findOne({ where: { id } });
    post.title = title;
    post.content = content;
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(500).send("No se encontro el post");
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOne({ where: { id } });
    await post.destroy();
    res.send(post, "se elimino el post");
  } catch (error) {
    res.status(500).send("No se encontro el post");
  }
});



module.exports = router;
