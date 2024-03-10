import express from 'express';
import { createBooking, getBooking } from '../controller/booking.controller.js';

export const bookingsRoutes = express.Router();

bookingsRoutes.post('/', createBooking)
bookingsRoutes.get('/:id', getBooking)