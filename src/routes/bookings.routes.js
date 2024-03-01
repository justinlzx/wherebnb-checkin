import express from 'express';
import { createBooking } from '../controller/booking.controller.js';

export const bookingsRoutes = express.Router();

bookingsRoutes.post('/', createBooking)