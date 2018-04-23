# twitterreader

Reads Twitter Stream with TTS 

## Getting Started

Follow these steps by step.

### Prerequisites

First you need the Twitter Consumer Key and Cunsumer Secret, you have to create an app in Twitter.

1. Log into the Twitter Developers section.
    * If you don't already have an account, you can login with your normal Twitter credentials
2.  [Twitter Application Managment](https://apps.twitter.com/app/new) - Go to "Create an app"
3. Fill in the details of the application you'll be using to connect with the API
    * Your application name must be unique. If someone else is already using it, you won't be able to register your application until you can think of something that isn't being used.
4. Click on Create your Twitter application
5. Details of your new app will be shown along with your consumer key and consumer secret.

#### Existing apps
[Twitter Application Managment](https://dev.twitter.com/apps) - To get the consumer and access tokens for an existing application, go to My applications (which is available from the menu in the upper-right).

Paste the Twitter Consumer Key and Cunsumer Secret to the config.js file, and you are ready to starte the Installing proces.

And 

```
module.exports = {
    consumer_key: '',       //Consumer Key (API Key)
    consumer_secret: '',    //Consumer Secret (API Secret
    access_token: '',	    //Access Token
    access_token_secret: '', //Access Token Secret
	
	filter: '' //Write the things that should give out.
}


```
And dont forget to write the filter. Example your TwitterName to get all tweets with your name.
* When you leave it empty it wont work!

### Installing

You can easily copy the each line and paste it in the Terminal.

At the first you had to go to the root of repository folder.

#### dependencies:

* Node and Npm
Please google by your self how to install this two dependencies.

#### If you have Linux it is requred to have Festival! (Dependency)

* Try the following commad to install Festival with a default voice:

```
sudo apt-get install festival festvox-kallpc16k
```
And then you start to install the required npm packages.
```
npm install
```

When its finished without any erros you can proced to run the application.

## Running

Type in the root directory 
```
node app.js
```
to start.


## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
* When i have wrong sentences please let me know it, Thanks.