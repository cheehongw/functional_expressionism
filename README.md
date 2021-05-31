# 1. Introduction

## 1.1. Proposed Level of Achievement:

Apollo 11

## 1.2. Motivation 
Everyday, I ask myself, “what should I eat for lunch?”. I could eat the same thing I had yesterday, but eating the same kind of food is boring. 
Searching on google yields no useful results, and only serves to remind myself that I have had similar lunchtime crises in the past. If only there was an app to help me decide on what to eat every day. 
Also, why is there not a record of the various menus somewhere to help us decide what to eat?

## 1.3. Aim 
We hope to help make informed choices on what to eat in NUS quick and easy by consolidating all the information into an easy to use app.

## 1.4. User Stories

Must have: 3/3

Should have: 2/3 

Good to have: 1/3

Visitor here is a general term referring to both anonymous and registered users visiting the site

Priority|As a...| I want to be able to... | So that I can...
--------|-------|-------------------------|------------------
3/3| Visitor | view the full menu,prices, halal-ness, opening hrs of food stall | know the food choices available to me
3/3| Visitor | know my current distance to nus food locations | make informed decisions
3/3| Visitor | generate random suggestions for food based on presets such as menu, prices, distance| have something help me decide what to eat
3/3| Visitor | see reviews and ratings on stalls and food items | make informed decisions
3/3| User | Login securely | Keep my account safe
2/3| Registered User | reset/change my username/password | have control over my account.
2/3| Registered user | post reviews and ratings on stalls and food items | provide feedback about the food
2/3| Registered user | generate random suggestions based on my eating history | have something help me decide what to eat efficiently
2/3| Administrator | filter and remove abusive comments | prevent abuse of the application
1/3| Registered user | contribute to the database of foodstalls | help keep information up to date for other fellow users
1/3| Administrator | Vet and approve contributions made by fellow users | to prevent abuse of database
1/3| Administrator | Receive notification to approve contributions | approve contributions ASAP
1/3| Visitor | find the shortest path to food location | find food quickly
1/3| Visitor | check the real time crowd level of a location | to make informed decisions


# 2. Components

## 2.1. Main Components

Our web-application frontend is made up of these main components:

* Landing page (Locations Listing page)
* Stall Listing page 
	* clicking on the stall will bring up a floating preview card of the stall
		* preview card shows stall information such as opening hours, price range, halal info etc.
		* click again to enter menu listing page

* Menu Listing page - Landing page associated with the stall
	* Display Ratings, comments and description of the stall
	* Scroll down to view menu of the stall

* Login/Signup page
* User Dashboard
	* Shows stall visit history
	* Show comments and reviews made by user in timeline

## 2.2. Features

# 3. Tech Stack

We aim to develop a mobile-friendly web app by adhering to progressive web application guidelines.

## 3.1 Frontend Development:

### ReactJS

We decided to use ReactJS because ReactJS is lightweight, and flexible.

### Firebase Authentication

We decided to use Firebase Authentication as it is secure and easy to deploy.

## 3.2 Backend Development:

We decided to use ExpressJS as it is a simple, unopinionated web framework to set up an API endpoint for our database.

# 4. Program Flow
<img src="https://drive.google.com/uc?id=1K0m_xE4xI81O7cN0zjIlW-WERe25KPI6" alt="Program Flow image">
