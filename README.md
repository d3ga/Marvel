# Marvel Character Search

## Description

In this exercise, you will write a JavaScript class that is used to connect to the Marvel API and look for a character by name.

The API class needs to have methods to:
1. get a character by name
1. get all characters that have a name beginning with a given string

Remember that the methods should have a callback parameter, to pass the data to a given function.

The full HTML and CSS code is already included in this repository. It's your task to write the needed JavaScript part.

The details.html contains a demo of the extended display for a single item, when the user clicks on it in the result list. 

## Technologies

* JavaScript Classes + Methods
* jQuery HTTP Requests
* JSON

## Marvel Comics API

We need the [Marvel Comics API](https://developer.marvel.com/) for this exercise. Please sign up [here](https://marvel.com/register?referer=https%3A%2F%2Fdeveloper.marvel.com%2F) and then go to your [Developer Account](https://developer.marvel.com/account).

You will need the public API key, to connect to the API using HTTP Requests.

To enable local development, add the following referrer to the list "Your authorized referrers":
```localhost```

## Live-Server

The easiest way to run a local server for the exercise is to use the node [live-server](https://github.com/tapio/live-server) package.

**Installation:**  
```npm install -g live-server```

**Running the server:**  
```cd {your code directory}```
```live-server```

## Setup

To setup all needed JS and CSS for this project, run the following command in your terminal (inside of the project folder):

```npm run setup```