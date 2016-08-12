var bio = {
	'name' : 'Daria Alekseeva',
	'age' : 26,
	'role' : 'Data Analyst',
	'contacts' : {
		'email' : 'alekseevadd@gmail.com',
		'location' : 'Greater London',
		'GitHub' : 'https://github.com/DariaAlekseeva',
		'RPubs' : 'https://rpubs.com/Daria',
		'phone' : '07426711537'
	}, 
	'welcome message' : 'I am excited to start my career',
	'photo' : 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/09e/2e2/31f95b4.jpg',
	'skills' : ['Python', 'R', 'Exploratory Data Analysis', 'Statistical Data Analysis', 'Data Cleaning', 'Data Wrangling', 'Machine Learning models', 'Basic HTML', 'Basic CSS', 'SQL', 'MongoDB', 'Data Visualization', 'D3.js', 'Excel', 'Presentations'],
	'summary' : 'I’m excited to start my career as Data Analyst because I like to improve life around me, find hidden explanations and understand patterns in data. I find thrilling not only to explore data on the surface but also uncovering the story behind the data. I’m coming from financial background. While working in Client Business Department in bank I was always excited about tasks require analytical skills and used in-house software or Excel to perform analysis on bank customer database to find out trends in clients’ choices and needs. In Project Finance Department it was essential to analyze clients’ financial condition using financial statements. In that time my other responsibility was to prepare presentations of projects and present them to managers. I enjoy analysis process since I create a complete, structured and logically built project from raw data. Presenting is also exciting because it allows me to bring my message to the audience and share my findings. I started my journey of acquiring the most essential of Data Analyst skills like data wrangling, programming skills (python, R), statistics, SQL, visualization etc. I took various online Data Science classes. These classes are either taught by industry leaders like Facebook, Google, MongoDB or by respected academic institutions like Johns Hopkins University and Massachusetts Institute of Technology. I feel lucky having an opportunity to join Data Science community and develop myself in this field.'
}


var work = {
	'jobs' : [
		{ 
			'employer' : 'Udacity',
	 		'title' : 'Udacity Code Reviewer',
	 		'city' : 'London, UK',
	 		'years' : 'from 01.2015',
	 		'description' : 'I am one of the very first Udacity Code Reviewers, where I review student project submissions. For each submission, I do both a thorough code review and project evaluation. I strive to give actionable and helpful feedback to students while also improving my code reviewing skills at the same time.'
		},
		{
			'employer' : 'VTB24',
			'title' : 'Head of Client Business, Corporate Business Division',
			'city' : 'Moscow, Russia',
			'years' : '11.2013 - 03.2014',
			'description' : 'high level negotiations with costumer to maintain loan, bank guarantee and LC portfolio within TCB and VTB 24 integration period, conflict solution with customers within TCB and VTB 24 integration period, completion of corporate business integration process, Bank corporate products presentation to costumer, analysis of loan projects and financial condition of potential borrowers, preparation of credit and bank guarantee memoranda for Credit Committee, project agreements, financial borrower conditions and obligations monitoring, interaction with appraisers, evaluation agreements’ negotiation, negotiation of individual contracts and tariffs, drafting loan, mortgage and guarantees agreements, weekly analytics of dynamics in deposit portfolio, costumers’ account balance and service income, analytical reports preparation, weekly control of meeting the quarterly Division targets, creation management reporting forms for the Division, distribution customer service areas among employees, daily fulfillment pursuance execution control.'
		},
		{
			'employer' : 'TransCreditBank',
			'title' : 'Analyst Assistant, Project Manager',
			'city' : 'Moscow, Russia',
			'years' : '02.2012 - 10.2013',
			'description' : 'project coordination and planning, projects terms negotiation with clients, participation in investment deals, preparation of materials’ to the customer’s Board of Directors, drafting loan, mortgage, guarantee and consultancy agreements, internal communication realization, necessary for project work, executive analytic report preparation, principal, interest and fee payments control, project agreements monitoring and pledge insurance contracts validation, leasing, real estate and industry projects management, ABS Diasoft, Oracle user, сommunicating with legal, accounting, treasury department during planning and execution of projects, project documentation and maintenance, quarterly borrower financial condition monitoring , key ratio calculations, loan agreements conditions and covenants monitoring, internal and external document preparation.'
		},
		{
			'employer' : 'TransCreditBank',
			'title' : 'Client Manager, Corporate Business Department',
			'city' : 'Moscow, Russia',
			'years' : '10.2010 – 12.2011',
			'description' : 'initial negotiations with customer, presentation of bank product line to the customers, full customer service, drafted credit memorandum to be submitted to the Bank Credit Committee; prepared lending decisions and loan agreements, issued credits; fully supported customer within post issuance period, monitored payment, provided re-lending.'
		},
		{
			'employer' : 'Embassy of Russia in Peru',
			'title' : 'Head of Administrative Department, Personal Assistant to the Ambassador',
			'city' : 'Lima, Peru',
			'years' : '10.2010 – 12.2011',
			'description' : 'managed documentation and provided full administrative support to the Ambassador; provided coordination between Embassy and senior delegations within APEC Peru 2008.'
		}
	]	
}

