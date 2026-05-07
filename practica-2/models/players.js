import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema(
    {
        name: String,
        surname: String,
        team: String
    },
    {
        versionKey: false,
        collection: 'players'
    }
)

const Player = mongoose.model('Player', PlayerSchema);

export default Player;