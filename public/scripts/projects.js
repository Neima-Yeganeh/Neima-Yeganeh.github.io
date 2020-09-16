$(document).ready(() => {
  $('#nav-container').load('nav.html', customizeNavbar);
  addProjects();
});

function customizeNavbar() {
  //$('#nav-title').text('Projects');
  $('#projects-btn').css("text-decoration","underline");
}

let caretLeft = 'fa-caret-left';
let caretDown = 'fa-caret-down';

// maybe eventually extract this into a database
let projects = [
  // {
  //   title: '',
  //   languages: '',
  //   tools: '',
  //   dates: '',
  //   class: '',
  //   links: [],
  //   description: '',
  //   photos: [],
  // },
  {
    title: 'My Website',
    languages: 'Javascript/jQuery, HTML, CSS',
    tools: 'Git/GitHub, VSCode, Sourcetree',
    dates: 'August 2020 - Present',
    description: `I decided to make my own website (this website) to showcase projects I have been
      working on as well as to explain things I'm interested in.`,
    // photos: ['./resources/website.png']
  },
  {
    title: 'Push Bot (Robot)',
    languages: 'MicroPython',
    tools: 'Nucleo-L476, Thonny',
    dates: 'January 2020 - June 2020',
    class: 'Senior Project',
    links: [['Senior Project write up', './resources/PushBotWriteup.pdf']],
    description: `Back in high school I was really into robotics - I was on my school's robotics team all four years
      and was captain for two. Since computer science classes aren't exactly mechanically-inclined, I decided to
      do a crossover of my coding skills and interest in robotics to build a robot for my senior project. Cal Poly SLO
      hosts a robotics competition every spring called Roborodentia, so I built a push bot to compete in a cat food can
      stacking competition. Due to the pandemic, the competition unfortunately got cancelled, but I still had a good
      time building my bot. I've linked my complete write-up detailing the process and design of the bot.`,
    video: './resources/robotVid.MOV',
    // photos: ['./resources/robotReal.png', './resources/robotCad.png'],
  },
  {
    title: 'Image Feature Detection and Matching',
    languages: 'MatLab',
    dates: 'February 2020',
    class: 'Computer Vision class (CPE428)',
    links: [['Feature Detection report', './resources/FeatureDetectionReport.pdf']],
    description: `Used the Harris corner detection algorithm to detect and analyze the key features of two images of
      the same view taken with different lighting, and determined whether any of the key features matched. I've linked
      my partner and I's write up.`,
    photos: ['./resources/feature1.png', './resources/feature2.png'],
  },
  {
    title: 'LED Prism Project',
    tools: 'Soddering Iron, EAGLE (CAD)',
    dates: 'April 2020 - June 2020',
    class: 'Basic Electronics Manufacturing class (IME156)',
    //links: [], // link to video
    video: './resources/ledPrism.MOV',
    description: `Manufactured an LED Prism that interacts with music to perform a light show. It detects the notes from
      any song and outputs a different color of light depending on the frequency of the note. I designed a PCB using EAGLE,
      soddered all the electrical components to the board, and designed and manufactured my own unit of containment (bought
      a cigar box from a local smoke shop then modified it to appropriately contain the parts).`,
    photos: ['./resources/LEDbox.JPG', './resources/solder.jpeg'],
  },
  {
    title: 'Language Creation',
    languages: 'SML',
    tools: 'Sublime, Cyberduck',
    dates: 'January 2020 - March 2020',
    class: 'Programming Languages class (CSC430)',
    description: `Used a functional programming language (SML) to create a new programming language called NEXUS. This
      involved writing a tokenizer, a parser, and an interpreter. The program analyzes functions, objects, and static
      type-checking of NEXUS code.`,
  },
  {
    title: 'Index Advisor',
    languages: 'Java, MySQL',
    tools: 'Git/GitHub, Sublime, Cyberduck',
    dates: 'April 2019 - June 2019',
    class: 'Database Management Systems Implementation class (CSC468)',
    links: [['Index Advisor code on GitHub', 'https://github.com/NeimaYeganeh/dbms']],
    description: `Modified an open-source database in a group of four to add the Index Advisor feature. Index Advisor
      reads from a log of INSERT statements (MySQL) for a given table and advises an index to make on the table. We
      tested the feature using personal scripts that created mass unique INSERT statements.`,
  },
  {
    title: 'Soccer Shop',
    languages: 'Java, MySQL',
    tools: 'Git/GitHub, Sublime, Cyberduck',
    dates: 'January 2019 - March 2019',
    class: 'Introduction to Database Systems class (CSC365)',
    links: [['Soccer Shop code on GitHub', 'https://github.com/NeimaYeganeh/SoccerShop']],
    description: `In a group of four, we designed a relational database that would accomodate an online soccer shop.
      We created command-line scripts for the user to interact with the database, since this was a databases class
      not a web development class.`,
    photos: [], //
  },
  {
    title: 'WeEat',
    languages: 'JavaScript/jQuery, HTML, CSS',
    tools: 'Firebase, Git/GitHub, Brackets (IDE), Cyberduck, AdobeXD',
    dates: 'April 2019 - June 2019',
    class: 'Introduction to Software Engineering class (CSC307)',
    links: [
      ['WeEat live website', 'https://weeat-c73e4.firebaseapp.com'],
      ['WeEat code on GitHub', 'https://github.com/NeimaYeganeh/WeEat']
    ],
    description: `Designed and implemented a web app in a group of six that connects people with opportunities
      for free food in their area. Before creating the app itself, we wrote user stories, came up with user requirements,
      and used modeling tools to design the UI. We utilized feedback on our design and functionality that we received from
      friends/classmates to revise our design before implementing it in code.`,
    photos: ['./resources/WeEatAdminPanel.png'],
  },
]