var education = {
	'schools' : [
	 	{
		'name' : 'University by Industry (Udacity)',
		'years' : '2014 - 2015',
 		'city' : 'USA, online from London',
 		'degree' : 'Data Analyst Nanodegree'
 		}, 
 		{
		'name' : 'Finance University under the Government of the Russian Federation',
		'years' : '2011 - 2014',
 		'city' : 'Moscow',
 		'degree' : 'Bachelor of Economics, Finance and Credit'
 		}, 
 		{
 		'name' : 'Moscow Finance and Production Academy',
		'years' : '2007 - 2011',
 		'city' : 'Moscow',
 		'degree' : 'Bachelor of Management'
		},
		{
 		'name' : 'Russian Ministry of Foreign Affairs College',
		'years' : '2005 - 2007',
 		'city' : 'Moscow',
 		'degree' : 'Documentation and Archive specialist'
		}
	]
}

var projects = {
	"projects": [		
		{'title': 'New York Subway Ridership Data Analysis',
		 'description' : 'I did data wrangling, visualization and statistical analysis using python pandas and numpy packages. I found out whether more people ride metro in rainy or not rainy days, built model to predict ridership and evaluated the model.',
		 'years' : '2015',
		 'url' : 'http://nbviewer.ipython.org/github/DariaAlekseeva/Analyzing_NYC_Subway_Dataset/blob/master/NYC_Subway.ipynb',
		 'images' : ['https://www.ixiacom.com/sites/default/files/2016-08/three-architectures.png', 'http://www.codingthearchitecture.com/images/book/software-architecture-is-a-platform-for-conversation-1.png']},
		{'title': 'Enron Fraud Detection',
		 'description' : 'I used python and applied machine learning and visualization skills to build an algorithm to identify Enron Employees who may have committed fraud, based on the public Enron financial and email data set.',
		 'years' : '2015',
		 'url' : 'http://github.com/DariaAlekseeva/Enron_Dataset',
		 'images' : ['https://www.ixiacom.com/sites/default/files/2016-08/three-architectures.png', 'http://www.codingthearchitecture.com/images/book/software-architecture-is-a-platform-for-conversation-1.png']},
		 {'title': 'Global Economic Development and Urbanization',
		  'description' : 'I used R to pre-process The World Bank data and used D3.js, HTML and CSS to create a dynamic and interactive visualization. This visualization tells an interesting story about world urbanization and economic growth in the last 50 years. ',
		 'years' : '2015',
 		 'url' : 'http://bl.ocks.org/DariaAlekseeva/fde6999e69da2158ade6',
		 'images' : ['https://www.ixiacom.com/sites/default/files/2016-08/three-architectures.png', 'http://www.codingthearchitecture.com/images/book/software-architecture-is-a-platform-for-conversation-1.png']},
		 {'title': 'Red and White Wine Quality',
		 'description' : 'I used R code and Markdown techniques to analyse characteristics of wine (input variables)  to predict wine quality (output variable) .',
		 'years' : '2015',
 		 'url' : 'http://rpubs.com/Daria/57835',
		 'images' : ['https://www.ixiacom.com/sites/default/files/2016-08/three-architectures.png', 'http://www.codingthearchitecture.com/images/book/software-architecture-is-a-platform-for-conversation-1.png']},
		 {'title': 'East London Map Data Analysis',
		 'description' : 'I did data wrangling using python and MongoDB to unify data from Open Street Map  and explore it via queries. ',
		 'years' : '2015',
		 'url' : 'http://nbviewer.ipython.org/github/DariaAlekseeva/OpenStreetMap_Project_Udacity/blob/master/Mongo_Database.ipynb',
		 'images' : ['https://www.ixiacom.com/sites/default/files/2016-08/three-architectures.png', 'http://www.codingthearchitecture.com/images/book/software-architecture-is-a-platform-for-conversation-1.png']},
		 {'title': 'Earthquakes: consequences of disasters',
		 'description' : 'I used R to explore data set from The Gapminder and arrive to conclusions about most seismoactive countries.',
		 'years' : '2015',
 		 'url' : 'https://rpubs.com/Daria/52549',
		 'images' : ['https://www.ixiacom.com/sites/default/files/2016-08/three-architectures.png', 'http://www.codingthearchitecture.com/images/book/software-architecture-is-a-platform-for-conversation-1.png']}]
};

projects.display = function display() {
	var _projects = projects.projects;

	for (index in _projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", _projects[index].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", _projects[index].years));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", _projects[index].description));

		for (imgIdx in _projects[index].images) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", _projects[index].images[imgIdx]));	
		}	
	}
}

projects.display();


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail);
	 $("#header").append(formattedWelcomeMsg);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var _skill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(_skill);
	}
}

var displayWork = function displayWork() {
	for (index in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var employer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		var title = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		$(".work-entry:last").append(employer + title);
	
		var dates = HTMLworkDates.replace("%data%", work.jobs[index].years);
		$(".work-entry:last").append(dates);	
	
		var desc = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(desc);	
	}
};

displayWork();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

var inName = function inName() {
	var names = bio.name.split(" ");
	names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	
	return names.join(" ");
}

$("#mapDiv").append(googleMap);
