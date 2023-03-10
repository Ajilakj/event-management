const  Event  = require('../models/Event');

const eventdata = [
        {
          event_id:1,
          event_title: "Voices of Women in Tech: Overcoming Obstacles and Building Careers",
          event_location:{"loc1":"New York"},
          event_data: {"intro":"intro for event 1","desc":"Women's History Month empowers women around the world with the courage, self-esteem and willpower to succeed with confidence. Celebrating women's history and accomplishments can also help inspire current and future generations to emulate the women who laid the framework for us to succeed and to be treated equitably in society."},
          event_date: {"start_date":"Thursday, March 9 at 2:00PM EST"},
          event_image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/02\/Crafting-an-Industry-Backed-LinkedIn-Profile.jpg?resize=1536,1024",
          client_id:1
        },
        {
          event_id:2,
          event_title: "The Psychology of the Job Search",
          event_location:{"loc1":"New Jersey"},
          event_data: {"intro":"intro for event 2","desc":"This workshop is designed for job seekers to gain insight on how your mind can work for you or against you and remain motivated despite the personal struggle and challenging odds of the job search."},
          event_date: {"start_date":"March 08, 2023, 3:00PM EST (2:00 PM CST, 1:00 PM MST, 12:00 PM PST"},
          event_image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/01\/Data-Analytics-Interview-Prep.jpg?resize=1536,1024",
          client_id:2
        },

];

const seedEvent = async () => await Event.bulkCreate(eventdata);

module.exports = seedEvent;