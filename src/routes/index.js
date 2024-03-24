import express from 'express';
import { CheckinRoutes } from './bookings.routes.js';


export const routes = express.Router();
routes.use('/checkin', CheckinRoutes)