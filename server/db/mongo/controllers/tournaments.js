import _ from 'lodash';
import Tournament from '../models/tournaments'

/**
 * List
 */
export function all(req, res){
    Tournament.find({}).exec((err, tournament) => {
        if(err){
            console.log('Error in first query');
            return res.status(500).send('Something went wrong getting the data')
        }
    })
}

/**
 * Add a tournament
 */
export function add(req,res){
    Tournament.create(req.body, (err) => {
        if(err){
            console.log(err)
            return res.status(400).send(err);
        }
        return res.status(200).send('OK');
    })
}

/**
 * Update a tournament
 */
export function update(req, res){
    const query = { id: req.params.id};
    const isIncrement = req.body.isIncrement;
    const isFull = req.body.isFull;
    const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
    const data = _.omit(req.body, omitKeys);

    if(isFull){
        Tournament.findOneAndUpdate(query, data, (err) => {
            if(err){
                console.log('Error on save!');
                return res.status(500).send('We failed to save for some reason')
            }
            return res.status(200).send('Updated successfully');
        });
    } else{
        Tournament.findOneAndUpdate(query, {$inc: { count: isIncrement ? 1 : -1}}, (err) =>{
            if(err){
                console.log('Error on save!')
                return res.status(500).send('We failed to save for some reason');
            }
            return res.status(200).send('Updated successfully');
        });
    }
}

/**
 * Remove a tournament
 */
export function remove(req, res){
    const query = { id: req.params.id};
    Tournament.findOneAndUpdate(query, (err) =>{
        if(err){
            console.log('Error on delete');
            return res.status(500).send('We failed to delete for some reason');
        }
        return res.status(200).send('Removed Successfully');
    });
}

export default{
    all,
    add,
    update,
    remove
}