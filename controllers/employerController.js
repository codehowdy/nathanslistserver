const router = require('express').Router();
const employer = require('../db').import('../models/employer');


//Get all employers

router.get("/", (req, res) => {
    employer.findAll()
    .then(employer => res.status(200).json(questions))
    .catch(err => res.status(500).json({ error: err}))
});

//const validateSession = require('../middleware/validate-session');


//employer create

router.post('/post', (req, res) => {
    

    const employerEntry = {
        title: req.body.title,
        category: req.body.category,
        entry: req.body.entry,
        owner: req.body.owner,
        //userId: req.user.id,
    }
    employer.create(employerEntry)
        .then(employer => res.status(200).json(employer))
        .catch(err => res.status(500).json({ error: err }))
});

///edit employer

router.put("/:id", function (req, res) {

    console.log(req.user); 

    const query = { where: { id: req.params.id, owner: req.user.id } };
    console.log('query---->', query);

    const updateEntry = {
        title: req.body.employer.title,
        category: req.body.employer.category,
        entry: req.body.employer.entry,
    };
    
    

    employer.update(updateemployerEntry, query)
        .then(employers => res.status(200).json({message: 'Employer sucessfully edited'}))
        .catch((err) => res.status(500).json({ error: err }));
});

///delete employer

router.delete("/delete/:id", function (req, res) {
    
    const query = { where: { id: req.params.id} };

    employer.destroy(query)
        .then(() => res.status(200).json({ message: "Employer Entry Removed" }))
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;