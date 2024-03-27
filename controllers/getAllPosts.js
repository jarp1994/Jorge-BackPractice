const { User } = require('../db.js');



const getAllPosts = async (req, res) => {
    try {
    
        
    } catch (error) {
        res.status(400).send({error: "Error al traer los datos"})
    }
}

module.exports = getAllPosts