# eCalendar

## Overview

While we may be a long way from the practice of using daily organizers produce by companies like Daytimer, there's still room for improvement. This calendar demonstrates functional programming using javascript frameworks.

- Originally developed as a solo project for Chingu Voyage 21.
- Frontend implemented with React
- Live view: http://ecalendar.dekalbwebdev.com/
- _(WIP) Backend to be implemented in Node.js_

## Features

- [x] User view currrent month
- [x] User can scroll forward or backward one month at a time
- [x] User can select a day to view events
- [x] User can add new events

## Setup

- clone this repository
- cd to `calendar-react` directory
- `yarn start`

## Screenshots

### iPhone

![iPhone Landscape](screenshots/iPhoneLandscape.png)

![iPhone Portrait](screenshots/iPhonePortrait.png)

### iPad

![iPad Landscape](screenshots/iPadLandscape.png)

![iPad Portrait](screenshots/iPadPortrait.png)

## Dependencies

- No css libraries
- No javascript libraries

## TODO

- [x] Create React app

- `npx create-react-app calendar-react`

- [x] Create Node Server

- `npx express-generator calendar-api --no-view`

- [x] Basic Calendar view
- [x] Event Box scaffold
- [x] Modal Form scaffold
- [x] Add event from modal form
- [ ] Route GET /events
- [ ] Route PUT /event
- [ ] User authentication

## Notes

- This repo contains two separate projects representing the front end and backend code. Currently, only the frontend has been implemented.
- Tutorial for custom hooks for forms: https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57
