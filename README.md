# Ebola Outbreak API

This simple API returns a JSON array that has timeseries of Ebola cases. It's built on top of express and my [ebola-outbreak](github.com/montanaflynn/ebola-outbreak) package. Data is from the World Health Organization.

### Install

	git clone git@github.com:montanaflynn/ebola-outbreak-api.git
	cd ebola-outbreak-api
	npm install
	node api.js

### Usage

	curl -i localhost:3333/cases
