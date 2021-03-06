/******************************************************************************
 *  @Purpose        : To create note services that will send the incoming data
 *                  to noteModel and save that data to database and at login
 *                  time fetching correct information from database.
 *  @file           : note.services.js
 *  @author         : Kiran B.E.
 *  @version        : v0.1
 *  @since          : 16-03-2019
 *
 ******************************************************************************/

const noteModel = require("../app/models/node.model");
const collaboratorModel = require("../app/models/node.model");
const NotificationModel = require("../app/models/notification");
const sendPush = require("../sendNotification");
const notifyModel = require("../sendNotification");
const userModel = require("../controllers/user.controller")

/***********************************************************
 * @param : data
 * @param : callback
 ************************************************************/
exports.createNote = (data, callback) => {
    noteModel.addNotes(data, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            console.log("In service", result);
            callback(null, result);
        }
    });
};
/********************************************************************
 *
 * @param : data
 * @param : callback
 ********************************************************************/
exports.getNotes = (data, callback) => {
    noteModel.getNotes(data, (err, result) => {
        if (err) {
            // console.log("service error");
            callback(err);
        } else {
            //    console.log("In service", result);
            callback(null, result);
        }
    });
};

/**************************************************************************
 *
 * @param : paramID
 * @param : paramData
 * @param : callback
 **************************************************************************/
