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

## Interactive Charts

So we're not learning anything new today.... kind of. We're just learning about a different way to use the tools we've learned about.

At a high level, these are the things we want to do:
1. provide an interface for user input
2. grab the user input to influence the type of `$.getJSON` request
3. take that request and render a graph

We did this sort of thing in week 1 with the weather app, only we didn't render any kind of graph.

Throughout today, we will be building out graphs with select boxes for users to dynamically change the content of the graph.

The goal of today will be to build most of [this application](http://ga-dc.github.io/DOC_immersive/). The top chart you see you've already built most of. Our focus for today will be building the two interactive charts in the middle to the bottom of the page.

If we take a look and inspect these select boxes, we can see the different names of categories and states, but there's also these value properties in our html. Let's take a look at the URL we were using yesterday:

```js
"http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6"
```

Do you see any values that are similar in the option elements as the one in the URL?

```
NAICS=31-33
```
