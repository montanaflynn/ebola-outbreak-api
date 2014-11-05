# Ebola Outbreak API

This simple API returns a JSON array that has timeseries of Ebola cases. It's built on top of express and my [ebola-outbreak](http://github.com/montanaflynn/ebola-outbreak) package. The API is online and [available to the public](https://www.mashape.com/montanaflynn/ebola-outbreak). All data is from the World Health Organization.

### Docs

`GET /cases` returns case information 

`GET /predict?distance=5` returns projections for the next 5 time periods

`GET /rate` returns latest growth rate

### Install

	git clone git@github.com:montanaflynn/ebola-outbreak-api.git
	cd ebola-outbreak-api
	npm install
	node api.js
