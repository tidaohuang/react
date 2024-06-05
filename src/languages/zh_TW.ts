import { AppViewModel } from "../models/AppViewModel";

export const zh_TW: AppViewModel = {
	username: "黃提道",
	summary: "概述",
	working: "工作經歷",
	projects: "專案成果",
	education: "學習歷程",
	contact: "聯絡方式",
	SectionSummary: {
		commonHeader: "我創建令你滿意的網頁及服務—準時交付且根據預算",
		items: [
			{
				text: "3 年",
				meta: "實務經驗"
			},
			{
				text: "React, Node.js & ASP.NET CORE",
				meta: "核心技術"
			},
			{
				text: "新竹",
				meta: "地點"
			},
			{
				text: "中文 & 英文",
				meta: "語言"
			}
		],
		summaryHeader: "能力概述",
		descriptions: [
			"專注的全端開發人員：在React方面具有札實的技能，並在後端擁有Nest.js/ASP.NET Core的專業知識。",
			"積極的雲端參與者：中級AWS使用者，善於使用CloudFormation、Lambda、S3和DynamoDB。",
			"結果導向的Docker開發者：利用Docker支持微服務開發。",
			"致力於設計與部署：在BPM系統設計、實施和部署方面具有實踐經驗。"
		],
		certificationHeader: "認證",
		certItems: [{
			name: "AWS Certified Cloud Practitioner",
			img: "/certificates/aws-ccp.png",
			meta: [
				"考取日期: 2024-04-03",
				"到期日: 2027-04-03",
				"認證編號: 8365b8fbee3246138f0fb20c8be1cb8a"
			]
		}]
	},
	SectionWorking: {
		commonHeader: "工作經歷",
		items: [
			{
				title: "駐廠旺宏電子晶圓五廠 軟體開發工程師",
				company: "緯創軟體股份有限公司",
				date: "May 2023 - Now",
				jobs: [
					"主導系統重構，將BPM從ASP轉換到ASP.NET MVC。",
					"推出電子表單並製作自動化工具，加速業務流程。",
					"製作客製化C#套件，滿足客戶需求，包括資料驗證和資料庫操作模組。"
				]
			},
			{
				title: "資訊與自動化中心 MIS工程師",
				company: "創未來科技股份有限公司",
				date: "Apr 2021 - May 2023",
				jobs: [
					"建立電子商務平台，並通過Power Automate和自定義API打造BPM系統。",
					"通過Fortigate解決方案增強了公司的網絡基礎設施。",
					"幫助公司取得第一年ISO27001認證。"
				]
			},
			{
				title: "數據部門 IT實習生",
				company: "海華科技股份有限公司",
				date: "Sept 2018 - June 2020",
				jobs: [
					"使用C#和MS SQL Server管理排程系統。",
					"透過統計工具檢測生產線模式的偏差。",
					"利用Simplex和Poisson Process微調製程參數設置。"
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
				description: "一個基於NoSQL的BPM API服務，使用Nest.js構建，其包含核心業務審批規則，以滿足公司的需求。",
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
				description: "這個APP使用Nest.js和AWS DynamoDB開發，練習實作新的技術框架及資料庫技術。熟能生巧。",
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
				description: "這是一款為我的教會小組創建的網頁遊戲，設計簡單易玩且非常有趣。",
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
				description: "透過Udemy課程《Complete Guide to Building an App with .NET Core and React》開發的活動管理網頁APP。",
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
		commonHeader: "學位",
		schools: [{
			name: "國立清華大學",
			degree: "工業工程與工程管理學系 學士班",
			date: "Sept 2016 - June 2020"
		}],
		anotherHeader: "已註冊的Udemy課程",
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
		commonHeader: "跟我聊聊潛在合作機會",
		subHeader: "傳訊息給我，我將於48小時內連繫您",
		meta: "或者透過下列方式聯繫我",
		btnText: "送出",
		name: "姓名",
		email: "Email",
		message: "您的訊息",
		btnDownload: "下載PDF簡歷"
	}
}