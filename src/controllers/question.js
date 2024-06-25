const {response} = require('express');
const question = require('../models/question');


const getAllQuestion = async (req, res = response ) => {
    try {
        const questions = await question.find(); 
        res.json({
            ok: true,
            msg: 'getAllQuestion',
            data: questions
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        throw error; // O manejar el error según sea necesario
    }
};

module.exports = {
    getAllQuestion
};