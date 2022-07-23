const Router = require('express');
const router = new Router();
const controllers = require('./controllers');

router.get("/user", controllers.getUsers);
router.get("/", (req, res) => {
    res.render('index', {user_id: 2})
})
router.get("/user/:username", controllers.getUser);
router.post('/user', controllers.postUser);
router.post('/stat', controllers.postStat);
router.get('/stat/:id', controllers.getStat);
router.put('/stat', controllers.putStat);
module.exports = router;