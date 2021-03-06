const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get.getAll);

router.get('/:username', controllers.user.get.getOne);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.put('/:username', controllers.user.put.changeProfilePicture);

router.delete('/:id', controllers.user.delete);

module.exports = router;