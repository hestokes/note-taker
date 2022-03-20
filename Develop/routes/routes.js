const router = require('express').Router();
const notesdb = require('../db/db.json');


router.get('/api/notes',(req, res) => {

    res.json ( 
        notesdb
    );

});








module.exports = router;