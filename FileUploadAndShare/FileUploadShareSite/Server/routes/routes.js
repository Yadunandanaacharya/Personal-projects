import express from 'express';
import {uploadImage, getImage} from '../controller/imgController.js'
import upload from '../utils/upload.js';
import { get } from 'mongoose';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;