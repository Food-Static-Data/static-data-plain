The main goal of this project is to create and store data that can be easily imported into the database.
In the beginning, it was MongoDB "fixed" by Loopback framework. Fixed because it's not the same default MongoDB driver, so it cannot be treated as the usually mongo+express+nodejs project.

But our project evolving -> right now we're not limited to Loopback import. We have
React-based projects, where we are using this data a lot of times and in different ways. We are building right now a replacement to our old servers, using graphQl and serverless(later) approach, and using data from our plugin for mocking.

ML team using similar sets of data, that we have here in different ways. Right now they trying to catch no-food words. 
Creation and separation methods that we have in this plugin, really help us to speed up our development process. Collecting different data and different projects under the same roof help us a lot.

Till we didn't move forward with our backend development(aka we relate on our old Loopback servers) and didn't make our major upgrades with this plugin -> we need to keep working with an old version. But new versions evolving more quickly and eating more "time" during the plugin development.
