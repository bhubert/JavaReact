# credits
Based on https://github.com/emmostrom/JavaReact/

# JavaReact
Sample project incorporating React in a Java web application that can be runned as tomcat configuration in Intellij

## Purpose
* Incorporate React into a Java web application while still using standard Maven build commands for everything.
* When using "mvn process-resources -DliveDeploy=true" start a node process include Hot Module Reloading so changes take effect immediately without restarting server or refreshing browser page.
* When using "mvn package" minimize all .js and .css files and include them in the .war file
* Require no changes to server side files (like web.xml) to support development mode
 
## Requirements
* Java 7
* Maven 3.2

## Get Started

```
In Intellij
Create a maven configuration containing mvn process-resources -DliveDeploy=true and run it
Create a tomcat configuration deploying the webapp as war exploded and run it

```

Open browser to http://localhost:8080/JavaReact

edit src/main/jsx/Hello.jsx and change `Hello {this.props.who}` to `Good Bye {this.props.who}` and save file.  The browser should automatically show the new change.

Changes to .less files will automatically get picked up as well.

