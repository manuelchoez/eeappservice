const {response} = require('express');
const mintelligence = require('../models/intelligence');

const getAllIntelligence = async (req, res = response ) => {
    try {
        const intelligence = await mintelligence.find(); 
        res.json({
            ok: true,
            msg: 'getAllIntelligence',
            data: intelligence
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error; // O manejar el error según sea necesario
    }
};


module.exports = {
    getAllIntelligence
};