import express from "express";
import userAuth from "../middleware/userAuth.js";
import multer from "multer";

import { performLogin, performSignup } from "../controllers/accountController.js";
import { getUserDetails } from "../controllers/userController.js";
import { findUserDetails } from "../controllers/findUser.js";
import { sendTextMessage, uploadMessageImage } from "../controllers/sendMessageController.js";
import getMessages from "../controllers/getMessages.js";
import { getChats } from "../controllers/chatsController.js";
import { addImage, addAddress, addCity, addGender, addPincode, addState, addBio, updateAddress } from "../controllers/credentialController.js";

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

// Routes related to user profile.
router.post('/add-image', userAuth, upload.single("file"), addImage)
router.post(`/add-gender`, userAuth, addGender)
router.post(`/add-address`, userAuth, addAddress)
router.post(`/add-pincode`, userAuth, addPincode)
router.post(`/add-state`, userAuth, addState)
router.post(`/add-city`, userAuth, addCity)
router.post('/add-bio', userAuth, addBio)
router.post(`/update-address`, userAuth, updateAddress)

export default router;