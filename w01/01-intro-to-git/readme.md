# Intro to Git

## Learning Objectives


### Conceptual

- Explain what version control is and why developers use it
- Understand the components of a git repository
- Describe what a git remote repository is.
- Differentiate between git as a tool, and github as a service

### Mechanical

- Initialize a local git repository
- Add and commit changes to a git repository
- Add a remote repository, and push/pull changes to that remote

## Framing

### The Purpose of Version Control

Think about how you've managed tracking changes to a file over time (perhaps
with other people).

#### Think Pair Share (10 Minutes)

Answer the following questions yourself, then turn to your neighbor and discuss
your answers. We will then go around and compare.

- What does version control mean to you?
- When have you used a form of version control previously?
- What was frustrating about that experience?
- How did it work if you were collaborating with other people?

#### Explaining Git (10 Minutes)

**So what is Git, and why does it help us?**
Above all else, Git is a fast version control system, that allows you to
efficiently handle projects large and small.

Here are some problems we face as developers, and how git solves them:

**Reverting to past versions**

Git allows us to make save points at any time. These save points are called
'commits'. Once a save point is made, it's permanent, and allows us to go back
to that save point at any time.

From there, we can see what the code looked like at that point, or even start
building off that version.

**Keeping track of what each version 'meant'**

Every commit has a description (commit message), which allows us to describe
what changes were made between the current and previous commit. This is usually
a description of what features were added or what bugs were fixed.

Additionally, git supports tagging, which allows us to mark a specific commit
as a specific version of our code (e.g. '2.4.5').

**Comparing changes to past versions**

It's often important to see content of the actual changes that were made. This
can be useful when:
* tracking down when and how a bug was introduced
* understanding the changes a team member made so you can stay up-to-date with progress
* reviewing code as a team for correctness or quality/style

Git allows us to easily see these changes (called a `diff`) for any given commit.

**Collaborating / discussing changes**

In addition to just sharing changes, it is useful to have discussions on those
changes (again for code review). Git doesn't support this out of the box, but
Github does provide this feature. For example, you can add comments to a changed
line or lines in a given commit.

**Fearlessness in making changes**

In developing software, we often want to experiment in adding a feature or
refactoring (rewriting) existing code. Because git makes it easy to go back to a
known good state, we can experiment without worrying that we'll be unable to
undo the experimental work.

### Core Concepts of Git Repositories (40 minutes)

This section aims to introduce the core use of git, as well as the fundamental
concepts of how git works (and associated terms).

#### Terms and Concepts (Core Git)

* **working tree** - the folder (and it's files and sub-folders, that are in the repository)
* **repository** - collection of commits (save points of the working tree)
* **commit** - a snapshot of the working tree at a giving time (along with a message of what changed)
* **the index** - a staging area where we list changes we want to commit
* **HEAD** - what is currently checked out
* **status** - what files have changed, and what step are they in.

See diagram of the various components of a git repository, and how
they relate.

![Git Local Diagram](./images/git-local.jpg)

#### (WE DO) Exercise 1: Create a Repository and Commit Locally

0. Create a folder in your preferred location (e.g. Documents) for your work (e.g. 'code')
1. Open the GitHub client.
2. Create a new git repository in your code folder. Call it 'my_first_page'.
3. Create a file like `ideas.txt` and just put a few ideas for what you want your site to have, and save it!
4. Commit your changes:
  - Go back to the GitHub client and make sure you're on the **changes** tab
  - Check the checkbox next to ideas.txt to include it in this commit.
  - Write a short summary of what your changes were, and click commit!

#### (You DO)
4. Modify ideas.txt and create a new file (add something to it!). Then create a new commit, with an appropriate message
5. Repeat previous step (committing) but this time, change two files.
6. View the history of your project by clicking the **history** tab. Note you can see a list of commits, and what each one changed.

#### Git Local Workflow

Developing a project revolves around the basic **edit/stage/commit** pattern.

First, you edit your files in the working directory. When you’re ready to save a copy of the current state of the project, you stage changes by clicking the check boxes next to the files. After you’re happy with the staged snapshot, you commit it to the project history with a message.

### Break (10 minutes)

### Publishing to Remote Repositories and Github (30 minutes)

Right now, your git repository is only on your local computer. As developers, we
often want to publish our work so others can use or contribute to it.

There are lots of options for doing this, but we'll start with the simplest,
GitHub. GitHub is a popular site where developers share, discuss, and collaborate
on code.

#### Terms and Concepts (Remotes)

* **remote** - another repository that can be syncronized with a remote
* **github** - a service that hosts git remote repositories, and provides a web app to interact / collaborate on them
* **clone**  - download an entire remote repository, to be used as a local repository
* **fetch**  - downloading the set of changes (commits) from a remote repository
* **merge**  - taking two histories (commits),
* **pull**   - fetching changes and merging them into the current branch
* **push**   - sending changes to a remote repository and merging them into the specified branch
* **merge conflict** - when two commits conflict, and thus can't be merged automatically.

#### Exercise 2: Publish to a remote repository on Github

We'll use the GitHub client to automatically create a matching repository for
our project and synchronize with it.

1. Make sure you are in the resume directory and you have nothing to commit.
2. Ensure you have at least one commit
3. Click the publish button in the upper right.
4. Choose a name and description for this repository on GitHub
5. Note that the button for this repo has changed to `sync`... click this button
at any time to sync with github.

We can now visit [GitHub](github.com) and go to our profile to see our
repositories, which should include our newest repository.

### Cloning Existing Repos

Often, we'll want to take a project on GitHub, and download it to our own
computer. We might do this to work on a project someone else has created, or to
download our own work onto another computer. In Git, this is called `cloning`.

Cloning downloads the whole repository, not just the latest version. This means
once we've cloned a project, we can go back and look at / explore the history
if we want / need to.

#### Exercise 3: Cloning an existing repo

1. Visit the page of a repo you want to clone.
  - For this exercise, we'll use [This curriculum](https://github.com/ga-dc/DOC_immersive)
2. Click the "Save to computer" button. It's near the middle top right, and it has a monitor with a down arrow on it.
3. If asked to switch apps, choose 'Yes'
4. You should now have your own cloned repo on your computer.

### Forking a Repo

Forking is a process which makes a copy of another person's repo under our own
account on GitHub. This gives us our own copy that we can edit without
interfering with the original.


#### Exercise 4: Forking Cloning an existing repository

1. Visit the page of a repo you want to fork
  - For this exercise, we'll use [Wendy Bite](https://github.com/ga-wdi-exercises/wendy_bite)
2. In the upper right, click 'Fork'
3. Verify that you're on your own fork, then follow the steps from exercise 3 to save it to your computer.

### Closing

- Why is version control important for developers?
- What problems do we anticipate using git / github?
- Differentiate between git as a tool, and github as a service
- Define and differentiate between forking and cloning

## Resources

* [Interactive Git Cheetsheet](http://ndpsoftware.com/git-cheatsheet.html)
* [Syncing with Git](https://www.atlassian.com/git/tutorials/syncing/)
* [Github Guides](https://guides.github.com)
* [Github Training](https://training.github.com/kit/)
* [Git Immersion - Interactive Course](http://gitimmersion.com/lab_05.html)
* [Pro Git](http://git-scm.com/book/en/v2) - An in-depth free PDF book for those wanting to understand git deeper
* [GitUp - Interactive Commit Visualizer](http://gitup.co)
* [Practice with Git](https://github.com/grayghostvisuals/practice-git)
