# Ebola Outbreak API

This simple API returns a JSON array that has timeseries of Ebola cases. It's built on top of express and my [ebola-outbreak](github.com/montanaflynn/ebola-outbreak) package. Data is from the World Health Organization.

### Install

	git clone git@github.com:montanaflynn/ebola-outbreak-api.git
	cd ebola-outbreak-api
	npm install
	node api.js

### Usage

	# If running locally
	curl localhost:3333/cases

	# or use this one
	curl http://192.241.227.237/ebola

