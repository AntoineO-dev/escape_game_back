const authService = require('../services/authService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login (req, res) {
  try {
    const user = await authService.getUserByEmail(req.body.email);
    if (!user) {
      return res.status(401).json({ message: 'Invalide email ou mot de passe' });
    }
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ accessToken: null, message: 'Invalide email ou mot de passe' });
    }
    res.status(200).json({token: generateToken(user)});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
}

function generateToken(user) {
    return jwt.sign({
        id: user.id_client,
        email: user.email,
        nom: user.last_name,
        prenom: user.first_name,
        role: user.role
    }, "SECRET", {
        expiresIn: 86400 // 24 hours}
    });
}

function verifyToken (req,res ,next) {
    const token = req.headers['Authorization'];
    if (!token) {
        return res.status(403).send({ message: 'Aucun token fourni!' });
    }
    jwt.verify(token.split(' ')[1], "SECRET", (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Non authorisé' });
        }
        req.user = decoded;
        next();
    });
}

module.exports = {
    login,
    verifyToken
}
