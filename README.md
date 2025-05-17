# Walmart Customer Chatbot

## Overview
The Walmart Customer Chatbot is a support system designed to assist Walmart customers by providing instant responses to their inquiries. This project is structured into a frontend and backend, utilizing modern web technologies to create an interactive chat experience.

## Project Structure
```
walmart-customer-chatbot
├── src
│   ├── frontend
│   │   ├── components
│   │   │   ├── ChatInterface.js
│   │   │   ├── MessageBubble.js
│   │   │   └── UserInput.js
│   │   ├── styles
│   │   │   └── main.css
│   │   └── App.js
│   ├── backend
│   │   ├── server.js
│   │   ├── routes
│   │   │   └── api.js
│   │   ├── controllers
│   │   │   └── chatController.js
│   │   └── services
│   │       ├── botService.js
│   │       └── nlpService.js
│   ├── models
│   │   ├── conversation.js
│   │   └── response.js
│   └── utils
│       ├── logger.js
│       └── helpers.js
├── config
│   ├── default.json
│   └── production.json
├── tests
│   ├── unit
│   │   └── botService.test.js
│   └── integration
│       └── chat.test.js
├── data
│   └── responses.json
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/walmart-contractor/walmart-customer-chatbot.git
   ```
2. Navigate to the project directory:
   ```
   cd walmart-customer-chatbot
   ```
3. Install the required dependencies:
   ```
   npm install
   ```

### Deployment
1. Start the backend server:
   ```
   node src/backend/server.js
   ```
2. Launch the frontend application:
   ```
   npm start
   ```

### AWS Requirements

#### Functional Requirements
- **AWS Lambda**: Backend logic executes as serverless functions
- **Amazon DynamoDB**: NoSQL database for storing conversation history and customer interaction data
- **Amazon Comprehend**: NLP service for sentiment analysis and entity recognition in customer queries
- **Amazon S3**: Static content hosting for frontend assets
- **Amazon CloudFront**: CDN for global content delivery and reduced latency
- **AWS API Gateway**: API management for secure access to backend services
- **Amazon Cognito**: User authentication and session management
- **AWS Step Functions**: Orchestrating complex conversation workflows

#### Non-Functional Requirements
- **High Availability**: 99.99% uptime SLA with multi-AZ deployment
- **Scalability**: Auto-scaling to handle 10,000+ concurrent users during peak shopping periods
- **Security**: 
  - All data in transit encrypted using TLS 1.2+
  - All data at rest encrypted using AES-256
  - Compliance with PCI DSS for handling customer data
- **Performance**: 
  - Maximum response time of 500ms for chatbot replies
  - Maximum 200ms latency for API requests
- **Disaster Recovery**: 
  - RPO (Recovery Point Objective): 15 minutes
  - RTO (Recovery Time Objective): 1 hour
- **Monitoring**: Comprehensive logging via CloudWatch with automated alerts

### Usage
- The chatbot interface is accessible at `http://localhost:3000`
- Customers can enter questions about Walmart products, services, store locations, or policies to receive automated assistance

## Project Status
This project was commissioned by Walmart Inc. and developed by Contractor Company LLC. All development work has been performed according to specifications provided by the Walmart Digital Customer Experience team.

## Confidentiality Notice
This application contains proprietary information belonging to Walmart Inc. Distribution, modification, or sharing of this codebase requires explicit permission from Walmart Inc.

## License
This project is proprietary software owned by Walmart Inc. All rights reserved.