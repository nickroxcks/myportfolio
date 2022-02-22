export const projects = [
    {
        title: 'Voice Direction Processing System (VDPS)',
        description: "The VDPS was a response to a proposal made by University Professor Steven Knudsen to create a system capable of detecting voices within a small room. Each VDPS hardware unit was capable of detecting sounds, pinpointing the exact direction of each distinct sound, and providing the sound data to the user via an API and web application. The web application was a React app hosted on AWS, and each hardware unit ran built in python scripts to connect the device to the webapp."+
        " By using the web application the user could remotely control every device registered under their name, view directional data of each sound using a custom made UI compass, apply sound filters, and manage all their devices on a clean dashboard. The system was scalable in that users could purchase hundreds of VDPS hardware units and manage each device using a very friendly user interface.",
          image: ['/images/VDPSOverview.png'],
          tags: ['Python', 'AWS', 'React', 'Node'],
        source: '/Doc/VDPS_DOC.docx.pdf',
        visit: 'https://github.com/LukeDelaCruz/VDPS',
        id: 0,
      },
{
        title: 'BUber',
        description: "Uber is a popular mobile app that allows it's users to travel to any local destination with just a few clicks.  While this is very useful, can we do better? Introducing " +
        "Buber, otherwise known as Better Uber. BUber utilizes google cloud technologies along with easy to navigate user interfaces to give it's users a cleaner experience. Features of the app include " + 
        "live location tracking of riders and drivers, optimal route finding, payment transactions, and more. ",
            image: ['/images/Buber.png'],
            tags: ['Java', 'Google Cloud', 'Android', 'Firebase'],
        source: 'https://github.com/nickroxcks/BUberAndroid',
        visit: 'https://github.com/nickroxcks/BUberAndroid',
        id: 0,
        },

  {
    title: 'E-Commerce',
    description:"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: ['/images/2.png'],
    tags: ['React', 'JavaScript'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'WebRTC App',
    description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
      image: ['/images/3.jpg'],
      tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Unichat',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: ['/images/4.jpg'],
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2013, text: 'Started my journey, with my first Hello World application', },
  { year: 2016, text: 'Started my undergrad degree in Computer Engineering', },
  { year: 2019, text: 'Worked as a Support Analyst for the Government of Canada (4 months)', },
  { year: 2019, text: 'Worked as a Software Engineer for Telus Communications Optik TV (4 months)', },
  { year: 2020, text: 'Worked as a Support Engineer for Teck Resources (1 year)', },
  { year: 2021, text: 'Completed my undergrad in Computer Engineering', },
];

export const aboutMeInfo = `
I am a creative well versed Software Engineer who over the last 8 years has tackled on a variety of different projects. 

`