##Brett Hevia's WillowTree Apps Test Project

###Technologies

I decided to go with React on this project mainly because of how intuitive it is for managing state. Initially, I wasn't sure if this warranted setting up Redux or not, but I ended up adding it because as the game grew and I started adding different modes and features and breaking out logic into smaller components, passing props and state and properly binding functions became kind of a hassle and some of the components started getting too stateful/confusing to read and Redux made most it a lot simpler/more modular. The addition of Redux would also make it easier to expand the game and add more features later if I ever needed to come back and work on it again.

###Approaches

I originally wrote almost the entire game in one big React component called NameGame. That got unwieldy pretty quickly, so after I got a very basic version working I started to break it out into more (stateless, whenever possible) components. When THAT started getting unwieldy, I added Redux. I broke most of the logic into container elements that act as wrappers for the "dumb" view components. I also decided to make the API call in App and let that dictate when the NameGame is displayed in order to avoid some synchronicity issues.

In terms of state, I tried to be as modular as possible to avoid running into issues where I forget to change state back or change it too much, etc... The API call loads the willowTreePeople array into state. From there, NameGame sets up the current round with five choices and one answer. The gameStats state is an object so that if I wanted to later add percentages or some other metric it would be relatively straightforward. LastGuess updates every time a guess is made to update the guessMessage, but it could also be incorporated into showing pictures in reverse mode in a more comprehensive version.
