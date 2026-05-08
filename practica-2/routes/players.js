import express from 'express';
const router = express.Router();
import Player from '../models/user.js';

router.get('/:team', async(req, res) => {
    try{
        const players = await Player.find({
            team: req.params.team
        });
        res.status(200).json({
            message: 'Ok',
            players
        })
    } catch (err) {
        res.status(500).json({
            message: 'Database error',
            error: err.message
        })
    }
})

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

router.put('/', async (req, res) => {
    try{
        const playerUpdated = await Player.findOneAndUpdate(
            { surname: req.body.surname },
            req.body,
            { new: true }
        );
        if (!playerUpdated) {
            return res.status(404).json({
                message: 'Player not found'
            });
        }
        res.status(200).json({
            message: 'Ok',
            player: playerUpdated
        })
    } catch (err) {
        res.status(500).json({
            message: 'Database error',
            error: err.message
        })
    }
})

router.delete('/:surname', async (req, res) => {
    try{
        const infoDeleted = await Player.deleteOne({
            surname: req.params.surname
        });
        if (infoDeleted.deletedCount === 0){
            return res.status(404).json({
                message: 'Player not found'
            });
        }
        res.status(200).json({
            message: 'Ok',
            info: infoDeleted
        });
    } catch (err) {
        res.status(500).json({
            message: 'Database error',
            error: err.message
        })
    }
})

export default router;