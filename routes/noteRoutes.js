/************************************************************************************
 * @purpose   : Used to provide routes to web pages.
 * 
 * @file      : noteRoutes.js
 * @overview  : provides routes to web pages.
 * @author    : bekiranabbi@gmail.com
 * @version   : 1.0
 * @since     : 04.03.2019
 * 
 *************************************************************************************/

const express = require('express');
const router = express.Router();
const note = require('../controllers/note.controller');
const middle= require('../authentication/index')
const upload = require ('../middleware/fileUpload')

// Create, get, update color, reminder, archive, pin and  delete notes
router.post('/createNote',middle.auth,  note.createNote);
router.get("/getNotes",middle.auth, note.getNotes);
router.put('/isTrashed',middle.auth, note.isTrashed); 
router.post('/deleteNote',middle.auth, note.deleteNote);
router.put('/updateColor', middle.auth, note.updateColor);
router.put('/reminder',middle.auth,note.reminder);
router.put('/isArchived',middle.auth,note.isArchived);
router.put('/isPinned', middle.auth, note.isPinned);

// Edit notes
router.put('/editTitle', middle.auth, note.editTitle);
router.put('/editDescription', middle.auth, note.editDescription);

// Labels
router.post('/addLabel', middle.auth, note.addLabel);
router.get('/getLabels', middle.auth, note.getLabels);
router.post('/deleteLabel', middle.auth, note.deleteLabel);
router.put('/updateLabel', middle.auth, note.updateLabel);

// Savelabels to note and delete label from notes
router.post('/saveLabelToNote', middle.auth,note.saveLabelToNote);
router.post('/deleteLabelToNote', middle.auth,note.deleteLabelToNote)

// upload image to note
router.put('/uploadImage', middle.auth, upload.single('image'), note.updateImage);

// Collaborator
router.post('/saveCollaborator', middle.auth, note.saveCollaborator);
router.get('/getCollaborator', middle.auth, note.getCollaborator);
router.post('/deleteCollaborator', middle.auth, note.deleteCollaborator);

// router.get('/getCollaboratorDetails', middle.auth, note.getCollaboratorDetails);

// Notifications
router.post('/pushNotification', middle.auth, note.pushNotification);
// router.get('/sendNotification/:userid', note.sendPushNotification),

module.exports = router;