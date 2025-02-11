const express = require('express')
const eventController = require('../controllers/event_controller')
const participantController = require('../controllers/participant_controller')
const isLoggedIn = require('../middleware/isLoggedIn')
const router = express.Router()
const multer = require('multer')
const upload = multer({dest: './uploads/'})

router.get('/', eventController.index)
router.get('/list', eventController.list)
router.get('/new', isLoggedIn, eventController.new)
//router.get('/myindex', isLoggedIn, eventController.myindex)
router.post('/new', isLoggedIn, upload.single('myFile'), eventController.create)

router.post('/cat', eventController.search)
router.get('/:id', eventController.show)

router.use(isLoggedIn)
router.get('/:id/edit', eventController.edit)
router.put('/:id/edit', eventController.put)
router.get('/:id/delete', eventController.delete)
router.get('/:id/join', participantController.join)
router.get('/:id/cancel', participantController.cancel)

module.exports = router
