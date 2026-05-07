import express from 'express';
const router = express.Router();
import Player from '../models/players.js';

router.post('/', async (req, res) => {
    try{
        const player = new Player({
            name: req.body.name,
            surname: req.body.surname,
            team: req.body.team
        });
        const playerSaved = await player.save();

        res.status(200).json({
            message: 'Ok',
            player: playerSaved
        });
    } catch(err){
        res.status(500).json({
            message: 'Database error',
            error: err.message
        })
    }
});

export default router;