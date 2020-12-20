const router = require('express').Router();
const User = require('../db').import('../models/user');
const Review = require('../db').import('../models/review');

router.get('/review/:questionId', function (req, res) {
    
    Reveiw.findAll({
        where: { employerId: req.params.questionId }
    })
        .then(employer => res.status(200).json(employer))
        .catch(err => resstatus(500).json({ error: err }))
  });
  
  const validateSession = require('../middleware/validate-session');

  ///create review//

  router.post('/', validateSession, (req, res) => {
    const reviewEntry = {
            title: req.body.answer.title,
            entry: req.body.answer.entry,
            likes: req.body.answer.likes,
            userId: req.user.id,
            questionId: req.body.answer.questionId

    }
    review.create(reviewEntry)
        .then(review => res.status(200).json(review))
        .catch(err => res.status(500).json({ error: err }))
        
});