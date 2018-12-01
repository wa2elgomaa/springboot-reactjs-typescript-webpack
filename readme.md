# Overview
This quick start guide will teach you how to wire up TypeScript with [React](http://facebook.github.io/react/) and serve them using [Springboot](http://spring.io/).  By the end, you'll have a springboot project serving frontend with (React and TypeScript)

This application uses : 
* [React](http://facebook.github.io/react/)
* [TypeScript](https://www.typescriptlang.org/)
* [WebPack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [TSLint](https://github.com/palantir/tslint)
* [Springboot](http://spring.io/)
* [Log4J](https://logging.apache.org/log4j/2.x/)


# Getting started
Before you start you should have a recent version of `npm` and `node`
installed.
# 1.0 Clone
```
  git clone
  
```
# 2.0 Install 
Navigate to the "src\main\frontend" directory inside the cloned folder and run 
```
  npm install
```

At this point, your project layout should look like the following:

```text
my-app/
├─ .gitignore
├─ .idea
├─ .mvn
├─ src/
│   ├─ main
		├─ frontend
			├─ node_modules
			├─ src
				└─ ...
			├─ .babelrc
			├─ package.json
			├─ tsconfig.json
			├─ tslint.json
			└─ webpack.config.js
		├─ java
		└─ resources
	└─ test
└─ pom.xml
```

At this step you only need to set up your maven command run configuration using this line
```
spring-boot:run
```

To test your application follow the url http://localhost:9090/ 


