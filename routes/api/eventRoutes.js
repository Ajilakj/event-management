const router = require('express').Router();
const { Op } = require("sequelize");
// Import the model
const Event = require('../../models/Event');

 // get all the events api/events
router.get('/', (req, res) => {
  Event.findAll().then((eventData) => {
    res.json(eventData);
  });
});


//  get one  event with eventId
router.get('/:eventID', (req, res) => {
  // Get one event from the event table
  Event.findOne(
    {
      where: {
        event_id: req.params.eventID 
          
      },

    }
  ).then((eventData) => {
    res.json(eventData);
  });
});

router.get('/search/:title', (req, res) => {
    // Get all event from the event table if location matches
    Event.findAll(
      {
        where: {
          title: {
              [Op.like]: '%' + req.params.title + '%'
              
          }
      }
  
      }
    ).then((eventData) => {
      res.json(eventData);
    });
  });
  
// router.get('/:location', (req, res) => {
//   // Get all event from the event table if location matches
//   Event.findAll(
//     {
//       where: {
//         event_location: req.params.location 
          
//       },

//     }
//   ).then((eventData) => {
//     res.json(eventData);
//   });
// });


router.get('/client/:clientID', (req, res) => {
  // Get all event from a particular client
  Event.findAll(
    {
      where: {
        client_id: req.params.clientID 
          
      },

    }
  ).then((eventData) => {
    res.json(eventData);
  });
});


// router.post('/seed', (req, res) => {
//   // Multiple rows can be created with `bulkCreate()` and an array
//   // This could also be moved to a separate Node.js script to ensure it only happens once
//   Event.bulkCreate([
//     {
//       event_id:1,
//       event_title: "Voices of Women in Tech: Overcoming Obstacles and Building Careers",
//       event_location:"New York",
//       event_data: "Women's History Month empowers women around the world with the courage, self-esteem and willpower to succeed with confidence. Celebrating women's history and accomplishments can also help inspire current and future generations to emulate the women who laid the framework for us to succeed and to be treated equitably in society.",
//       event_date: "Thursday, March 9 at 2:00PM EST",
//       event_image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/02\/Crafting-an-Industry-Backed-LinkedIn-Profile.jpg?resize=1536,1024",
//       client_id:1
//     },
//     {
//       event_id:2,
//       event_title: "The Psychology of the Job Search",
//       event_location:"New Jersey",
//       event_data: "This workshop is designed for job seekers to gain insight on how your mind can work for you or against you and remain motivated despite the personal struggle and challenging odds of the job search.",
//       event_date: "March 08, 2023, 3:00PM EST (2:00 PM CST, 1:00 PM MST, 12:00 PM PST",
//       event_image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/01\/Data-Analytics-Interview-Prep.jpg?resize=1536,1024",
//       client_id:2
//     },


//   ])
//     .then(() => {
//       res.send('Database seeded!');
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
module.exports = router;
