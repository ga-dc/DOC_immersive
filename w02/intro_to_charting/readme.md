# Interactive Charts

## Learning Objectives
- render html elements with data sourced from script files
- Utilize html elements to dynamically change endpoints for `$.getJSON`
- render graphs based on input from html

## Framing

Well, we've certainly learned a significant amount of information in the last week and a half or so. We've learned about javascript one of the most prominent languages of the web. Through javascript we can manipulate elements in our HTML, adjust styles, request data and even render graphs.

Today we'll be learning how to make interactive graphs. Let's take a look at [Who's in the American Center](http://visual.ly/whos-american-center?view=true)

## Think - Pair & Share
Take a couple minutes to play around with the site. Click on the different links, see where America stands on all the issues! Some things to think about while you play:

- does each clickable category just have an html page stored with the graph pre defined with some data?
- If not, how are these graphs being rendered?
- at a high level, does what we click influence the kind of data we're getting?

Now pair with someone and discuss the following:
- Assume that clicking DOES influence the data we get from AJAX, how does that work?
- what is changing and how does that affect the graph that's displayed?
