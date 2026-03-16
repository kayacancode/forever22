"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    name: "TENKEN",
    team: "Ricky",
    description: "Auto generate MCP endpoints based on your sessions with LLMs",
    fullDescription: "Auto generate MCP endpoints based on your sessions with LLMs",
    geminiUsage: "Extraction, RAG Embeddings, convex workflows",
    categories: ["Ready to Ship", "Most Unexpected Use of Gemini"],
    complexity: 5,
    color: "bg-cyan-500",
    github: "https://github.com/tenkenco",
    demo: "https://tenken.co",
    video: null,
    image: "/hackathon-screenshots/tenken.png",
  },
  {
    name: "OWNIT",
    team: "Rick Valdez",
    description: "Turns everyday spending into investment intelligence. Snap a photo of any branded product and get live stock data.",
    fullDescription: "OwnIt turns your everyday spending into investment intelligence. Snap a photo of any branded product — a Starbucks cup, Nike shoes, a Celsius can — and our AI instantly identifies the company, pulls live stock data, and generates a consumer-friendly investment analysis. Connect your location history, PayPal transactions, and brokerage account to build a personalized \"spending portfolio\" that shows which public companies you're already loyal to and how they're performing. It's the bridge between being a consumer and becoming an investor — because if you're already buying their products, maybe you should own their stock too.",
    geminiUsage: "Gemini is the core AI engine powering vision-powered brand identification and consumer-friendly investment analysis generation. When you upload a photo, Gemini analyzes the image, identifies the brand, and maps it to the publicly traded parent company and stock ticker.",
    categories: ["Ready to Ship", "Most Unexpected Use of Gemini"],
    complexity: 4,
    color: "bg-pink-500",
    github: null,
    demo: null,
    video: null,
    image: null,
  },
  {
    name: "AIFORALL",
    team: "Suemee Shin, Mathew Ye",
    description: "Free accelerated platform that empowers students to understand and apply complex AI concepts in a single day.",
    fullDescription: "Advanced AI and machine learning research is currently gatekept by expensive courses and dense academic language, shutting out young innovators. AIforALL is a free, accelerated platform that empowers high school and college students to understand and apply complex AI concepts in a single day without needing a paid instructor. We built an interactive learning engine powered by Gemini that translates cutting-edge ML research into personalized, digestible modules.",
    geminiUsage: "Interactive learning engine powered by Gemini that translates cutting-edge ML research into personalized, digestible modules.",
    categories: ["Ready to Ship", "Most Unexpected Use of Gemini"],
    complexity: 3,
    color: "bg-blue-600",
    github: null,
    demo: null,
    video: null,
    image: null,
  },
  {
    name: "SUPPLYTICS",
    team: "Alex, Elena, Ana",
    description: "Accessible supplement comparison and builder tool for all.",
    fullDescription: "Accessible supplement comparison and builder tool for all.",
    geminiUsage: "Used Vertex AI Studio New build (preview)",
    categories: ["Most Artistic"],
    complexity: 3,
    color: "bg-purple-500",
    github: null,
    demo: "https://genai-app-supplyticsmarketplace-1-1773517596460-309675312802.us-central1.run.app/?key=5rdOnaCzDNUYd2i6cIgehBdnEVO8lAXg",
    video: null,
    image: "/hackathon-screenshots/supplytics.png",
  },
  {
    name: "I HEAR YOU",
    team: "Sri Lasya S",
    description: "App that helps people who can listen but sometimes could not process quite right in certain situations.",
    fullDescription: "I hear you is an app where it helps people who can listen but sometimes could not process quite right in certain situations like crowd spaces, people who are shy or nervous in networking events or in general conversation (in other words this can be referred as Auditory Processing Disorder).",
    geminiUsage: "Used to build the prototype.",
    categories: ["Best Chicago Energy"],
    complexity: 3,
    color: "bg-teal-500",
    github: "https://github.com/sri-lasya-s/ihearyou/",
    demo: "https://genai-app-ihearyou-1-1773514999423-59133691749.us-central1.run.app/?key=l4qZzDJ1gjz6IMObQiRo7DIK7Wg3iI3Y",
    video: null,
    image: "/hackathon-screenshots/i-hear-you.png",
  },
  {
    name: "THE 77",
    team: "Desmond Baker",
    description: "AI-powered personality quiz that matches your vibe to one of Chicago's 77 community areas.",
    fullDescription: "The 77 is an AI-powered personality quiz that matches your vibe to one of Chicago's 77 official community areas. Instead of browsing neighborhoods, the city finds YOU — answer 5 questions about how you move through the world, and Gemini generates a rich, personalized neighborhood profile card grounded in real ACS census data. Each result features a unique AI-written narrative, must-do experiences, a \"Chicago Spirit Animal,\" hood anthem, and a visual demographic breakdown.",
    geminiUsage: "Gemini 2.0 Flash powers the core experience — after the quiz matching algorithm identifies your top neighborhood match, Gemini receives the user's personality traits, quiz answers, the neighborhood's cultural profile, AND real ACS 2016-2020 census data to generate a deeply personalized neighborhood portrait.",
    categories: ["Best Chicago Energy", "Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 3,
    color: "bg-orange-500",
    github: null,
    demo: null,
    video: "https://drive.google.com/file/d/1oRZm5dXbpHZQR07CDF0OKGsCEO5215bJ/view",
    image: null,
  },
  {
    name: "LET'S JAM",
    team: "Chase McCaskill",
    description: "Platform to connect people with ideas to people with skills and vice versa.",
    fullDescription: "A platform to connect people with ideas to people with skills and people with skills to people with ideas.",
    geminiUsage: "Built with Gemini.",
    categories: ["Best Chicago Energy"],
    complexity: 3,
    color: "bg-red-400",
    github: null,
    demo: null,
    video: null,
    image: null,
  },
  {
    name: "MOONSTRUCK",
    team: "Leah Kim, Jaemin Yang",
    description: "Relationship companion app that learns your patterns, attachment style and history across every relationship.",
    fullDescription: "Moonstruck is a relationship companion app that learns your patterns, attachments style and history across every relationship — so you're never navigating love alone. It gives you \"Em,\" a wise, ever-present friend who helps you understand yourself as much as the person you're falling for.",
    geminiUsage: "Gemini's million-token context lets our AI companion remember a user's full history — every relationship, every pattern, every wound — and Flash's built-in thinking reasons through complex emotions rather than giving generic advice. All through prompt engineering, no fine-tuning.",
    categories: ["Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 4,
    color: "bg-rose-500",
    github: null,
    demo: "https://moonstruck.vercel.app",
    video: "https://drive.google.com/file/d/1tKyY9eZQU5vMYInMQFx2I6bVRVPWfn7w/view",
    image: "/hackathon-screenshots/moonstruck.png",
  },
  {
    name: "GHAR",
    team: "Gargi Sathi, Vaishnavi Jadhav, Sanjana Venkatesh",
    description: "AI-powered memory companion that helps people reconnect with meaningful moments using everyday sensory triggers.",
    fullDescription: "GHAR is an AI-powered memory companion that helps people reconnect with meaningful moments from their past using everyday sensory triggers like sound, location, and time. By analyzing inputs such as audio, photos, and personal history, GHAR identifies memories associated with those triggers and recreates the feeling of those moments through visuals, sounds, and contextual insights. It then turns nostalgia into action by recommending experiences you can relive today.",
    geminiUsage: "AI-powered memory analysis and recommendation engine.",
    categories: ["Most Artistic"],
    complexity: 5,
    color: "bg-amber-500",
    github: null,
    demo: null,
    video: null,
    image: null,
  },
  {
    name: "CHECKPOINT",
    team: "Jeremy Green, Naman Pandey",
    description: "Lovable for games! Map gaming customizations to the end product.",
    fullDescription: "Lovable for games! A platform that allows you to map gaming customizations to the end product.",
    geminiUsage: "Used Gemini to build the app and also Gemini API to map gaming customizations to the end product.",
    categories: ["Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 4,
    color: "bg-green-500",
    github: "https://github.com/namanpandey13/game-maker",
    demo: "https://github.com/namanpandey13/game-maker",
    video: null,
    image: "/hackathon-screenshots/checkpoint.png",
  },
  {
    name: "HEY NEIGHBOR CHICAGO",
    team: "Sherrod Crum",
    description: "Free AI-powered community resource platform connecting Chicago residents to food assistance, mental health support, jobs, housing, and more.",
    fullDescription: "Hey Neighbor Chicago is a free AI-powered community resource platform connecting Chicago residents to food assistance, mental health support, jobs, housing, financial literacy tools, entrepreneurship resources, education, and tech training, all in one place, organized by life stage, and searchable in plain language. Built for the South Side, the West Side, and every neighborhood in between.",
    geminiUsage: "AI-powered resource matching and plain language search.",
    categories: ["Best Chicago Energy", "Ready to Ship"],
    complexity: 3,
    color: "bg-blue-500",
    github: null,
    demo: "https://genai-app-heyneighborchicago-1-1773519509466-682125704928.us-central1.run.app/?key=yuGJqYhoUoWHhBwI5WoxyFPrDBYNF1dL",
    video: null,
    image: "/hackathon-screenshots/hey-neighbor-chicago.png",
  },
  {
    name: "BREWMATCH",
    team: "Ritika, Celshiya, Aadithan",
    description: "AI-driven mood detection through voice or color selection to recommend a drink from the best nearby café.",
    fullDescription: "People make their best and most high-impact decisions in the morning when mental energy is highest, yet even early in the day, small choices like what coffee to order can add unnecessary cognitive load. MoodBrew addresses this problem by using AI-driven mood detection through voice or color selection to recommend a single drink from the best nearby café.",
    geminiUsage: "Used Gemini 1.5 Pro through Vertex AI to analyze user input from voice or color selections and detect the user's mood. Based on the detected mood, Gemini generates a drink recommendation and retrieves nearby cafés using the Google Maps Places API.",
    categories: ["Best Chicago Energy", "Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 3,
    color: "bg-yellow-600",
    github: null,
    demo: null,
    video: "https://drive.google.com/file/d/10M_C45yNDGcutWLTO7BkzvqexLzP3JfY/view",
    image: null,
  },
  {
    name: "CHIPAWS",
    team: "Arushi, Zecco, Shay",
    description: "Turn charitable action like donating to dogs into LinkedIn badges as reward for generosity.",
    fullDescription: "Every year, 3.3 million dogs enter US shelters, with Chicago operating near or above capacity. At the same time, job seekers are drowning in identical LinkedIn profiles. We turn charitable action, such as donating to dogs, into LinkedIn badges in reward of their generosity.",
    geminiUsage: "AI-powered charitable giving platform.",
    categories: ["Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 4,
    color: "bg-pink-400",
    github: null,
    demo: "https://chi-paws.vercel.app",
    video: null,
    image: "/hackathon-screenshots/chipaws.png",
  },
  {
    name: "CARECOMPASS",
    team: "Phillips, Ayomide, Vincent",
    description: "Chicago-focused healthcare provider matching app that helps residents find the right doctor or hospital.",
    fullDescription: "CareCompass is a Chicago-focused healthcare provider matching app that helps residents find the right doctor or hospital for their specific needs. Users enter their symptoms, age, insurance type, and existing conditions, and the system returns the top three most suitable providers ranked by specialty match, quality scores, and proximity.",
    geminiUsage: "Gemini is the model behind the complex healthcare matching algorithm.",
    categories: ["Best Chicago Energy", "Ready to Ship", "Most Artistic"],
    complexity: 4,
    color: "bg-emerald-500",
    github: "https://github.com/VinnyT456/CareCompass",
    demo: "https://care-compass-sooty.vercel.app/",
    video: null,
    image: "/hackathon-screenshots/carecompass.png",
  },
  {
    name: "FOODMAXXERS ETF",
    team: "Juan David Campolargo, Shweta Shardul",
    description: "Interactive web app that turns Chicago restaurants into a live stock market-style experience.",
    fullDescription: "Chicago Food Market is an interactive web app that turns Chicago restaurants into a live stock market-style experience. It uses restaurant ratings, review volume, and machine learning to find hype-adjusted scoring to help people discover which spots are truly underrated, overrated, or \"blue chip\" favorites.",
    geminiUsage: "Figuring out how to get the data from Google Maps and using Gemini for analysis.",
    categories: ["Best Chicago Energy", "Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 5,
    color: "bg-red-500",
    github: null,
    demo: null,
    video: null,
    image: null,
  },
  {
    name: "AMDION",
    team: "Venkat Roy, Ivan Rulik",
    description: "Minimalist desktop launcher that embeds web apps directly for focused, distraction-free computing.",
    fullDescription: "AMDION is a minimalist desktop launcher built with Electron that embeds web apps (Notion, Spotify, Drive, etc.) directly using BrowserView, bypassing iframe restrictions. It features a clean dark UI with a collapsible sidebar for managing open tabs, quick favorites access, and a task/notes panel.",
    geminiUsage: "For coding the app. And it is also integrated into the AI assistant that observes the computer.",
    categories: ["Ready to Ship"],
    complexity: 3,
    color: "bg-slate-600",
    github: null,
    demo: null,
    video: "https://www.loom.com/share/f74ff1c5ebe94e80bf474571df599d03",
    image: null,
  },
  {
    name: "CLEARCARE",
    team: "Sanjana Waghray, Anshul Dani",
    description: "AI care coordinator for 63M Americans navigating healthcare alone on behalf of a sick or aging family member.",
    fullDescription: "ClearCare is an AI care coordinator for the 63 million Americans navigating the healthcare system alone on behalf of a sick or ageing family member. Upload a hospital discharge summary, and ClearCare instantly translates medical jargon into plain English. Upload a medical bill and ClearCare cross-references every line item against your insurance coverage, flags overbilled charges, and writes the dispute letter for you.",
    geminiUsage: "Powered by Gemini, ClearCare turns the most overwhelming moments of caregiving into clear, confident next steps — in under 30 seconds.",
    categories: ["Ready to Ship", "Most Unexpected Use of Gemini"],
    complexity: 4,
    color: "bg-sky-500",
    github: null,
    demo: null,
    video: "https://www.loom.com/share/57f6b924e03c4dba9871ccbd87b973c6",
    image: null,
  },
  {
    name: "ART LENS",
    team: "J9ylee",
    description: "Mobile concept that helps users discover and learn about artwork through their phone camera.",
    fullDescription: "ArtLens is a mobile concept that helps users discover and learn about artwork through their phone camera. By scanning a piece of art, the app uses AI-powered recognition to instantly identify the work and provide information about the artist, history, and cultural context. Users can save pieces they discover into a personal digital scrapbook.",
    geminiUsage: "Used Deepmind to code and Gemini for the copy and refining the code.",
    categories: ["Most Artistic"],
    complexity: 2,
    color: "bg-violet-500",
    github: "https://github.com/J9ylee/ARTLENS/tree/main",
    demo: null,
    video: null,
    image: "/hackathon-screenshots/art-lens.png",
  },
  {
    name: "CHIQUEST",
    team: "Kaung Myat Naing, Zia Uddin Chowdhury, Devin Liu",
    description: "Gamified Chicago exploration web app that turns visiting city landmarks into an interactive quest experience.",
    fullDescription: "ChiQuest is a gamified Chicago exploration web app that turns visiting city landmarks into an interactive quest experience. Users explore iconic locations like Cloud Gate, Navy Pier, and the Riverwalk to unlock points, badges, and AI-generated pictures powered by Google Vertex AI.",
    geminiUsage: "Used Google Vertex AI with Gemini to power the dynamic content. Gemini generates \"Lucky Quests,\" which are AI-created mini missions tailored for exploring Chicago. Also used to generate AI postcards from user photos.",
    categories: ["Best Chicago Energy", "Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 3,
    color: "bg-lime-500",
    github: "https://github.com/RifatXia/deepmind-hackathon",
    demo: "https://deepmind-hackathon-psi.vercel.app/",
    video: null,
    image: "/hackathon-screenshots/chiquest.png",
  },
  {
    name: "COMPUTER LENSE",
    team: "Mac Cooley",
    description: "Monitor your home remotely using just your current computer - no external cameras needed.",
    fullDescription: "When a person isn't at home to monitor their house, there can be features of their room they want to know. Using Computer Lense, you can achieve the same features using just your current computer. With any computer that one has at home, they can install the software and ask what's happening in the room remotely, over the internet.",
    geminiUsage: "The project queries Gemini for image analysis and text queries.",
    categories: ["Ready to Ship"],
    complexity: 3,
    color: "bg-gray-600",
    github: null,
    demo: null,
    video: null,
    image: null,
  },
  {
    name: "BLOCK X BLOCK",
    team: "Danny & Livio",
    description: "Gives every one of Chicago's 77 community areas the same cultural profile, live data, and resource visibility.",
    fullDescription: "Block x Block gives every one of Chicago's 77 community areas the same cultural profile, live data, and resource visibility that only a handful of neighborhoods typically receive. Pick a neighborhood and get a Gemini-generated narrative, a Nano Banana poster, and real-time data from six City of Chicago SODA APIs.",
    geminiUsage: "Gemini 2.0 Flash generates culturally specific neighborhood narratives. Nano Banana (Gemini Flash Image) generates a unique travel poster for each neighborhood.",
    categories: ["Best Chicago Energy", "Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 3,
    color: "bg-indigo-500",
    github: "https://github.com/DigitalDannyX/chicago-mosaic-stories.git",
    demo: "https://chicago-mosaic-stories.lovable.app",
    video: "https://www.loom.com/share/bf463887bfcf44f191d7b6e6f06bc2d9",
    image: "/hackathon-screenshots/block-x-block.png",
  },
  {
    name: "AIXION AI",
    team: "R.Michael Merritt",
    description: "Decision-intelligence platform that captures, structures, and analyzes decisions over time.",
    fullDescription: "Aixion AI is a decision-intelligence platform that captures, structures, and analyzes the decisions individuals and teams make over time. The system transforms conversations, notes, and documents into a structured decision knowledge graph, enabling users to trace reasoning, understand past assumptions, and identify patterns in outcomes.",
    geminiUsage: "Gemini models were used to analyze unstructured inputs—such as meeting notes, documents, and recorded discussions—and convert them into structured decision data.",
    categories: ["Ready to Ship"],
    complexity: 3,
    color: "bg-cyan-600",
    github: null,
    demo: null,
    video: null,
    image: null,
  },
  {
    name: "ROADRUNNER",
    team: "Julian, Jay, Mehul",
    description: "Mobile app to help classify and label data essential for training vision models.",
    fullDescription: "A mobile app to help us classify and labeled data that is essential for training vision models.",
    geminiUsage: "Yes - used for data classification and labeling.",
    categories: ["Best Chicago Energy", "Most Unexpected Use of Gemini"],
    complexity: 5,
    color: "bg-orange-600",
    github: null,
    demo: null,
    video: "https://drive.google.com/file/d/1phOSypbRtMfRPbQBje7Mo3Jd_s93EUxA/view",
    image: null,
  },
  {
    name: "CHA VOUCHER CONNECT",
    team: "Matt Horowitz, Rachel Kaberon",
    description: "CHA voucher connect platform.",
    fullDescription: "CHA voucher connect platform helping connect Chicago Housing Authority voucher holders with resources.",
    geminiUsage: "Vertex AI",
    categories: ["Best Chicago Energy"],
    complexity: 2,
    color: "bg-blue-400",
    github: null,
    demo: null,
    video: "https://drive.google.com/file/d/16sQTShmVC2COVtBZJNeDDA3vVF_iGr5I/view",
    image: null,
  },
  {
    name: "JASPER",
    team: "Carlos",
    description: "Private relationship tool that helps you map and nurture the connections that genuinely matter in your life.",
    fullDescription: "Jasper is a private relationship tool that helps you map and nurture the connections that genuinely matter in your life. It gives you a quiet, intentional space to understand how you trust the people closest to you, across four dimensions: emotional, cognitive, practical, and intuitive.",
    geminiUsage: "Its my main LLM that powers my code.",
    categories: ["Most Artistic"],
    complexity: 5,
    color: "bg-teal-600",
    github: "https://github.com/carlosjmarin/jasper",
    demo: "https://carlosjmarin.github.io/jasper",
    video: "https://www.loom.com/share/6952a04cc66d46249ae22cae38c21319",
    image: "/hackathon-screenshots/jasper.png",
  },
  {
    name: "PASS THE CHANGE",
    team: "Brian, Brylen & Dhruv",
    description: "Micro-donation app that automatically transfers a small amount from each paycheck to local charities you care about.",
    fullDescription: "Pass the Change is a micro-donation app that automatically transfers a small amount from each paycheck and distributes it to local charities you care about found through our inbuilt AI agent. It solves the friction problem — most people want to give but never get around to setting up donations.",
    geminiUsage: "Used Gemini to power an AI agent during user onboarding. The agent asks questions about values, interests, and causes, then automatically selects and recommends the most relevant local charities.",
    categories: ["Best Chicago Energy", "Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 5,
    color: "bg-green-600",
    github: null,
    demo: null,
    video: "https://drive.google.com/file/d/1zFeil6_UevthQzTFoqvu2bTX9mYquabH/view",
    video2: "https://drive.google.com/file/d/1WndDypbl_d7WG8jqDD0PFS_0TQIHcPg8/view",
    image: null,
  },
  {
    name: "CIDER",
    team: "Brandon Pieczka, Logan Jorgensen",
    description: "CLI tool for MacOS sandboxing. Build native MacOS code even from Windows/Linux.",
    fullDescription: "We built Cider, a CLI tool for MacOS sandboxing. It solves the problem of AI agents unable to build native MacOS code, as well as the ability to allow people to build AppleOS software even when on a Windows/Linux device.",
    geminiUsage: "The product offers using Gemini in the CLI.",
    categories: ["Ready to Ship", "Most Unexpected Use of Gemini"],
    complexity: 5,
    color: "bg-amber-600",
    github: "https://github.com/Bardemic/Cider",
    demo: "https://cider.build",
    video: "https://www.loom.com/share/b2b65a5514924d8fac60ef4f2d1146a2",
    image: "/hackathon-screenshots/cider.png",
  },
  {
    name: "HOLLIS",
    team: "Liz Yuhas",
    description: "Your household manager, offloading the cognitive load of managing your household.",
    fullDescription: "Hollis is your household manager, offloading the cognitive load of managing your household.",
    geminiUsage: "Used it to generate the demo-able app.",
    categories: [],
    complexity: 2,
    color: "bg-pink-600",
    github: null,
    demo: "https://genai-app-hollis-1-1773516082617-679995383283.us-central1.run.app/?key=OPM3vYz2ItzgLnyGULjPKqGJyY0yebdL",
    video: null,
    image: "/hackathon-screenshots/hollis.png",
  },
  {
    name: "VIBECUT",
    team: "Blas and Ishani",
    description: "Vibe coding but for video editing. Generate images and videos to add to your timeline.",
    fullDescription: "Vibe coding but for video editing. We use Google models to transcript the videos and map the transcription to the timestamp. We also generate images using Nano Banana 2 that we can add to the timeline. We can also generate videos using Veo 3.1 model based on frames of the videos.",
    geminiUsage: "Used Google models to transcript videos, generate images with Nano Banana 2, and generate videos with Veo 3.1.",
    categories: ["Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 5,
    color: "bg-purple-600",
    github: "https://github.com/slab10000/Google-Hackathon",
    demo: null,
    video: "https://drive.google.com/file/d/1MfywnqNoORDQf9MSub-dOSaMxr5x4DyW/view",
    image: null,
  },
  {
    name: "TOWING BUSTERS",
    team: "Frankie and Juan David",
    description: "Real-time monitoring and analytics app that tracks towing activity across Chicago.",
    fullDescription: "Chicago Tow Watch is a real-time monitoring and analytics app that tracks towing activity across the city. It provides residents with live updates on recent tows, average towing fees, hotspot locations, and neighborhood alerts.",
    geminiUsage: "Used Gemini within Google AI Studio for prompt engineering, feature planning, and UI/UX content generation.",
    categories: ["Best Chicago Energy"],
    complexity: 5,
    color: "bg-red-600",
    github: null,
    demo: "https://ai.studio/apps/355d190a-fe65-439e-8ce6-2acf5cd06641?fullscreenApplet=true",
    video: null,
    image: "/hackathon-screenshots/towing-busters.png",
  },
  {
    name: "CANDIDATE",
    team: "Kavya Uppal, Cecilia Hernandez, Anna Gerasimenko, Aminah Bilal",
    description: "Dating website for politicians. Match with politicians based on your personalized prompt responses.",
    fullDescription: "We created a \"dating website\" for politicians. Many Americans don't know the politicians they're voting for nor have an interest in finding out more. Our website allows users to write personalized responses to prompts which then match them with the politician running in a race who matches with them the most.",
    geminiUsage: "Our project is completely built through Vertex.",
    categories: ["Best Chicago Energy"],
    complexity: 2,
    color: "bg-rose-600",
    github: null,
    demo: null,
    video: "https://zoom.us/clips/share/oxMcCbCsQXulhKIITRObZA",
    image: null,
  },
  {
    name: "SILENCE",
    team: "Bhuvana Ram",
    description: "VR meditation experience.",
    fullDescription: "VR meditation experience designed to help users find peace and relaxation through immersive virtual environments.",
    geminiUsage: "Everything",
    categories: ["Best Chicago Energy", "Ready to Ship", "Most Artistic", "Most Unexpected Use of Gemini"],
    complexity: 3,
    color: "bg-slate-500",
    github: null,
    demo: null,
    video: "https://www.loom.com/share/ebdd731dd6f24b79ac41e6a44962117c",
    image: null,
  },
  {
    name: "ZEN SKIPPING STONES",
    team: "Xinyi Wang",
    description: "Generative AI zen healing version of skipping stones with synchronized breathing and traditional Chinese poetry.",
    fullDescription: "A generative AI zen healing version of an old game: skipping stones. It has synchronized breathing environment, real-time 432 Hz base tuning and 528 Hz feedback when stones touch the water surface, and traditional Chinese poetry that speaks with the view.",
    geminiUsage: "Gemini is the tool I used for coding and tuning.",
    categories: ["Most Artistic"],
    complexity: 3,
    color: "bg-sky-600",
    github: null,
    demo: null,
    video: "https://drive.google.com/file/d/1pLo4_R9D0k7IsZDHntgy3Tm6VAbKMdRm/view",
    image: null,
  },
  {
    name: "CHICAGO MAXING",
    team: "Anthony, Rakshith, Kritan",
    description: "AI-powered interactive oral history platform for Chicago, generating era-by-era memoirs of specific locations.",
    fullDescription: "Chicago Maxing is an AI-powered interactive oral history platform for Chicago, generating era-by-era memoirs of specific locations.",
    geminiUsage: "AI-powered oral history generation.",
    categories: ["Best Chicago Energy"],
    complexity: 4,
    color: "bg-yellow-500",
    github: null,
    demo: null,
    video: "https://www.loom.com/share/63476763b1a54e97ac0bd4b4fa1daed1",
    image: null,
  },
  {
    name: "CHICAGO LIVEFEED",
    team: "Solo + LLMs",
    description: "Real-time city dashboard that aggregates live urban data like CTA arrival times, weather, and local activity.",
    fullDescription: "Chicago LiveFeed is a real-time city dashboard that aggregates live urban data like CTA arrival times, weather, and local activity into a single visual interface. The goal is to reduce unnecessary phone scrolling by delivering essential morning information in a simple, ambient display.",
    geminiUsage: "Used Vertex AI & Gemini Video maker.",
    categories: ["Best Chicago Energy", "Most Artistic"],
    complexity: 2,
    color: "bg-emerald-600",
    github: null,
    demo: null,
    video: "https://www.loom.com/share/c163798fd96f493a8808cf55f7a36f27",
    image: null,
  },
];

const categoryColors: Record<string, string> = {
  "Ready to Ship": "bg-green-500",
  "Most Unexpected Use of Gemini": "bg-purple-500",
  "Best Chicago Energy": "bg-blue-500",
  "Most Artistic": "bg-pink-500",
};

const categoryShort: Record<string, string> = {
  "Ready to Ship": "Ship",
  "Most Unexpected Use of Gemini": "Unexpected",
  "Best Chicago Energy": "Chicago",
  "Most Artistic": "Artistic",
};

const categoryDescriptions: Record<string, string> = {
  "Ready to Ship": "Strong execution, completeness, and robustness of the build (well-scoped, well-built, \"ship-ready\" projects).",
  "Most Unexpected Use of Gemini": "Surprising, inventive uses of AI—projects that nobody saw coming.",
  "Best Chicago Energy": "Projects that use local/Chicago-focused data (e.g., WBC economic report, public data sets) to benefit the city or its communities.",
  "Most Artistic": "Focus on artistry and expression (e.g., short films, animated pieces, generative art, creative storytelling) leveraging Gemini and related tools.",
};

const allCategories = ["Ready to Ship", "Most Unexpected Use of Gemini", "Best Chicago Energy", "Most Artistic"];

export default function GoogleDeepMindHackathon() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.categories.includes(selectedCategory))
    : projects;

  return (
    <div className="min-h-screen bg-white py-8 sm:py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <h1
        className="uppercase tracking-tight text-gray-400 font-[family-name:var(--font-anton)]"
        style={{
          fontSize: "clamp(1.5rem, 8vw, 6rem)",
          lineHeight: 0.9,
        }}
      >
        GOOGLE DEEPMIND HACKATHON
      </h1>
      <p className="text-gray-600 font-[family-name:var(--font-mono)] text-sm sm:text-base mt-6">
        Chicago March 14th @ Drive Capital
      </p>

      <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg text-xs sm:text-sm font-[family-name:var(--font-mono)] text-gray-500 space-y-3">
        <p>
          <span className="text-gray-700 font-medium">Thank you to our Sponsors / Co-hosts:</span>{" "}
          Sal @ Outbound Collective, Landon @ Drive Capital, Amit and Logan @ Google DeepMind
        </p>
        <p>
          <span className="text-gray-700 font-medium">Thank you to our Judges:</span>{" "}
          Sophie @ 2389, Rabimba @ PayPal, Yiliu @ Softspace
        </p>
      </div>

      <nav className="flex gap-4 sm:gap-6 mt-6">
        <Link
          href="/events"
          className="text-gray-400 font-[family-name:var(--font-mono)] text-base sm:text-lg tracking-wide hover:text-black transition-colors"
        >
          Events
        </Link>
        <Link
          href="/connect"
          className="text-gray-400 font-[family-name:var(--font-mono)] text-base sm:text-lg tracking-wide hover:text-black transition-colors"
        >
          Connect
        </Link>
      </nav>

      {/* Category Filter & Guide */}
      <div className="mt-8 sm:mt-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-gray-500 font-[family-name:var(--font-mono)] text-xs sm:text-sm mr-2">Filter:</span>
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded font-[family-name:var(--font-mono)] text-xs sm:text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            All ({projects.length})
          </button>
          {allCategories.map((cat) => {
            const count = projects.filter((p) => p.categories.includes(cat)).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3 py-1.5 rounded font-[family-name:var(--font-mono)] text-xs sm:text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? `${categoryColors[cat]} text-white`
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {categoryShort[cat]} ({count})
              </button>
            );
          })}
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="ml-2 text-gray-400 hover:text-gray-600 font-[family-name:var(--font-mono)] text-xs underline"
          >
            {showGuide ? "hide guide" : "category guide"}
          </button>
        </div>

        {/* Category Guide */}
        {showGuide && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allCategories.map((cat) => (
              <div key={cat} className="flex gap-3">
                <span className={`${categoryColors[cat]} text-white text-xs font-bold px-2 py-1 rounded font-[family-name:var(--font-mono)] h-fit whitespace-nowrap`}>
                  {categoryShort[cat]}
                </span>
                <p className="text-gray-600 text-xs font-[family-name:var(--font-mono)]">
                  {categoryDescriptions[cat]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative">
              {/* Category Tags */}
              {project.categories.length > 0 && (
                <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1">
                  {project.categories.map((cat, i) => (
                    <span
                      key={i}
                      className={`${categoryColors[cat]} text-white text-[10px] font-bold px-2 py-0.5 rounded font-[family-name:var(--font-mono)]`}
                    >
                      {categoryShort[cat]}
                    </span>
                  ))}
                </div>
              )}

              {project.image ? (
                <a
                  href={project.video || project.demo || project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-[4/3] bg-gray-100 border border-gray-200 relative group cursor-pointer overflow-hidden block"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-black/70 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </a>
              ) : project.video ? (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-[4/3] bg-gray-100 border border-gray-200 flex items-center justify-center relative group cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center group-hover:bg-black/90 transition-colors">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs font-[family-name:var(--font-mono)] absolute bottom-2 left-2">
                    video
                  </span>
                </a>
              ) : (
                <div className="aspect-[4/3] bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <span className="text-gray-300 text-sm font-[family-name:var(--font-mono)]">
                    no preview
                  </span>
                </div>
              )}
            </div>

            <div className={`${project.color} p-4 text-white flex-1 flex flex-col`}>
              <h3 className="font-bold text-base font-[family-name:var(--font-mono)]">
                {project.name}
              </h3>
              <p className="text-xs font-[family-name:var(--font-mono)] mt-1 opacity-70">
                {project.team}
              </p>
              <p className="text-xs font-[family-name:var(--font-mono)] mt-2 opacity-90 flex-1">
                {project.description}
              </p>

              {/* Expanded Info */}
              {expandedProject === project.name && (
                <div className="mt-3 pt-3 border-t border-white/30 text-xs font-[family-name:var(--font-mono)]">
                  <p className="opacity-90 mb-2">{project.fullDescription}</p>
                  <p className="opacity-70 mb-2"><strong>Gemini Usage:</strong> {project.geminiUsage}</p>
                  <p className="opacity-70"><strong>Complexity:</strong> {"★".repeat(project.complexity)}{"☆".repeat(5 - project.complexity)}</p>
                </div>
              )}

              <button
                onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
                className="mt-3 text-xs font-[family-name:var(--font-mono)] opacity-70 hover:opacity-100 text-left underline"
              >
                {expandedProject === project.name ? "show less" : "show more"}
              </button>

              <div className="mt-4 flex gap-2">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-center py-2 font-[family-name:var(--font-mono)] text-xs font-bold hover:opacity-90 transition-opacity"
                    style={{ color: "inherit" }}
                  >
                    <span className={project.color.replace("bg-", "text-")}>demo</span>
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-center py-2 font-[family-name:var(--font-mono)] text-xs font-bold hover:opacity-90 transition-opacity"
                    style={{ color: "inherit" }}
                  >
                    <span className={project.color.replace("bg-", "text-")}>{project.video2 ? "intro" : "video"}</span>
                  </a>
                )}
                {project.video2 && (
                  <a
                    href={project.video2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-center py-2 font-[family-name:var(--font-mono)] text-xs font-bold hover:opacity-90 transition-opacity"
                    style={{ color: "inherit" }}
                  >
                    <span className={project.color.replace("bg-", "text-")}>demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-center py-2 font-[family-name:var(--font-mono)] text-xs font-bold hover:opacity-90 transition-opacity"
                    style={{ color: "inherit" }}
                  >
                    <span className={project.color.replace("bg-", "text-")}>github</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-24 py-6">
        <p className="text-black text-sm font-light font-[family-name:var(--font-mono)] text-center">
          © {new Date().getFullYear()} Forever 22 LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
