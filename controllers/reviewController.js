const router = require('express').Router();
const User = require('../db').import('../models/user');
const Review = require('../db').import('../models/review');

router.get('/review/:employerId', function (req, res) {
    
    Review.findAll({
        where: { employerId: req.params.employerId }
    })
        .then(employer => res.status(200).json(employer))
        .catch(err => resstatus(500).json({ error: err }))
  });
  
  const validateSession = require('../middleware/validate-session');

  ///create review//

  router.post('/', validateSession, (req, res) => {
    console.log("I'm here!");
    const reviewEntry = {
            title: req.body.title,
            entry: req.body.entry,
            owner: req.body.owner
            

    }
    Review.create(reviewEntry)
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({ error: err }))
        
});

module.exports = router;