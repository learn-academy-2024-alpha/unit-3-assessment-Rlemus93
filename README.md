# Assessment for Unit 3

Being a developer requires an acute attention to detail. The expectation of this assessment is that all instructions are read carefully and followed completely.

A good developer will ask clarifying questions when a task is unclear and use all the resources at their disposal.

The step-by-step instructions [here](https://github.com/LEARNAcademy/Syllabus/blob/main/github/assessments.md) breakdown the git and GitHub process for this assessment.

Assessment should be accessed through the GitHub Classroom link provided to you in Slack.

PRs should be posted _before_ class begins on Monday, March 4, 2024.

#### Process

- Accept the assignment via GitHub Classroom link shared with you in Slack
- `cd` into an appropriate location on your local, we recommend the Desktop
- Clone the assessment repository
- `cd` into the assessment
- Create a branch with the unit and your name, e.g `unit-3-sarah-proctor`
- Run $ `yarn` to install the React dependencies
- Run $ `yarn start` to start the server
- Complete all assessment tasks
- Git add files, commit, push to your branch
- Create a pull request and leave the branch open for review!

---

### React Challenge

1. React Debugging: The Card Draw React application has three (3) errors that need to be fixed. Use the console and error messages to guide you to the solution. ✅

-1st error was adding fragements syntax <></> in the return on App.js
-2nd error was adding the export default Card to card.js component
-3rd error was using passing props hand to Card.js. i used the destructured {hand}

2. React Feature: Add functionality to the `Return Cards and Shuffle Deck` button using the `shuffle` function to reset the Card Draw application to its original state.✅

-added logic to the function shuffle. only added setHand([]). added the onclick to the button on line 53 which when clicked takes you back to the original state which is an empty array. 

3. React Concepts: Add comments to the seven (7) notations in the `drawCard` function describing in detail the functionality line of code BELOW the comment.✅

4. STRETCH (optional): Add stylings of your choice to the application. Ensure the styling does not interfere with the card draw functionality. ✅

### Interview Practice Questions

1. What are three (3) syntax differences between HTML and JSX?

- class vs className to specify css classes
- in JSX you use {} for embeded javascripts expressions/variables. allows dynamic rendering.
- fragment syntax <></> allows grouping in JSX

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

-yarn is a Javascript package manager. running it in terminal adds the dependencies and creates the node_modules. this will then allow you to run you app using yarn start. 

3. What is the difference between state values and props in React?

- state values are mutables and props are immutable.
- scope- state is local to the component where its defined. props can be passed from parent to child components
- state is within a component using a use state hook in functional components. props are received by components as attributes in JSX when the components is used in the rendering. 

4. STRETCH (optional): What is the difference between a div tag and a span tag?
- a div tag is used to divide sections off in a webpage and spans the full width of the element. the span tag is used for inline styling. or for smaller portions of the content. 
- if im right on this credit goes to morgan she taught me this within our tic tac toe project! but i remembered this from how she explained. i knew div but she showed me span.

### Looking Ahead: Terms for Next Unit

1. Object-oriented programming: after reading in the syllabus i would summerize OOP as a paradigm that organizes design around object. whic are data structures that encapsulate state and behavior. to me it sounds like OOP is just to enhance user expierence as applications grow it needs more to be able to handle everything that is thrown at it.

2. Ruby: a backend OOP programming language. it is open source. 

3. Ruby Hashes: a dictionary-like container for unique keys and their corresponding values.

---

### Assessment Review Process

When an instructor reviews a student's assessment the instructor is evaluating the work through the lens of the Dreyfus model of skill acquisition. The Dreyfus model describes how individuals progress through various levels in their learning process of new skills in the following levels: novice, advanced beginner, competent, proficient, expert. For this course students will be evaluated as novice, advanced beginner, or competent skill levels. Skill levels are not grades! Skill levels measure the current understanding of a set of topics covered in class.

Assessments are expected to be completed on time. In the event of an emergency, a professional developer will communicate with the instructor and reestablish a deadline suitable to both parties. Assessments turned in late without communication will be evaluated at a lower level of skill acquisition.

### Incomplete

An assessment that is considered incomplete is one that does not meet the requirements of a valid attempt on every question. Incomplete assessments will not be reviewed and will be returned to the student for completion. Students with incomplete assessments will not be able to access the next assessment until the current one is complete. An assessment will be considered incomplete due to the following:

- questions with no answer (excluding STRETCH options)
- no pseudo code when requested
- non-working code with no accompanying explanation

### Complete

An assessment that is considered complete is one that meets the bare minimum requirements of a valid attempt on every question. An assessment that is considered complete did not display enough effort to reach the novice level of skill acquisition.

### Novice

The novice stage is the first level of skill acquisition. In the novice level, the student is just beginning to understand the skill and requires a step-by-step "recipe" to produce an output. An assessment that is considered at the novice level of skill acquisition is one that meets the requirements of a valid attempt on every question while closely following process notes from class to produce:

- basic pseudo code
- code that will output content in the terminal
- "your answers" written in the student's own words
- researched answers written in the student's own words that provide additional context

### Advanced Beginner

The advanced beginner stage is the second level of skill acquisition. At the advanced beginner level, the student can begin to troubleshoot problems on their own and can decide if the "recipe" will be able to produce a particular outcome. An assessment that is considered at the advanced beginner level of skill acquisition is one that meets the requirements of a valid attempt on every question while adapting process notes from class to produce:

- pseudo code with proper vocabulary terms
- code that will output correct content in the terminal
- "your answers" written in complete sentences in the student's own words that provide partially correct comments
- researched answers written in complete sentences in the student's own words that provide additional context

### Competent

The competent stage is the third level of skill acquisition. At the competent level, the student can decide what information is relevant to solve the problem and can begin to create their own "recipe" to produce a particular outcome. An assessment that is considered at the competent level of skill acquisition is one that meets the requirements of a valid attempt on every question while adapting process notes from class as well as from other resources to produce:

- detailed pseudo code with proper vocabulary terms
- code that will output correct content in the terminal following best practices
- "your answers" written in complete sentences in the student's own words that provide correct answers
- well-researched and detailed answers written in complete sentences in the student's own words that provide additional context
