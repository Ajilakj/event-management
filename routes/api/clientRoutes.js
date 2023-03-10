const router = require('express').Router();
// Import the model
const Event = require('../../models/Event');

 // get all the events api/events
// router.get('/', (req, res) => {
//   Event.findAll().then((eventData) => {
//     res.json(eventData);
//   });
// });

 // get all the events for a particular client 



// router.get('/:eventID', (req, res) => {
//   // Get one event from the event table
//   event.findAll(
//     // {
//     //   where: { 
//     //       category: {
//     //           '"author"': 
//     //             req.params.author 
//     //       }
//     //   },

//     // }
//   ).then((eventData) => {
//     res.json(eventData);
//   });
// });

module.exports = router;
