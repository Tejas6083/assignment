const express = require("express");
const Overview = require("../models/Overview");
const router = new express.Router();

router.post('/overview', async (req,res) => {
    try {
        const overview = new Overview({
            ...req.body
        });

        await overview.save();

        return res.status(200).send(overview);

    } catch(error) {

        return res.status(400).send(error);
    }
});

router.get('/overview', async (req,res) => {

    try {
        const overview = await Overview.findOne({owner: req.query.user_id});

        if(!overview) {
            return res.status(404).send({error: "User not found"});
        }

        return res.status(200).send(overview);

    } catch(error) {
        return res.status(400).send(error);

    }
});

router.patch('/overview', async (req,res) => {

    try {

        const updates = Object.keys(req.body);
        const allowedUpdates = ['referals'];
        const updateValidation = updates.every((update) => allowedUpdates.includes(update));

        if(!updateValidation) {
            return res.status(400).send({error: "Invalid update. The choosen field is not available or not allowed to update"});
        }

        const overview = await Overview.findOne({owner : req.query.user_id});

        if (!overview) {

            return res.status(404).send({error: "User not found"});

        }

        updates.forEach((update) => {
            overview[update] = req.body[update];
        });

        await overview.save();

        return res.status(200).send(overview);

    } catch (error) {
        return res.status(400).send(error);
    }

});

router.delete('/overview', async (req,res) => {
    try {
        const overview = await Overview.findOneAndDelete({owner: req.query.user_id});
        return res.status(200).send(overview);

    } catch (error) {
        return res.status(400).send(error);
    }
})

module.exports = router;