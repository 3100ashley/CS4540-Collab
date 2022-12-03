## Goal
Our teams' goal is to produce an extension that will help students or those who like to read online take notes effectively by highlighting selected text and annotating within a web page that they can refer back to.

Each member brings different skills and experiences to the team.
* Alvent Chang
    * Experience with Javascript
* Jesse Gonzalez
    * Experience with Javascript and React.
* Ashley Manese 
    * Worked in a crossfunction team to build a prototype application using React Native.
    * Built websites using Javascript, jQuery, and React.

### Git Work Flow

#### Retrieve most recent code
* Make sure you are in the main branch: git checkout main 
* On the main branch: git pull origin main 

### Build a new feature
* Create a new branch: git checkout -b < branchname >
* Build out new code
* View which files are not tracked: git status
* Add the files you want to stage: git add <filename(s)> or git add . 
* Capture snapshot: git commit -m <message>
* Push changes: git push origin < branchname >
  
  
## Create zip file
* zip -r mark_my_words.zip .
   
## Online Meeting 1: 09/20/22
All team members attended the meeting.
Discussed what extension ideas to create:
* Notes extension where users can highlight and jot down notes in the web page
* A Pomodoro Timer extension that can block other pages while studying 
* To do list extension

## Meeting 2: 10/20/22
All team members attended the meeting.

Project Management: [Jira](https://markmywords.atlassian.net/jira/software/projects/MARK/boards/2)

All team members looked for inspiration to create the extension. 
Extension Inspiration: 
* [Medium Highlighter](https://medium.com/@mariusbongarts/how-to-build-the-medium-text-highlighter-as-a-chrome-extension-with-web-components-b3feccddcd01)
* [Super Simple Highlighter](https://chrome.google.com/webstore/detail/super-simple-highlighter/hhlhjgianpocpoppaiihmlpgcoehlhio?hl=en)
* [Highlight This](https://highlightthis.net/)

Ashley followed the in class tutorial to start the extension. She is having trouble installing the web-ext to reload the files.

Next steps:
* create issues on jira
   * Create wireframe (Ashley)
   * Build Out technical report (everyone)
   * Create menu when a user selects text (Jesse)
   * Highlight text when user selects text (Alvent)
   * Test menu and highlight text (Ashley)
* Solve web-ext issue

## Meeting 3: 10/26/22
Ashley and Alvent attended this meeting to practice working with github. Ashley worked on highlight feature as well as figma prototype and wireframe.
* [Figma](https://www.figma.com/file/1IQ7R6N0NXDfp6PgEOyDH1/Mark-My-Words?node-id=0%3A1)

## Meeting 4: 11/09/22
* Everyone finalized sections of code and pushed to main.
* Need to edit technical report.
* Need to edit presentation slides. 
   * Speaking Points
   - Highlevel on what was built out and the steps we took. (Ashley)
   - Highlighting text on a web page. (Ashley)
   - Marked Pages Icon that will open a new tab of marked URLS. This is a static page for now. (Alvent)
   - Context menu options (Jesse)
 
## Meeting 5: 11/29/22
* Assigned tasks
   - Change highlightcolor when piece of text is selected. (Ashley)
   - Save highlighted text after page reload. (Ashley)
   - Save marked pages after page reload. (Alvent)
   - Create a note pad for users to write on. (Jesse)
   - Save notepad information. (Jesse)
   
## Meeting 6: 12/01/22
* Alvent and Ashley discussed with Juhis about issues saving data to browser.
* Alvent finalized and pushed code for added marked pages to an html page. 

## Meeting 7: 12/02/22
* Team met up to 
   - decide what is another way to create a note section.
   - try to help Ashley's issue with solving how to store the range object of a peice of text to storage.


## Future Meetings
Future meetings will be held online or after class in the school library and we will be collaborating our work on Github. 
Each team member is responsible for understanding the tech stack and asking for help when needed. 
We will make decisions by voting or evaluating which ideas are within our capacity to create within the given time frame. 
