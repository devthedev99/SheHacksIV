const express = require('express'); 
var router = express.Router(); 

const Song = require('../models/songs.model'); 
const Review = require('../models/reviews.model');
const Security = require('../models/security.model');  
const Privacy = require('../models/privacy.model');

/**
 * SONGS
 */
// UPDATING SONG DATA - only auth users 
    //  router.put('/admin/song/:id', (req, res) => {
    router.put('/song/:id', (req, res) => {
        Song.findByIdAndUpdate({_id: req.params.id}, {
            $set:{
                songTitle: req.body.songTitle, 
                artist: req.body.artist, 
                album: req.body.album,
                year: req.body.year,
                comment: req.body.comment,
                genre: req.body.genre
            }
        }, 
        function(err, result) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(result); 
            }
        })
    });

    // INSERTING A NEW SONG - only auth 
    router.post('/song', (req, res) => {
        let newSong = new Song({
            songTitle: req.body.songTitle, 
            artist: req.body.artist, 
            album: req.body.album,
            year: req.body.year,
            comment: req.body.comment,
            genre: req.body.genre
        });
        newSong.save((err, song) => {
            if(err) {
                res.json(err);
            }
            else {
                res.json({msg: 'Song has been added successfully'}); 
            }
        }); 
    
    });
    
    // EXPAND TO VIEW FULL SONG 
    router.put('/song/:id', (req, res) => {
        Song.findById({_id: req.params.id},
        function(err, result) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(result); 
            }
        })
    });

    // RETRIEVE SONGS LIST - anyone can view songs
    //router.get('/open/songs', (req, res) => {
    router.get('/songs', (req, res) => {
        //res.send('get route tested'); // for testing get route
        Song.find(function(err, songs) {
            if(err){
                res.json(err); 
            }
            else{
                res.json(songs);
            }
        })
    });

    // DELETE SONG DATA
    router.delete('/song/:id', (req, res) => {
        Song.remove({_id: req.params.id}, function(err, result) {
            if(err){
                res.json(err);
            }
            else {
                res.json(result); 
            }
        }); 
    });

    /**
     * POLICIES
     */
    // RETRIEVE SECURITY POLICY
    router.get('/security_policy', (req, res) => {
        Security.find(function(err, securityPolicy) {
            if(err){
                res.json(err); 
            }
            else{
                res.json(securityPolicy);
            }
        })
    });

    // POST SECURITY POLICY
    router.post('/security', (req, res) => {
        let newSecurity = new Security({
            security: req.body.security
        });
        newSecurity.save((err, sec) => {
            if(err) {
                res.json(err);
            }
            else {
                res.json({msg: 'Security Policy has been added successfully'}); 
            }
        }); 
    
    });

    // EDIT SECURITY POLICY
    router.put('/security_policy', (req, res) => {
        Security.findByIdAndUpdate({_id: req.params.id}, {
            $set:{
                security: req.body.security
            }
        }, 
        function(err, result) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(result); 
            }
        })
    });


    /**
     * PRVIACY POLICY
     */
    


    /**
     * REVIEWS 
     */
    // INSERT REVIEWS
    router.post('/review', (req, res) => {
        let newReview = new Review({
            songTitle: req.body.songTitle,
            review: req.body.review, 
            reviewer: req.body.reviewer, 
            rating: req.body.rating
        });
        newReview.save((err, review) => {
            if(err) {
                res.json(err);
            }
            else {
                res.json({msg: 'Review has been added successfully'}); 
            }
        }); 
    
    });

    
    // DELETE REVIEW - admin only 
    router.delete('/review/:id', (req, res) => {
        // TO DO LATER
        Review.remove({_id: req.params.id}, function(err, result) {
            if(err){
                res.json(err);
            }
            else {
                res.json(result); 
            }
        }); 
    });
    
    // UPDATE REVIEW
    router.put('/review/:id', (req, res) => {
        Review.findByIdAndUpdate({_id: req.params.id}, {
            $set:{
                songTitle: req.body.songTitle,
                review: req.body.review, 
                reviewer: req.body.reviewer, 
                rating: req.body.rating,
            }
        }, 
        function(err, result) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(result); 
            }
        })
    });


    // NOT FINISHED - NEED TO GET FOR SPECIFIC SONGS
    // GET ALL REVIEWS
    router.get('/reviews', (req, res) => {
        //res.send('get route tested'); // for testing get route
        Review.find(function(err, reviews) {
            if(err){
                res.json(err); 
            }
            else{
                res.json(reviews);
            }
        })
    });

    module.exports = router; 