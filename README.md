# Appointment Planner Project

to view a live web version of this project [click here](https://appointment-planner-react-project.netlify.app)

An appointment management WebApp
## Built With

- HTML
- CSS
- Vanilla JS
- React

## Recent Updates

- Added a formatTime() function in helpers.js that formats the time to be displayed in 12-hour - am/pm format
- Added a formatDate() function in helpers.js that formats the date to be displayed in the mm/dd/yyyy format
- Added labels above all input fields to help with user-accessability best practices
- Fixed issue with the select element in the appointment form. The issue was that the selected contact choice remained selected/filled-out after submitting form
- Turned appointment and contact tiles into flex elements so that all the tile contents are spread in a consistent manner
  
## Potential Features to Add

- change input border colors onError
- small notification to user explaining the reason for error
- allow users to search in appointments
- allow users to search in contatcts
- allow users to edit saved contacts
- allow users to edit saved appointments

### Notes

Please note, since this is a front-end project, the WebApp only has front-end capabilities. Input data is not sent to a backend server/database and as such, all data is lost upon a page refresh.  