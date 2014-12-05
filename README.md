# Ebola Outbreak API

Returns the latest counts of Ebola cases and deaths in the current outbreak. It's made using express.js and the [ebola-outbreak](http://github.com/montanaflynn/ebola-outbreak) package which uses [raw data](https://github.com/montanaflynn/ebola-outbreak-data) from the World Health Organization. The API is online and [available to the public](https://www.mashape.com/montanaflynn/ebola-outbreak).

### Docs

- `GET /cases` returns case information 
- `GET /rate` returns latest growth rate

### Usage

	git clone git@github.com:montanaflynn/ebola-outbreak-api.git
	cd ebola-outbreak-api
	npm install
	node api.js
