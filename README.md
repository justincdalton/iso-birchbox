# Isomorphic Javascript Experiment

While recently visiting birchbox.com, I noticed that the site generally felt a bit, well, sluggish. I've been dabbling with React and isomorphic javascript lately and I had the thought: "why don't I try this with something that's a little more 'real world' like?" I wanted to know if this type of front end architecture would make as big of a performance difference as I expected it to. So what were my conclusions? Well, you'll just have to run the project to find out!

Just kidding!! I'll give a preview, but if you are at all interested I encourage you to try running the project yourself to see the results.

Overall, I was very impressed with the improvements. The birchbox [landing page](https://www.birchbox.com/men/shop) consistently takes about 3 to 4 seconds to completely load while my isomorphic version takes about 1 to 1.5 seconds. Obviously there is some added latency in hitting a remote site versus a local one, but the difference is more significant than just the overall numbers.

In the isomorphic page the majority of the content is available almost instantly and the rest is loaded before you would reasonably scroll to it. Birchbox's page, however, shows a mostly blank white page for about 1-2 seconds before you have anything to read or interact with. I don't think I have to tell that this is a major user experience improvement, but it is a major user experience improvement!

### Want to see it in action?

Okay, enough with the wordy explanations, here's how you can run the thing:

```shell
$ git clone git@github.com:justincdalton/iso-birchbox.git
$ cd iso-birchbox
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to Run

```shell
$ gulp                          # or, `gulp --release`
```
### And finally

A shout out to [react start kit](http://demo.reactstarterkit.com/) for making it so easy to get started with react!
