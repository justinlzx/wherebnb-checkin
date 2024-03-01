import express from 'express';
import { bookingsRoutes } from './bookings.routes.js';


export const routes = express.Router();

routes.use('/booking', bookingsRoutes)