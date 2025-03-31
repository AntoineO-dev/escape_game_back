const reservationsService = require('../services/reservationsService');

async function getAllReservations(req, res) {
    try {
        const reservations = await reservationsService.getAllReservations();
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReservationById(req, res) {
    const reservationId = req.params.id;
    try {
        const reservation = await reservationsService.getReservationById(reservationId);
        if (reservation) {
            res.status(200).json(reservation);
        } else {
            res.status(404).json({ error: 'Reservation not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getAverageCost(req, res) {
    try {
        const averageCost = await reservationsService.getAverageCost();
        res.status(200).json(averageCost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReservationsAboveCost(req, res) {
    const totalCost = req.params.total_cost;
    try {
        const reservations = await reservationsService.getReservationsAboveCost(totalCost);
        if (reservations.length > 0) {
            res.status(200).json(reservations);
        } else {
            res.status(404).json({ error: 'No reservations found above this cost' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReservationsBelowCost(req, res) {
    const totalCost = req.params.total_cost;
    try {
        const reservations = await reservationsService.getReservationsBelowCost(totalCost);
        if (reservations.length > 0) {
            res.status(200).json(reservations);
        } else {
            res.status(404).json({ error: 'No reservations found below this cost' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReservationByStatus(req, res) {
    const reservationStatus = req.params.reservation_status;
    try {
        const reservations = await reservationsService.getReservationByStatus(reservationStatus);
        if (reservations.length > 0) {
            res.status(200).json(reservations);
        } else {
            res.status(404).json({ error: 'No reservations found with this status' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


async function getReservationsByEscapeGameType(req, res) {
    const escapeGameType = req.params.type;
    try {
        const reservations = await reservationsService.getReservationsByEscapeGameType(escapeGameType);
        if (reservations.length > 0) {
            res.status(200).json(reservations);
        } else {
            res.status(404).json({ error: 'No reservations found for this escape game type' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getBestClients(req, res) {
    try {
        const bestClients = await reservationsService.getBestClients();
        if (bestClients.length > 0) {
            res.status(200).json(bestClients);
        } else {
            res.status(404).json({ error: 'No best clients found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getAllReservations,
    getReservationById,
    getReservationByStatus,
    getAverageCost,
    getReservationsByEscapeGameType,
    getBestClients,
    getReservationsAboveCost,
    getReservationsBelowCost,

};