exports.updateColor = (paramID, paramData, callback) => {
    // console.log("in services paramID & param Data -->", paramID, paramData);
    noteModel.updateColor(paramID, paramData, (err, result) => {
        if (err) {
            // console.log("service error");
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

exports.deleteNote = (noteID, callback) => {
    noteModel.deleteNote(noteID, (err, result) => {
        if (err) {
            // console.log("service error");

            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

/**********************************************************************
 *
 * @param : paramID
 * @param : callback
 ***********************************************************************/
exports.isTrashed = (paramID, callback) => {
    // console.log("in services", paramID);

    noteModel.getTrashStatus(paramID, (err, status) => {
        if (err) {
            callback(err);
        } else {
            if (status === true) {
                let data = {
                    status: false
                };
                noteModel.isTrashed(paramID, data, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result);
                    }
                });
            } else if (status === false) {
                let data = {
                    status: true
                };
                noteModel.isTrashed(paramID, data, (err, result) => {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        }
    });
};
/***************************************************************************************
 *
 * @param : paramID
 * @param : paramData
 * @param : callback
 ****************************************************************************************/
exports.isArchived = (paramID, paramData, callback) => {
    // console.log("in services", paramID, paramData);
    noteModel.isArchived(paramID, paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

/***************************************************************************************
 * @param : paramID
 * @param : paramData
 * @param : callback
 *****************************************************************************************/
exports.reminder = (paramID, paramData, callback) => {
    // console.log("in services", paramID, paramData);

    noteModel.reminder(paramID, paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
/*************************************************************************************
 *
 * @param : paramID
 * @param : paramData
 * @param : callback
 *
 **************************************************************************************/
exports.editTitle = (paramID, paramData, callback) => {
    console.log("in services", paramID, paramData);
    noteModel.editTitle(paramID, paramData, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
/***************************************************************************************************
 *
 * @param : paramID
 * @param : paramData
 * @param : callback
 *
 ***************************************************************************************************/
exports.editDescription = (paramID, paramData, callback) => {
    console.log("in services", paramID, paramData);
    noteModel.editDescription(paramID, paramData, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
/******************************************************************************************************
 *
 * @param : paramID
 * @param : paramData
 * @param : callback
 *
 *******************************************************************************************************/
exports.isPinned = (paramID, paramData, callback) => {
    console.log("in services", paramID, paramData);
    noteModel.isPinned(paramID, paramData, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
/******************************************************************************************
 *
 * @param : paramID
 * @param : image
 * @param : callback
 *
 ******************************************************************************************/
exports.updateImage = (paramID, image, callback) => {
    noteModel.updateImage(paramID, image, (err, result) => {
        // console.log("in services result in note image",result);
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            console.log("in image service...");
            return callback(null, result);
        }
    });
};
/**************************************************************************************
 *
 * @param : labelData
 * @param : callback
 ***********************************************************************************************/
exports.addLabel = (labelData, callback) => {
    console.log("in services", labelData);
    noteModel.addLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
/****************************************************************************************
 *
 * @param : labelData
 * @param : callback
 ***************************************************************************************/
exports.getLabels = (labelData, callback) => {
    console.log("in services", labelData);
    noteModel.getLabels(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
/*******************************************************************
 *
 * @param : labelData
 * @param : callback
 **********************************************************************/
exports.deleteLabel = (labelData, callback) => {
    console.log("in services", labelData);
    noteModel.deleteLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};
/******************************************************************************
 *
 * @param : labelData
 * @param : callback
 ****************************************************************************/
exports.updateLabel = (labelData, callback) => {
    console.log("in services", labelData);
    noteModel.updateLabel(labelData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

/**********************************************************************
 *
 * @param : paramData
 * @param : callback
 ***********************************************************************/
exports.saveLabelToNote = (paramData, callback) => {
    if (paramData.pull) {
        noteModel.deleteLabelToNote(paramData, (err, result) => {
            console.log("result @ services", result);

            if (err) {
                callback(err);
            } else {
                return callback(null, result);
            }
        });
    } else {
        console.log("in services", paramData);
        noteModel.saveLabelToNote(paramData, (err, result) => {
            console.log("hhgds==>", paramData);

            if (err) {
                callback(err);
            } else {
                return callback(null, result);
            }
        });
    }
};
/***********************************************************************
 *
 * @param : paramData
 * @param : callback
 ************************************************************************/
exports.deleteLabelToNote = (paramData, callback) => {
    console.log("in services", paramData);
    noteModel.deleteLabelToNote(paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            console.log("result in services ====>", result);
            return callback(null, result);
        }
    });
};

/******************************************************************************
 *
 * @param {*} collabData
 * @param {*} callback
 *
 *******************************************************************************/
exports.saveCollaborator = (collabData, callback) => {
    console.log("service col ==>",collabData);
    
    collaboratorModel.saveCollaborator(collabData, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

/****************************************************************************
 *
 * @param {*} collabData
 * @param {*} callback
 *
 ****************************************************************************/

exports.getCollaborator = (collabData, callBack) => {

    noteModel.getCollaborator(collabData, (err, result) =>{
        if(err) {
            callBack(err)
        } else {
            return callBack(null, result)
        }
    })

}

/****************************************************************************
 *
 * @param {*} paramData
 * @param {*} callback
 *
 ****************************************************************************/
exports.deleteCollaborator = (paramData, callback) => {
    console.log("in services", paramData);
    noteModel.deleteCollaborator(paramData, (err, result) => {
        if (err) {
            callback(err);
        } else {
            console.log("result in services ====>", result);
            return callback(null, result);
        }
    });
};



// exports.getCollabNotesUserId = (userId, callback) => {
//     collaboratorModel.getCollabNotesUserId(userId, (err, result) => {
//         if (err) {
//             console.log("service error");
//             callback(err);
//         } else {
//             callback(null, result);
//         }
//     });
// };
/***************************************************************************************
 *
 * @param {*} callback
 *
 ****************************************************************************************/
// exports.getCollaboratorDetails = callback => {
//     console.log("get collab details::");
//     userModel.getUserDetails((err, result) => {
//         if (err) {
//             console.log("service error");
//             callback(err);
//         } else {
//             callback(null, result);
//         }
//     });
// };

/***********************************************************************************************
 * @description: Push Notification
 * @param : req
 * @param : callback
 **********************************************************************************************/

exports.pushNotification = (req, callback) => {
    NotificationModel.updatePushNotification(req, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            return callback(null, result);
        }
    });
};

/*************************************************************************************************
 * @description:  send push notification
 * @param: user_id
 * @param: callback
 *************************************************************************************************/

exports.sendPushNotification = (user_id, callback) => {
    NotificationModel.sendPushNotification(user_id, (err, result) => {
        if (err) {
            console.log("service error");
            callback(err);
        } else {
            console.log("IN SERVICE RESULT IS ", result);
            sendPush.SendPushNotify(result);
            return callback(null, result);
        }
    });
};

/***********************************************************************************************
 * 
 * @description:  Check for reminders
 * 
 ************************************************************************************************/

exports.checkForReminder = () => {
    noteModel.getAllUser((err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (Array.isArray(result)) {
                console.log('result==>', result);
                var userId = result[0].userId;
                console.log(userId, "314564354354356464646");
                notifyModel.sendNotification(userId, (err, token) => {
                    if (err) {
                        callBack(err);
                    } else {
                        result.forEach(value => {
                            var payload = {
                                notification: {
                                    title: value.title,
                                    body: value.description
                                }
                            };
                            notepush.sendNotification(token, payload);
                            //return callBack(null, result)
                        });
                    }
                });
            } else {
                console.log("notes in reminder", result);
            }
        }
    });
    // console.log("ngahafagahagagafa",d5);
};
