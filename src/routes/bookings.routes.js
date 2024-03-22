import express from 'express';
import { setCheckinStatus } from '../controller/booking.controller.js';

export const CheckinRoutes = express.Router();

CheckinRoutes.post('/:id', setCheckinStatus)
