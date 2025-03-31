const clientsService = require('../services/clientsService');

async function getAllClients (req, res) {
    try {
        const clients = await clientsService.getAllClients();
        res.status(200);
        res.send(clients);
    } catch (error) {
        res.status(500);
        res.json({'message': 'Une erreur est survenue lors de la récupération des clients'});
    }
}

async function getClientById (req, res) {
    try {
        const client = await clientsService.getClientById(req.params.id_client);
        res.status(200);
        res.send(client);
    } catch (error) {
        res.status(500);
        res.json({'message': 'Une erreur est survenue lors de la récupération du client'});
    }
}

async function getReservationByClientId (req, res) {
    try {
        const reservations = await clientsService.getReservationByClientId(req.params.id_client);
        res.status(200);
        res.send(reservations);
    } catch (error) {
        res.status(500);
        res.json({'message': 'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function getReservationByMonth (req, res) {
    try {
        const reservations = await clientsService.getReservationByMonth(req.params.month);
        res.status(200);
        res.send(reservations);
    } catch (error) {
        res.status(500);
        res.json({'message': 'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function getReservationByYear (req, res) {
    try {
        const reservations = await clientsService.getReservationByYear(req.params.year);
        res.status(200);
        res.send(reservations);
    } catch (error) {
        res.status(500);
        res.json({'message': 'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function getReservationAbove (req, res) {
    try {
        const reservations = await clientsService.getReservationAbove(req.params.total_cost);
        res.status(200);
        res.send(reservations);
    } catch (error) {
        res.status(500);
        res.json({'message': 'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function getReservationBelow (req, res) {
    try {
        const reservations = await clientsService.getReservationBelow(req.params.total_cost);
        res.status(200);
        res.send(reservations);
    } catch (error) {
        res.status(500);
        res.json({'message': 'Une erreur est survenue lors de la récupération des réservations'});
    }
}

async function getReservationByEscapeRoom (req, res) {
    try {
        const reservations = await clientsService.getReservationByEscapeRoom(req.params.id_escape);
        res.status(200);
        res.send(reservations);
    } catch (error) {
        res.status(500);
        res.json({'message': 'Une erreur est survenue lors de la récupération des réservations'});
    }
}

module.exports = {
    getAllClients,
    getClientById,
    getReservationByClientId,
    getReservationByYear,
    getReservationAbove,
    getReservationBelow,
    getReservationByEscapeRoom,
    getReservationByMonth
};