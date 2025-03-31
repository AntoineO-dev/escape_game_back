const escape_gamesService = require('../services/escape_gamesService');

async function getAllEscapeGames(req, res) {
    try {
        const escapeGames = await escape_gamesService.getAllEscapeGames();
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getEscapeGameById(req, res) {
    const { id } = req.params;
    try {
        const escapeGame = await escape_gamesService.getEscapeGameById(id);
        if (!escapeGame) {
            return res.status(404).json({ message: 'Escape game not found' });
        }
        res.status(200).json(escapeGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getAvailableEscapeGames(req, res) {
    try {
        const escapeGames = await escape_gamesService.getAvailableEscapeGames();
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getEscapeGameByNumberOfPlayers(req, res) {
    const { Number_of_players } = req.params;
    try {
        const escapeGames = await escape_gamesService.getEscapeGameByNumberOfPlayers(Number_of_players);
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getEscapeGameByPriceAbove(req, res) {
    const { price } = req.params;
    try {
        const escapeGames = await escape_gamesService.getEscapeGameByPriceAbove(price);
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getEscapeGameByPriceBelow(req, res) {
    const { price } = req.params;
    try {
        const escapeGames = await escape_gamesService.getEscapeGameByPriceAbove(price);
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getEscapeGameByStatus(req, res) {
    const { status } = req.params;
    try {
        const escapeGames = await escape_gamesService.getEscapeGameByStatus(status);
        res.status(200).json(escapeGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = {
    getAllEscapeGames,
    getEscapeGameById,
    getAvailableEscapeGames,
    getEscapeGameByNumberOfPlayers,
    getEscapeGameByPriceAbove,
    getEscapeGameByPriceBelow,
    getEscapeGameByStatus
 
   
};