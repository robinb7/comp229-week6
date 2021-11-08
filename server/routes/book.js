let express = require('express');
let router = express.Router();

let passport = require('passport');

// Connect to book controller
let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ operation. */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page - CREATE operation. */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing the Add page - CREATE operation. */
router.post('/add', requireAuth, bookController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE operation. */
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE operation. */
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET Route to perform Deletion - DELETE operation. */
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;