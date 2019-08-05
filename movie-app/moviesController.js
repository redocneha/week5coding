let Movie=require('./moviemodel')
exports.create=function(req,res){
    console.log("came inside create method of movie controller class");
    let movie=new Movie();
    console.log(req.body.name);
   movie.name= req.body.name;
   movie._id=req.body._id;
   movie.review= req.body.review;
   movie.actor= req.body.actor;
   movie.actress= req.body.actress;
   movie.duration= req.body.duration
   console.log(movie.name);
   movie.save(function(err){
       res.json({
           status:'Success',
        data:movie})
   })
    
};
exports.listAll=function(req,res){
    
        Movie.find(function (err, movies) {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }
            else{
            res.json({
                
                data:movies
              }  )};
        });
    };
   
    exports.findById= function (req, res) {
        console.log(req.params._id);
        Movie.findById(req.params._id, function (err, contact) {
            if (err)
                res.send(err);
            res.json({
                message: 'Movies details loading..',
                data: contact
            });
        });
    };
exports.update = function (req, res) {

    Movie.findById(req.params._id, function
    (err, movie) {
    
    if (err)
    
    res.send(err);
    
    movie.name = req.body.name ? req.body.name
    
    : movie.name;
    movie.review = req.body.review ? req.body.review
    
    : movie.review;
    
    // save the contact and check for errors
    
    movie.save(function (err) {
    
    if (err)
    
    res.json(err);
    
    res.json({
    
    message: 'Contact Info updated',
    
    data: movie
    
    });
    
    });
    
    });
    
    };
    
exports.delete = function (req, res) {
    Movie.remove({
        _id: req.params._id
    }, function (err, movie) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Movie deleted'
        });
    });
};