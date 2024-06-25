import express from "express";
import userAuth from "../middleware/userAuth.js";
import multer from "multer";

import { performLogin, performSignup } from "../controllers/accountController.js";
import { getUserDetails } from "../controllers/userController.js";
import { findUserDetails } from "../controllers/findUser.js";
import { sendTextMessage, uploadMessageImage } from "../controllers/sendMessageController.js";
import getMessages from "../controllers/getMessages.js";
import { getChats } from "../controllers/chatsController.js";

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.get("/", (request, response) => {
    response.send("Hello from Server.");
})

// Login/Signup
router.post('/login', performLogin);
router.post('/signup', performSignup);

// User Data
router.get('/get-user-data', userAuth, getUserDetails);

// New Friend Creation
router.get('/search-user', userAuth, findUserDetails);

// Messages related routes
router.post('/send-message', userAuth, sendTextMessage);
router.post('/upload-image-message', userAuth, upload.single("file"), uploadMessageImage)
router.get('/get-messages', userAuth, getMessages);

// Routes related to Chats
router.get('/get-chats', userAuth, getChats);

export default router;