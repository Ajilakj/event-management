const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Op } = require("sequelize");
// const Utils = Sequelize.Utils;
// Import the model
const Event = require('../../models/Event');

 // get all the events api/events
router.get('/', (req, res) => {

  let keyword =   req.query.keyword;
  let categoryField =   req.query.category;
  let locationField =   req.query.location;
  if((keyword==="all" && categoryField==="all" && locationField==="all")||(keyword===undefined && categoryField===undefined && locationField===undefined)){
    Event.findAll()
    .then((eventData) => {
      res.json(eventData);
    });
  }
  else{
    if(categoryField==="all" && locationField==="all"){
      // Event.findAll(
      // //   {
      // //     where: {
      // //       title: {
      // //           [Op.like]: '%' + keyword + '%'
      // //       }
      // //   }
      // }
      // )
      // .then((eventData) => {
      //   res.json(eventData);
      // });
      eventData = sequelize.query('SELECT * FROM Event WHERE title like '+"'%" + keyword + "%'" , {
        type: sequelize.QueryTypes.SELECT

      }).then((eventData) => {
        if(eventData){}
          res.json(eventData);
        });
    }
    else if(keyword==="all" && locationField==="all"){
        Event.findAll(
          {
            where: {
              category: {
                // [Op.contains]:  categoryField 
                // [Op.contains]:[categoryField]
                // [Op.overlap]:categoryField
                //  $contains: categoryField
                [Op.like]:  ['%' + categoryField + '%']
                },
          }
        }).then((eventData) => {
          res.json(eventData);
        });
      }
      else if(categoryField==="all" && keyword==="all"){
          Event.findAll(
            {
              where: {
                
                location: {
                  city:{
                  [Op.like]:  '%' + locationField + '%'
                  }
                }
            }
          }).then((eventData) => {
            res.json(eventData);
          });
        }
        else if(keyword==="all"){
          Event.findAll(
            {
              where: {
                
                location: {
                  city:{
                  [Op.like]:  '%' + locationField + '%'
                  }
                },
                category: {
                  [Op.like]:  ['%' + categoryField + '%']
                  },
            }
          }).then((eventData) => {
            res.json(eventData);
          });
        }
        else if(categoryField==="all"){
          Event.findAll(
            {
              where: {
                
                location: {
                  city:{
                  [Op.like]:  '%' + locationField + '%'
                  }
                },
                title: {
                  [Op.like]: '%' + keyword + '%'
                },
            }
          }).then((eventData) => {
            res.json(eventData);
          });
        }
        else if(locationField==="all"){
          Event.findAll(
            {
              where: {
                
                title: {
                  [Op.like]: '%' + keyword + '%'
                },
                category: {
                  [Op.like]:  ['%' + categoryField + '%']
                  },
            }
          }).then((eventData) => {
            res.json(eventData);
          });
        }
    else{
      Event.findAll(
        {
          //  where: {"category = ? AND location = ?": [req.query.category, req.query.location] }
          where: {
            title: {
              [Op.like]: '%' + keyword + '%'
            },
            category: {
              [Op.like]:  ['%' + categoryField + '%']
              },
              location: {
                city:{
                [Op.like]:  '%' + locationField + '%'
                }
              },
        }
      }
    ).then((eventData) => {
      res.json(eventData);
    });
  }
  }
});


//  get one  event with eventId
router.get('/:eventID', (req, res) => {
  // Get one event from the event table
  Event.findOne(
    {
      where: {
        id: req.params.eventID 
      }
    }
  ).then((eventData) => {
    res.json(eventData);
  });
});

// router.get('/search/:title', (req, res) => {
//     // Get all event from the event table if location matches
//     Event.findAll(
//       {
//         where: {
//           title: {
//               [Op.like]: '%' + req.params.title + '%'
//           }
//       }
//       }
//     ).then((eventData) => {
//       res.json(eventData);
//     });
//   });
  
// router.get('/search/location/:loc', (req, res) => {
//   // Get all event from the event table if location matches
//   Event.findAll(
//     {
//       where: {
//         location:{
//           '"loc1"':
//           // req.params.loc
//             {
//               [Op.like]: '%' + req.params.loc + '%'
//             }
//       }
//     }
//   }
//   ).then((eventData) => {
//     res.json(eventData);
//   });
// });


router.get('/client/:clientID', (req, res) => {
  // Get all event from a particular client
  Event.findAll(
    {
      where: {
        clientId: req.params.clientID 
      }
    }
  ).then((eventData) => {
    res.json(eventData);
  });
});



module.exports = router;
