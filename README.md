# Learning Ionic
Author: Rahat Khanna
Twitter: http://twitter.com/mappmechanic    
LinkedIn: http://linkedin.com/in/rahatkh    

My Book on Ionic - https://www.amazon.com/Getting-Started-Ionic-Rahat-Khanna/dp/1784390577

## Introduction:
A Repository to help you learn Ionic in a very easy and Practical way with lots of examples.

## Table of Contents
1. [Setting Up Ionic Environment](https://github.com/mappmechanic/learning-ionic#setting-up-ionic-environment)
2. [Developing HelloWorld App](https://github.com/mappmechanic/learning-ionic#developing-helloworld-app)

## Code Samples with Steps :

### Setting Up Ionic Environment

We need to install all the dependencies and then use the Ionic CLI to initiate a new project.

Requirements for Setup:
* Install NodeJS & GIT
* Check if npm path is working correctly by the following command
```
npm -v
```
* Install Ionic CLI and Cordova CLI with npm using the following command
```
npm install -g ionic cordova
```
* Check if Ionic has been installed correctly using following command
```
ionic -v
```

### Developing HelloWorld App

#### *Step 1:*
Execute the ionic create command on your CommandPrompt(Windows) & Terminal(MAC OS)

`ionic start -i com.ionic.helloworld ./hello blank`

#### *Step 2:*
Now, you have to go inside the *hello* folder using following command.

`cd hello`

The folder structure of our Ionic app started with *blank* template is as given below:

<img src="https://raw.githubusercontent.com/mappmechanic/learning-ionic/master/readme-imgs/folder-structure.png" data-canonical-src="https://raw.githubusercontent.com/mappmechanic/learning-ionic/master/readme-imgs/folder-structure.png" width="184" height="330" />

#### *Step 3:*
From the command prompt or terminal, please run the following command:

`npm install`

#### *Step 4:*
From the command prompt or terminal, please run the following command:

`npm install`

#### *Step 5:*
We will use the ionic serve command to run a local web-server to see the output of our app

`ionic serve`

Now we will be able to see the HelloWorld App example using a browser. We can use Chrome Devtools to open it in any device size.

<img src="https://raw.githubusercontent.com/mappmechanic/learning-ionic/master/readme-imgs/helloworld.png" data-canonical-src="https://raw.githubusercontent.com/mappmechanic/learning-ionic/master/readme-imgs/helloworld.png" />
