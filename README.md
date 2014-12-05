# Ebola Outbreak API

This simple API returns a JSON array that has timeseries of Ebola cases. It's built on top of express and my [ebola-outbreak](http://github.com/montanaflynn/ebola-outbreak) package which uses [raw data](https://github.com/montanaflynn/ebola-outbreak-data) from the World Health Organization. The API is online and [available to the public](https://www.mashape.com/montanaflynn/ebola-outbreak).

### Docs

`GET /cases` returns case information 
`GET /rate` returns latest growth rate

### Install

	git clone git@github.com:montanaflynn/ebola-outbreak-api.git
	cd ebola-outbreak-api
	npm install
	node api.js
