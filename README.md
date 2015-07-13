# Isomorphic Javascript Experiment

While visiting birchbox.com, I noticed that the site generally felt a bit, well, sluggish. I've been dabbling with React and isomorphic javascript, and I had the thought: "Why don't I try this with something that's a little more 'real world' like?" I wanted to know if this type of front end architecture would make as big of a performance difference as I expected. So what were my conclusions? 

I'll give a preview, but if you are at all interested, I encourage you to try running the project yourself to see the results.

Overall, I was very impressed with the improvements. The birchbox landing page consistently takes about 3 to 4 seconds to completely load while my isomorphic version takes about 1 to 1.5 seconds. Obviously there is some added latency in hitting a remote site versus a local one, but the difference is more significant than just the overall numbers.

In the isomorphic page the majority of the content is available almost instantly and the rest is loaded before you would reasonably scroll to it. Birchbox's page, however, shows a mostly blank white page for about 1-2 seconds before you have anything to read or interact with. This is a major user experience improvement, and essential for companies with a vested interest in e-commerce.

### Want to see it in action?

Okay, enough with the wordy explanations, here's how you can run the thing:

```shell
$ git clone git@github.com:justincdalton/iso-birchbox.git
$ cd iso-birchbox
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```

Enable CORS in your browser with something like this [chrome plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

Then run the project:

```shell
$ gulp
```
### And finally

A shout out to [react start kit](http://demo.reactstarterkit.com/) for making it so easy to get started with react!
