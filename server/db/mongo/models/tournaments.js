/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const TournamentSchema = new mongoose.Schema({
    id: String,
    description: String,
    count: {type: Number, min: 0},
    players: {type: Number, min: 0},
    date: {type: Date, default: Date.UTC}
});

export default mongoose.model('Tournament', TournamentSchema);