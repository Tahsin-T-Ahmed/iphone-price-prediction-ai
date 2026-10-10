# iPhone4Cast AI

A full-stack machine learning project that predicts future iPhone prices using historical product data, then presents the result in a polished web interface with a comparison chart.

This project was designed to showcase a realistic end-to-end workflow that is relevant to entry-level software, data, and AI roles: data collection, feature engineering, model training, API development, frontend design, and deployment.

## Why this project stands out

This is more than a simple calculator. It demonstrates how a developer can combine:

- Python for machine learning and data processing
- React + TypeScript for frontend user experience
- Flask for serving a predictive API
- PostgreSQL for structured data storage
- scikit-learn for building a trained regression model
- Matplotlib for chart generation and product comparison views

The end result is a portfolio-ready application that feels like a real product concept, rather than just a coding exercise.

## Project overview

Users can select a hypothetical iPhone configuration:

- Year
- Special edition status (S / Pro / premium variations)
- Larger size status (Plus / Max variations)
- Storage capacity

The app then:

1. Sends the request to a Python backend
2. Uses a trained linear regression model to estimate the price
3. Returns a numerical prediction in USD
4. Generates a chart comparing similar historical iPhones
5. Displays both the result and the visualization in the browser

## Core features

- Predictive pricing engine using historical iPhone data
- Interactive form-based frontend built with React
- REST API endpoints for price prediction and chart generation
- Data preprocessing and feature transformation for machine learning
- Visual comparison graph of past iPhone releases
- PostgreSQL schema and export pipeline for structured historical data
- Model persistence using joblib so the trained artifact can be reused efficiently

## Tech stack

Frontend
- React
- TypeScript
- SCSS
- HTML/CSS

Backend
- Python
- Flask
- Pandas
- NumPy
- scikit-learn
- joblib
- Matplotlib

Data layer
- PostgreSQL
- SQL schema setup and CSV export scripts

## Architecture

The application follows a clean three-layer flow:

User input -> Frontend UI -> Flask API -> Trained ML model -> Prediction + chart

High-level pipeline:

- The React app collects user selections from a form
- The frontend sends JSON payloads to `/api/pred` and `/api/graph`
- Flask loads the trained model and scaler from disk
- The backend transforms input into the expected feature format
- The model predicts a price based on year, storage, and variant characteristics
- The backend generates a PNG chart for similar historical models
- The UI renders the prediction and graph for the user

## Model and data pipeline

This project uses a linear regression model trained on iPhone release data.

The pipeline includes:

- PostgreSQL table for historical iPhone records
- Data export script to convert database data into CSV
- Feature engineering step to convert:
  - release date into year
  - edition into a binary “special” flag
  - scale into a binary “large” flag
  - memory values into one-hot storage features
- Standardization of the numeric year feature before prediction
- Model training and saving to `iphones-linear-regression.pkl`

This demonstrates the practical workflow of ML work in a real software product: collect data, engineer features, train a model, deploy it, and monitor the interaction with users.

## Repository structure

```text
iphone-price-prediction-ai/
├── backend/
│   ├── api.py                  # Flask REST API and chart generation
│   ├── training.py            # Model training and artifact creation
│   ├── iphone_releases.csv    # Historical dataset used for modeling
│   ├── iphones-linear-regression.pkl
│   ├── scaler.joblib
│   ├── model.ipynb            # Notebook exploration and experimentation
│   ├── requirements.txt
│   └── vercel.json
├── frontend/
│   ├── src/                   # React application source code
│   ├── public/                # Public assets and HTML shell
│   ├── package.json
│   ├── setupProxy.js          # Proxy for local API development
│   ├── vercel.json
│   └── README.md
├── psql/
│   ├── setup.sql              # PostgreSQL database schema
│   ├── exporter.py            # Database to CSV export utility
│   └── records.sql
├── README.md                  # Project overview and portfolio documentation
├── .gitignore
└── .
```

## Key implementation notes

### Frontend

The React app is a single-page experience built around a form and result panel.

Relevant files:
- `frontend/src/App.tsx`
- `frontend/src/components/Form/index.tsx`
- `frontend/src/components/Result/index.tsx`
- `frontend/src/infrastructure/iphone4cast-api.ts`

The frontend handles:
- collecting user input
- calling the API for price prediction
- calling the API for chart generation
- rendering the response and graph result

### Backend

The Flask application in `backend/api.py` exposes two main endpoints:

- `POST /pred` -> returns the predicted price as a number string
- `POST /graph` -> returns a generated PNG chart image

The `transform_dataset` function filters and normalizes historical iPhone release records so they match the model’s training schema.

### Data and model training

The training process is defined in `backend/training.py`.

It performs the following:
- loads historical data
- removes irrelevant entries
- converts categorical values into binary features
- scales the year field
- fits a linear regression model
- saves the trained model and scaler for reuse by the API

## How to run locally

### 1. Install backend dependencies

```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Start the Flask API

```bash
python api.py
```

The app will run on:
- http://localhost:5000

### 3. Install frontend dependencies

Open a second terminal:

```bash
cd frontend
npm install
npm start
```

The React app will run on:
- http://localhost:3000

### 4. Use the app

- Choose the desired year
- Select whether the device is a special edition or larger model
- Pick the storage option
- Click GO
- View the price estimate and historical comparison chart

## Deployment notes

This project includes deployment configuration for hosting on Vercel:

- `frontend/vercel.json` routes `/api/*` to the backend service
- `backend/vercel.json` configures the Python API deployment

This is a strong example of full-stack deployment thinking and demonstrates familiarity with hosting and API integration.

## Skills demonstrated

This project highlights a broad set of technical abilities that are highly relevant for early-career roles:

- Data cleaning and feature engineering
- Machine learning model development
- Python scripting and automation
- REST API design and implementation
- Frontend development with React and TypeScript
- API integration and handling asynchronous requests
- SQL schema design and database exports
- Product-oriented thinking and UI/UX basics
- Deployment and environment configuration

## Why this is a strong portfolio project

For recruiters and hiring managers, this project communicates that I can build more than isolated features. It shows I understand how to connect:

- business ideas
- data science workflows
- product interfaces
- backend services
- deployment pipelines

That combination is valuable in entry-level tech roles such as:

- Data Analyst
- Junior Full-Stack Developer
- Machine Learning Engineer (entry-level)
- Product Analyst
- Software Engineer (generalist)

## Potential future improvements

- Add additional model types and compare performance
- Add more detailed accuracy metrics (MAE, R-squared, RMSE)
- Add user authentication or saved predictions
- Expand the dataset with more device generations or regional pricing history
- Improve UI polish and accessibility
- Add tests for both frontend and backend functionality

## Summary

iPhone4Cast AI is a full-stack machine learning web application that turns historical product data into a useful prediction tool. It is designed to show practical engineering ability, not just textbook concepts.

The value of this project is in its end-to-end nature: from raw data to trained model, from backend API to browser interface, and from concept to deployed product experience.

If you are looking for a portfolio project that communicates initiative, technical breadth, and real-world problem solving, this is a strong example.

---
This README file was generated by AI, and custom-edited by me (Tahsin). This is the ONLY AI-generated file in this entire project. I don't vibe-code, but I do vibe-document.