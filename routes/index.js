var express = require('express');
var router = express.Router();
import getAllPosts from '../controllers/getAllPosts';
import getIdPosts from '../controllers/getIdPosts';
import postAllPosts from '../controllers/postAllPosts';
import putIdPosts from '../controllers/putIdPosts';
import deleteIdPosts from '../controllers/deleteIdPosts';
import patchIdPosts from '../controllers/patchIdPosts';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/posts", getAllPosts);

router.get('/posts/:id', getIdPosts )

router.post('/posts', postAllPosts)

router.put('/posts/:id', putIdPosts)

router.delete('/posts/:id', deleteIdPosts)

router.patch('/posts/:id', patchIdPosts)

module.exports = router;
