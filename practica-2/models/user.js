import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true,
            unique: true
        },
        teams: {
            type: String,
            enum: [
                'Real Madrid',
                'F.C. Barcelona',
                'Atlético de Madrid'
            ]
        }
    },
    {
        versionKey: false,
        collection: 'players'
    }
)

const Player = mongoose.model('Player', PlayerSchema);

export default Player;