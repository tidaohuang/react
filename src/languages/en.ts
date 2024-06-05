import { AppViewModel } from "../models/AppViewModel";

export const en: AppViewModel = {
	username: "Tidao Huang",
	summary: "Summary",
	working: "Working Experience",
	projects: "Projects",
	education: "Education",
	contact: "Contact",
	SectionSummary: {
		commonHeader: "I create delightful web applications—on time and within budget",
		items: [
			{
				text: "3 years",
				meta: "Experience"
			},
			{
				text: "React, Node.js & ASP.NET CORE",
				meta: "Core Tech Stack"
			},
			{
				text: "HsinChu",
				meta: "Location"
			},
			{
				text: "Mandarin & English",
				meta: "Languages"
			}
		],
		summaryHeader: "Summary of Qualifications",
		descriptions: [
			"Dedicated Full Stack Developer: Solid skills in React and back-end expertise in Nest.js and ASP.NET Core.",
			"Self-Motivated Cloud Participant: Intermediate-level AWS user have good command of CloudFormation, Lambda, S3, and DynamoDB.",
			"Result-Driven Docker Developer: Utilizing Docker to support microservice development for side projects.",
			"Devoted Designer and Deployer: Hands-on experience in BPM system design, implementation, and deployment."
		],
		certificationHeader: "Certification",
		certItems: [{
			name: "AWS Certified Cloud Practitioner",
			img: "/certificates/aws-ccp.png",
			meta: [
				"Active date: 2024-04-03",
				"Expiration date: 2027-04-03",
				"Validation number: 8365b8fbee3246138f0fb20c8be1cb8a"
			]
		}]
	},
	SectionWorking: {
		commonHeader: "Working Experience",
		items: [
			{
				title: "On-Site Software Engineer at Macronix International Co., Ltd.",
				company: "Wistron ITS, Inc.",
				date: "May 2023 - Now",
				jobs: [
					"Spearheaded system refactoring, transitioning BPM from ASP to ASP.NET MVC.",
					"Launched Live E-Forms and crafted automation aids to accelerate business processes.",
					"Crafted bespoke C# packages catering to client needs, encompassing validation and data context functionalities.",
				]
			},
			{
				title: "MIS Engineer at the Information & Automation Center ",
				company: "Tron Future Technology, Inc.",
				date: "Apr 2021 - May 2023",
				jobs: [
					"Constructed an E-Commerce platform and crafted a BPM system through Power Automate and custom APIs.",
					"Enhanced the company's network infrastructure with Fortigate solutions.",
					"Secured the company's 1st ISO27001 certification."
				]
			},
			{
				title: "Intern at the Department of Information Technology",
				company: "AzureWave Technology, Inc., Taipei, Taiwan",
				date: "Sept 2018 - June 2020",
				jobs: [
					"Managed the scheduling system using C# and MS SQL Server.",
					"Detected deviations in production line patterns through statistical tools.",
					"Fine-tuned process parameter settings utilizing Simplex and Poisson processes."
				]
			}
		]
	},
	SectionProjects: {
		commonHeader: "Projects",
		projects: [
			{
				img: "",
				name: "BPM Backend Engine",
				date: "2024",
				description: "A NoSQL-based BPM API service built with Nest.js, incorporating core business approval rules to meet the company's needs.",
				links: [],
				tags: [
					{
						name: "AWS",
						color: "yellow"
					},
					{
						name: "DynamoDb",
						color: "yellow"
					},
					{
						name: "Nestjs",
						color: "green"
					},
					{
						name: "RabbitMQ",
						color: "pink"
					},
					{
						name: "Microservice",
						color: "pink"
					},
				]
			},
			{
				img: "",
				name: "Coupon APP",
				date: "2024",
				description: "This app, developed using Nest.js and AWS DynamoDB, serves as a starting point for me to work with new frameworks and databases. Practice makes perfect.",
				links: [],
				tags: [
					{
						name: "AWS",
						color: "yellow"
					},
					{
						name: "DynamoDb",
						color: "yellow"
					},
					{
						name: "Nestjs",
						color: "green"
					},
					{
						name: "React",
						color: "lightblue"
					},
					{
						name: "Microservice",
						color: "pink"
					},
				]
			},
			{
				img: "",
				name: "Ice Breaker Game Web App",
				date: "2024",
				description: "It's a custom web game created for my church group, designed to be easy to play and highly enjoyable.",
				links: [],
				tags: [
					{
						name: "React",
						color: "lightblue"
					},
					{
						name: "ASP.NET CORE",
						color: "green"
					},
					{
						name: "Interactive",
						color: "pink"
					}
				]
			},
			{
				img: "",
				name: "Reactivity App",
				date: "2023",
				description: "An event management app developed through the Udemy course \"Complete Guide to Building an App with .NET Core and React.\"",
				links: [
					{
						text: "Udemy",
						url: "https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/"
					}
				],
				tags: [
					{
						name: "React",
						color: "lightblue"
					},
					{
						name: "ASP.NET CORE",
						color: "green"
					}
				]
			}
		]
	},
	SectionEducation: {
		commonHeader: "Degree",
		schools: [{
			name: "National Tsing Hua University (NTHU), Hsinchu, Taiwan",
			degree: "Bachelor of Science in Industrial Engineering and Engineering Management (IEEM) ",
			date: "Sept 2016 - June 2020"
		}],
		anotherHeader: "Enrolled Udemy Courses",
		tags: [
			{
				name: "All",
				color: 'bg-blue'
			},
			{
				name: "TypeScript",
				color: 'bg-light-blue'
			},
			{
				name: "React",
				color: 'bg-light-blue'
			},
			{
				name: "Nestjs",
				color: 'bg-green'
			},
			{
				name: "ASP.NET CORE",
				color: 'bg-green'
			},
			{
				name: "AWS",
				color: 'bg-yellow'
			},
			{
				name: "SignalR",
				color: 'bg-pink'
			},
			{
				name: "RabbitMQ",
				color: 'bg-pink'
			},
			{
				name: "Microservice",
				color: 'bg-pink'
			},
		],
		courses: [
			{
				name: "AWS & Typescript Masterclass - CDK, Serverless, React",
				url: "https://www.udemy.com/course/aws-typescript-cdk-serverless-react/",
				tags: ["AWS", "React"]
			},
			{
				name: "TypeScript 5 for developers",
				url: "https://www.udemy.com/course/typescript-full-stack-programming/",
				tags: ["TypeScript"]
			},
			{
				name: "NestJS Zero to Hero - Modern TypeScript Back-end Development",
				url: "https://www.udemy.com/course/nestjs-zero-to-hero/",
				tags: ["Nestjs"]
			},
			{
				name: "Master NestJS a Node.js Framework 2024",
				url: "https://www.udemy.com/course/master-nestjs-the-javascript-nodejs-framework/",
				tags: ["Nestjs"]
			},
			{
				name: "NestJS Microservices: Build & Deploy a Scaleable Backend",
				url: "https://www.udemy.com/course/nestjs-microservices-build-deploy-a-scaleable-backend/",
				tags: ["Nestjs", "Microservice"]
			},
			{
				name: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
				url: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/",
				tags: ["AWS"]
			},
			{
				name: "Amazon DynamoDB Data Modeling for Architects & Developers",
				url: "https://www.udemy.com/course/dynamodb-data-modeling/",
				tags: ["AWS"]
			},
			{
				name: "AWS Lambda For The .NET Developer",
				url: "https://www.udemy.com/course/aws-lambda-dotnet/",
				tags: ["AWS", "ASP.NET CORE"]
			},
			{
				name: "Complete guide to building an app with .Net Core and React",
				url: "https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/",
				tags: ["ASP.NET CORE", "React"]
			},
			{
				name: "AppSettings and Secrets in ASP.NET Core",
				url: "https://www.udemy.com/course/appsettings-and-secrets-in-aspnet-core/",
				tags: ["ASP.NET CORE"]
			},
			{
				name: "Master ASP.NET Core Identity: Authentication & Authorization",
				url: "https://www.udemy.com/course/complete-guide-to-aspnet-core-identity/",
				tags: ["ASP.NET CORE"]
			},
			{
				name: "ASP.NET Core - SOLID and Clean Architecture",
				url: "https://www.udemy.com/course/aspnet-core-solid-and-clean-architecture-net-5-and-up/",
				tags: ["ASP.NET CORE"]
			},
			{
				name: "ASP.NET Core Test Driven Development in ASP.NET Core - The Handbook",
				url: "https://www.udemy.com/course/test-driven-development-in-net-core-the-handbook/",
				tags: ["ASP.NET CORE"]
			},
			{
				name: ".NET Core Microservices - The Complete Guide (.NET 8 MVC)",
				url: "https://www.udemy.com/course/net-core-microservices-the-complete-guide-net-6-mvc/",
				tags: ["ASP.NET CORE", "Microservice"]
			},
			{
				name: "Secure .Net Microservices with IdentityServer4 OAuth2,OpenID",
				url: "https://www.udemy.com/course/secure-net-microservices-with-identityserver4-oauth2openid/",
				tags: ["ASP.NET CORE", "Microservice"]
			},
			{
				name: ".NET 8 Microservices: DDD, CQRS, Vertical/Clean Architecture",
				url: "https://www.udemy.com/course/microservices-architecture-and-implementation-on-dotnet/",
				tags: ["ASP.NET CORE", "Microservice"]
			},
			{
				name: "Microservices Observability, Resilience, Monitoring on .Net",
				url: "https://www.udemy.com/course/microservices-observability-resilience-monitoring-on-net/",
				tags: ["ASP.NET CORE", "Microservice"]
			},
			{
				name: "Getting Started .NET Core Microservices RabbitMQ",
				url: "https://www.udemy.com/course/getting-started-net-core-microservices-rabbitmq/",
				tags: ["ASP.NET CORE", "RabbitMQ"]
			},
			{
				name: "SignalR Mastery: Become a Pro in Real-Time Web Development",
				url: "https://www.udemy.com/course/signalr-mastery/",
				tags: ["ASP.NET CORE", "SignalR"]
			},
			{
				name: "SignalR - The Complete Guide (with real world examples)",
				url: "https://www.udemy.com/course/signalr-the-complete-guide/",
				tags: ["ASP.NET CORE", "SignalR"]
			}
		]
	},
	SectionContact: {
		commonHeader: "Tell me about your potential opportunity",
		subHeader: "send me a message then I’ll get back to you within 48 hours",
		meta: "or Contact me directly through ",
		btnText: "Send Message",
		name: "Name",
		email: "Email",
		message: "Message",
		btnDownload: "PDF CV Download"
	}

}