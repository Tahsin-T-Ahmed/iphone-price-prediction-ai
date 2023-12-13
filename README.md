# Artificial Intelligence - iPhone Price Predictor

## Technologies: Python, React, SCSS, PostreSQL,Tensorflow (Keras), Scikit-Learn, Dash, JavaScript. 

## Description:

### This is a Predictive AI deployed as a web application. This Machine Learning Model makes use of Predictive Analytics to generate predictions of future iPhone prices by learning from past data. 

### Based on user input, a price (US Dollar) will be displayed (as a number) for a hypothetical iPhone in a given year. The prediction will be generated from from the following details:
##### Year (Number): Specifies year to predict prices for.
##### Special (Checkbox): Indicates if the iPhone is  of a "special edition", such as "S" or "Pro".
##### Large (Checkbox): Indicates if the iPhone is a variant of larger size, such as "Plus" or "Max". 
##### Memory (Menu): Specifies the storage capacity of the iPhone. 

### Alongside the price will be visual illustrations of similar iPhones released since 2007, matching the details of the user's input Example: If the user wants to predict a price for an iPhone "Pro Max" in the year 2040, they will be presented with the predicted price and graph(s) of previous iPhones of the "Pro Max" or "S Plus" variants. 

## Model Building & Training:

### A variety of predictive methods will be tested (such as Linear Regression, Lasso Regression, etc). The best one will be chosen for the application. 
### The metrics for model evaluation will be determined by the *type* of predictive model that is chosen (such as Mean Absolute Error, R-Squared, etc). 
### The project includes PostreSQL commands for creating and populating a database of iPhone prices from 2007 to 2023. This data will be imported by Python as a Pandas DataFrame, for processing, analysis, training, etc.