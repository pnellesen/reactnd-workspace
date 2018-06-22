### Instructions

For this exercise, imagine that you're building a section of a simple video game
website where we should be able to add users and display users, along with the
number of games he/she has played.

**Task**: Create a React app that lets us add a user's first name, last name, and
username. 

State (in main App):
	users: [
    	{	firstname: '',
        	lastname: '',
            username: '',
            gamesplayed: 0,
        }
    ],
    showGamesPlayed: true
    
	
Components:
	UserEntryForm.js
	AddUserButton.js
    	button disabled if the any of the fields in UserEntryForm is empty;
    
    
===================================================================
When the user is added, the number of games that he/she has played is
defaulted to 0. Each username has to be unique, so we cannot add multiple users
with the same username.

functions:
	addUser(user) {
    	if (!checkUserName(user.username)) {
        	setState(prevState) => (
            	users: prevState.users.push(user)
             )
             return true;
        } else {
        	return false;
        }
    }
    checkUserName(username) {
    	return (this.state.users.hasOwnProperty(username))
    }
    
========================================================
When someone clicks "Add" but the username already
exists, the app should not allow for a duplicate user to be added and should
show an error message instead.

-- this message in UserEntryForm.js? 
	user clicks add user
    add user returns false
    error message displays until user changes username?
    
==================================================
The app should also display a list of users, specifically their usernames
and the number of games they've played (which is defaulted to 0). If someone
tries to add a user when one of the fields is empty, the "Add" button should
be disabled.

component:
	UserList.js
    
=======================================================
We should also have a button that lets us toggle between showing and hiding
the number of games the users have played. For example, the button can start
out as "Hide the Number of Games Played" and the app can display "username1
played 0 games." Clicking that button should change the button text to
"Show the Number of Games Played" and the displayed username and score can be
changed to "username1 played \* games."

component:
	ToggleGamesPlayedButton.js
		props: toggleGamesPlayed={() => this.toggleGamesPlayed()}
        
    UserList.js
    	props: showGamesPlayed={this.state.showGamesPlayed}
        
        

function (in App.js):
    toggleGamesPlayed () => (
    	setState(prevState) => ({
        	showGamesPlayed: !prevState.showGamesPlayed;
        })
    )

=============================================================================

State management is at the heart of React. It allows us to have a single source
of truth for our entire application. That means that we don't need to make sure
that our data is synched across multiple components; React does it for us. It
happens via unidirectional data flow: parent components pass properties to
child components as props.

Remember that state cannot be modified outside of the component in which it is
declared. If a child component needs to pass some data back up to the parent (e.g. a
form that conveys the new user information to the component that holds that the
users piece of state), we'll need to pass callbacks from the component that holds
state all the way down to the required component. By calling those callbacks, child
components are able to pass data to back up to their parents, which are able to
modify their state. Props can go through multiple components to get to the
component they ultimately need to reach.

This practice exercise will help you cement your understanding of where to put
state, how to update and access state, when to use stateless functional
components, and how to use controlled components.

We recommend following the [Thinking in React Guide](https://reactjs.org/docs/thinking-in-react.html when you're building your
React applications.

#### Step 1. Break down the app into a hierarchy of components. Draw a box around each React component.

#### Step 2. Determine the data in our app.

#### Step 3. Figure out the data that should be a part of our state:

1.  Is it passed in from a parent via props? If so, it probably isn’t state.

2.  Does it remain unchanged over time? If so, it probably isn’t state.

3.  Can you compute it based on any other state or props in your component?
    If so, it isn’t state.

#### Step 4. Identify where each piece of state lives.

1.  Identify every component that renders something based on that state.

2.  If multiple components need the same piece of state, put that piece of state into those components' parent-most component.

If you can’t find a component where it makes sense to own the state, create
a new component simply for holding the state and add it somewhere in the
hierarchy above the common owner component.

#### Step 5. Add Inverse Data Flow.

State should be updated inside of the component where that state lives.
If we pass state down from component A to component B and then need to update
the state based on something that happened in component B, we can do so via
callbacks: Component A will not only pass state to Component B, but it will
also pass a callback function that will fire whenever the state should be updated.
