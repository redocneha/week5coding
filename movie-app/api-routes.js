let router = require('express').Router();
let MoviesController = require('./moviesController')

router.get('/',(req,res)=>{
    res.json({
        status:'API is working',
        message:'MoviesApp REST API'
    })
});
router.route('/movies')
    .get(MoviesController.listAll)
    .post(MoviesController.create);
router.route('/movies/:_id')
    .get(MoviesController.findById)
    .delete(MoviesController.delete)
    .put(MoviesController.update)
    
module.exports= router;