function addProjects() {
  // loop through all the projects
  // required: title (str), description (str)
  // optional: languages (str), tools (str), dates (str), class (str), link (string|array), photos (array of str)
  // for each project, use document.createElement to create a new div with class="section-container"
  // add each one into the end of (but still inside) #projects-div
  // BE SURE TO USE _blank TO OPEN LINKS IN NEW TAB
  let projectsContainer = $('#projects-div');
  for (let i=0; i<projects.length; i++) {
    addProject(projects[i], projectsContainer);
  }
}

function addProject(project, projectsContainer) {
  let projectContainer = document.createElement('div');
  projectContainer.classList = 'section-container';

  // project container contains title/arrow container
  let titleContainer = document.createElement('div');
  titleContainer.classList = 'project-title-container';
  projectContainer.append(titleContainer);

  // // title container has title and dropdown arrow
  // let titleElement = document.createElement('div');
  // titleElement.innerText = project.title;
  // titleContainer.append(titleElement);

  // add dropdown arrow to title container

  titleContainer.innerHTML = `
    <h2 class="project-title" style="display:inline;">
      ${project.title}
    </h2>
    <div onclick="toggleProjectInfo(event)" class="dropdown-icon-container" style="display:inline; float:right;">
      <i class="fas ${caretLeft}"></i>
    </div>
  `;

  // project container contains info container
  let infoContainer = document.createElement('div');
  infoContainer.classList = 'project-info-container';
  infoContainer.style.display = 'none';
  infoContainer.style.paddingTop = '10px';
  projectContainer.append(infoContainer);
  
   
  let languagesElement = document.createElement('div');
  if (project.languages) {
    languagesElement.innerHTML = '<i>Languages:</i>&nbsp;&nbsp;' + project.languages;
    infoContainer.append(languagesElement);
  }
  
  let toolsElement = document.createElement('div');
  if (project.tools) {
    toolsElement.innerHTML = '<i>Tools:</i>&nbsp;&nbsp;' + project.tools;
    infoContainer.append(toolsElement);
  }

  let datesElement = document.createElement('div');
  if (project.dates) {
    datesElement.innerHTML = '<i>Dates:</i>&nbsp;&nbsp;' + project.dates;
    infoContainer.append(datesElement);
  }

  let classElement = document.createElement('div');
  if (project.class) {
    classElement.innerHTML = '<i>Class:</i>&nbsp;&nbsp;' + project.class;
    infoContainer.append(classElement);
  }

  let linksElement = document.createElement('div');
  if (project.links) {
    let str = '<i>Link(s):</i>';
    for (let i=0; i<project.links.length; i++) {
      str += `&nbsp;&nbsp;<a href="${project.links[i][1]}" target="_blank">${project.links[i][0]}</a>`
    }
    linksElement.innerHTML = str;
    infoContainer.append(linksElement);
  }

  let descriptionElement = document.createElement('div');
  if (project.description) {
    descriptionElement.innerHTML = '<i>Description:</i>&nbsp;&nbsp;' + project.description;
    infoContainer.append(descriptionElement);
  }

  let videoElement = document.createElement('div');
  if (project.video) {
    videoElement.innerHTML = `<video controls width="100%">
        <source src="${project.video}" type="video/mp4">
      </video>`;
    infoContainer.append(videoElement);
  }

  let photosElement = document.createElement('div');
  if (project.photos) {
    console.log(project, project.photos)
    let str = '';
    for (let i=0; i<project.photos.length; i++) {
      str += ` <img src="${project.photos[i]}" style="max-width:100%;"/>`
    }
    photosElement.innerHTML = str;
    infoContainer.append(photosElement);
  }

  projectsContainer.append(projectContainer);
}

function toggleProjectInfo(event) {
  let icon = event.target;
  let projectSectionContainer = icon.closest('.section-container');
  let projectInfoContainer = projectSectionContainer.getElementsByClassName('project-info-container')[0];

  if (icon.classList.contains(caretDown)) { // close the info div
    icon.classList.remove(caretDown);
    icon.classList.add(caretLeft);
    projectInfoContainer.style.display = 'none';
  } else { // open the info div
    icon.classList.remove(caretLeft);
    icon.classList.add(caretDown);
    projectInfoContainer.style.display = 'block';
  }
}