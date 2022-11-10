Mark my words is a web extension that allows users to highlight text and create notes within a weba page, wherre the information is saved and can be referred back to in the future
# Phase 1
During this phase we decided to build a menu system and give the ability for a user to highlight selected text on any web page.
###
Before coding we wanted to specify how the extension will look and function and how users will see it. The first design we created was a high level overview of how the product would work.
###
![First Image](https://github.com/3100ashley/CS4540-Collab/blob/main/images/image_1.JPG "image_1")
###
We wanted to go into more detail and recreated the design using an interface designer called Figma.
![Second Image](https://github.com/3100ashley/CS4540-Collab/blob/main/images/image_2.JPG "image_2")
##
We added a “Mark My Words”, web extension icon. Which will document all web page urls that have saved highlighted notes on it. When a user clicks on the icon it will open a new webpage that shows all the url links with saved notes.
![Third Image](https://github.com/3100ashley/CS4540-Collab/blob/main/images/image_3.JPG "image_3")
![Fourth Image](https://github.com/3100ashley/CS4540-Collab/blob/main/images/image_4.JPG "image_4")
##
This image depicts a user selecting a piece of text and the extension menu appearing. When a user highlights text on a web page the text will stay highlighted after it has been unselected with whichever color they choose in the options menu or it will default to the first option which is a bright yellow. The last menu option would allow the user to leave a collapsible note on the web page with their own message. The result would look like the image below.
![Fifth Image](https://github.com/3100ashley/CS4540-Collab/blob/main/images/image_5.JPG "image_5")
###
 In this phase we implemented the icon that opens a new tab and the marked pages will be shown. It lists the web pages the user has made highlights or notes. We also created a menu with different highlight colors and a button to create a note. This menu will appear when a user right clicks on a selected piece of text.  Lastly a user can highlight a selected text.
### Technical Highlights
 Highlighting selected text:
 I, Ashley, worked on highlighting text a user selects on a page. The most challenging aspect of this phase was understanding how to edit a web page. I’ve had experience working with the DOM, so it was a little familiar to me when working on this project. I did have difficulty searching for highlighting a web page. So I broke down my issue into smaller steps. My first thought was to print the selected text. Once I was able to do that I saved that information to a variable. I then created a span that will surround that variable and add a yellow background as highlight. 
### Mark My Words Tool Icon
At first we wanted to use a popup function for when the icon was clicked, but then learned that the popup can only display html. We tried using javascript within the html file to allow it to open a new tab to display another html page, but that didn’t work because to open a new tab it requires browser action. So we learned that we couldn’t use the popup tool to open a new tab in the browser. We resorted to using javascript in the background contents script. From there we learned we were able to access all browser related information. We will use that to collect all urls with marked texts or notes and give us access to opening a new tab when a user clicks the “Mark My Words” icon. From there we are still dealing with the challenge of trying to collect all the urls with marked text or notes and have it displayed when the icon is clicked.
### Context Menu Options
 The goal for this aspect of the extension was to allow the user to select a variety of colors for the highlight.  We then searched for examples related to building the buttons in the context menu first.  The search led me to an open sourced website detailing how to implement a wide variety of features for FireFox.  However, an issue came to light when the options for the context menu would not show up after right clicking a highlight text. We would then create a test application to verify the issues that were present within our main project.  Although, the effort proved to be fruitless, so our goals were changed from developing highlight colors to having the buttons be shown.  We continued to search for solutions until we took a look again at the open source website.  We noticed that the creation of buttons had a feature with a set number of functions related to the context menu.  After choosing the appropriate feature, the buttons finally showed. Our next goal would be to add highlight color functionality once the user highlights a specific text.
### Teamwork and Process
In the beginning stages we planned out what needs to be done during this phase. We used Jira to help keep track of our progress. We made use of the backlog and the sprints. Communication has made our teamwork very efficient and functionable.
#### Triage: Agenda for final demo
Tasks to complete for final demo
- Save highlighted text in webpage
- Highlight text with specified color
- Save notes within web page
- Save urls where users have made notes and higlighted text
- Display all urls with notes and highlighted text.
