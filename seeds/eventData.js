const  Event  = require('../models/Event');

const eventdata = [
        {
          id:1,
          title: "Voices of Women in Tech: Overcoming Obstacles and Building Careers",
          location:{"address":"Edison","city":"Edison","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category: 
            ["Holiday","Christmas"],
          data: {"intro":"intro for event 1 : Women's History Month","desc":"Women's History Month empowers women around the world with the courage, self-esteem and willpower to succeed with confidence. Celebrating women's history and accomplishments can also help inspire current and future generations to emulate the women who laid the framework for us to succeed and to be treated equitably in society."},
          dates: {"date":[
                 { "startTime": "2:00PM",
                  "endTime": "4:00PM",
                  "date": "2022-08-19T04:00:00.000Z",
                  "acvitity":
                    [
                        {
                        "schedule":"<h3>Registration</h3><p>8</p>"
                        },
                        {
                        "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                        }
                    ]
           
                },
                {
                  "startTime": "2:00PM",
                  "endTime": "4:00PM",
                  "date": "2022-08-20T04:00:00.000Z",
                  "acvitity":
                    [
                        {
                        "schedule":"<h3>Fully day start at</h3><p>8</p>"
                        }
                    ]
                },
                {
                  "startTime": "2:00PM",
                  "endTime": "4:00PM",
                  "date": "2022-08-21T04:00:00.000Z"
                }
          ]
        },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/02\/Crafting-an-Industry-Backed-LinkedIn-Profile.jpg?resize=1536,1024",
          clientId:1
        },
        {
          id:2,
          title: "The Psychology of the Job Search",
          location:{"address":"Edison","city":"Edison","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category:  ["Holiday","Easter"],
          data: {"intro":"intro for event 2 : for job seekers to gain insight","desc":"This workshop is designed for job seekers to gain insight on how your mind can work for you or against you and remain motivated despite the personal struggle and challenging odds of the job search."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/02\/Winning-Resumes-Write-Effective-Bullet-Points.jpg?resize=1536,1152",
          clientId:2
        },
        
        {
          id:3,
          title: "Beating the Imposter Syndrome: Conquer Your Search with Confidence",
          location:{"address":"Jersey City","city":"Jersey City","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category: 
            ["Holiday","Christmas"],
          data: {"intro":"intro for event 3 : imposter syndrome","desc":"This workshop is designed for learners and alumni who have experienced imposter syndrome and want to conquer their career journeys with confidence."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https://careernetwork.2u.com/wp-content/uploads/2023/01/Tips-to-Manage-Your-Emotional-Health-During-the-Job-Search.jpg?resize=1536,1024",
          client_id:1
        },
        {
          id:4,
          title: "Talking Tech",
          location:{"address":"Jersey City","city":"Jersey City","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category:  ["Holiday","Easter"],
          data: {"intro":"intro for event 4 : talk about technical topics at each stage of the interview process","desc":"In this workshop, you will learn how to talk about technical topics at each stage of the interview process. We will also discuss psuedocode, and how you can use it to communicate your problem-solving skills."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/01\/Data-Analytics-Interview-Prep.jpg?resize=1536,1024",
          client_id:2
        },
        {
          id:5,
          title: "Industry Insights with STEM Professionals",
          location:{"address":"Edison","city":"Edison","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category: 
            ["Holiday","Christmas"],
          data: {"intro":"intro for event 5 : Gain new perspectives from industry experts in the world of STEM","desc":"Gain new perspectives from industry experts in the world of STEM.\r\n\r\nWe invite industry experts to engage in discussions about emerging trends and hot topics relevant to STEM. This event often includes deep-dive conversations on specific topics, informative Q&A sessions, round-table talks with panelists, and more."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/02\/Crafting-an-Industry-Backed-LinkedIn-Profile.jpg?resize=1536,1024",
          client_id:1
        },
        {
          id:6,
          title: "Real Talk: Align Your Job Search with Your Values",
          location:{"address":"Edison","city":"Edison","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category:  ["Holiday","Easter"],
          data: {"intro":"intro for event 6 : Learn strategies that will help you identify your values","desc":"This workshop is specifically designed for learners who desire meaningful careers at companies whose values align with their own. Learn strategies that will help you identify your values and use them to secure meaningful career paths."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https://careernetwork.2u.com/wp-content/uploads/2021/11/Beating-the-Imposter-Syndrome-483x322@2x.jpg?resize=1536,1024",
          client_id:3
        },
        {
          id:7,
          title: "Tips to Manage Your Emotional Health During the Job Search",
          location:{"address":"Jersey City","city":"Jersey City","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category: 
            ["Holiday","Christmas"],
          data: {"intro":"intro for event 7 : Be prepared to learn actionable tips and strategies","desc":"This workshop is designed for job seekers who are experiencing negative emotions during their job search that may be preventing them from reaching their jobs. Be prepared to learn actionable tips and strategies that will help you achieve your job search goals.\r\n\r\nPlease note we are NOT mental health professionals providing mental health advice, but rather, we are career coaches offering strategies and tips to manage negative emotions effectively during the job search."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https://careernetwork.2u.com/wp-content/uploads/2023/01/Tips-to-Manage-Your-Emotional-Health-During-the-Job-Search.jpg?resize=1536,1024",
          client_id:1
        },
        {
          id:8,
          title: "Performance, Image, & Exposure: Networking for Career Advancers",
          location:{"address":"Jersey City","city":"Jersey City","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category:  ["Holiday","Easter"],
          data: {"intro":"intro for event 8 : Networking for Career Advancers","desc":"This workshop is designed for job seekers to gain insight on how your mind can work for you or against you and remain motivated despite the personal struggle and challenging odds of the job search."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/01\/Data-Analytics-Interview-Prep.jpg?resize=1536,1024",
          client_id:4
        },
        {
          id:9,
          title: "Launch Your Job Search Today",
          location:{"address":"Edison","city":"Edison","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category: 
            ["Holiday","Christmas"],
          data: {"intro":"intro for event 9 : take charge of your job search","desc":"This interactive workshop is designed to help you take charge of your job search."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/02\/Crafting-an-Industry-Backed-LinkedIn-Profile.jpg?resize=1536,1024",
          client_id:4
        },
        {
          id:10,
          title: "Path Forward: Data + FinTech Career Paths",
          location:{"address":"Edison","city":"Edison","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category:  ["Holiday","Easter"],
          data: {"intro":"intro for event 10 : FinTech Career Paths","desc":"FinTech Career Paths","EventData":"Whether you are looking for a role as a business analyst or a blockchain developer, there is a pathway to that next role. In this session, we will identify in-demand skills, review certification or licensure options, and provide resources to kick-start exploration into various roles."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https://careernetwork.2u.com/wp-content/uploads/2021/11/Beating-the-Imposter-Syndrome-483x322@2x.jpg?resize=1536,1024",
          client_id:3
        },
        {
          id:11,
          title: "Intro to Cloud Computing",
          location:{"address":"Jersey City","city":"Jersey City","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category: 
            ["Holiday","Christmas"],
          data: {"intro":"intro for event 11 : cloud computing","desc":"During this workshop we will define cloud computing so that you can decide if the career path interests you. We will also review common interview questions about cloud computing."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https://careernetwork.2u.com/wp-content/uploads/2023/01/Tips-to-Manage-Your-Emotional-Health-During-the-Job-Search.jpg?resize=1536,1024",
          client_id:2
        },
        {
          id:12,
          title: "Real Talk: Addressing Employment Gaps in Your Experience",
          location:{"address":"Jersey City","city":"Jersey City","State":"New Jersey","Country":"United States","lat":"a213213123","lon":"asdfsadfsdf"},
          category:  ["Holiday","Easter"],
          data: {"intro":"intro for event 12 : tools to address your resume gaps","desc":"This workshop is designed to support you with tools to address your resume gaps so come prepared to update your career materials to stand out and find organizations in your area who are looking for someone with your background\/skills."},
          dates: {"date":[
            { "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-19T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Registration</h3><p>8</p>"
                   },
                   {
                   "schedule":"<h3>Spearmer 1</h3><p>8.10am re</p>"
                   }
               ]
      
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-20T04:00:00.000Z",
             "acvitity":
               [
                   {
                   "schedule":"<h3>Fully day start at</h3><p>8</p>"
                   }
               ]
           },
           {
             "startTime": "2:00PM",
             "endTime": "4:00PM",
             "date": "2022-08-21T04:00:00.000Z"
           }
     ]
   },
          virtual:"No",
          endDate: "2022-08-21T04:00:00.000Z",
          timeZone:"Eastern Standard Time",
          image:"https:\/\/careernetwork.2u.com\/wp-content\/uploads\/2023\/01\/Data-Analytics-Interview-Prep.jpg?resize=1536,1024",
          client_id:3
        },

];

const seedEvent = async () => await Event.bulkCreate(eventdata);

module.exports = seedEvent;