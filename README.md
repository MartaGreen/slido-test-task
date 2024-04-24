# Slido react task

The app is loaded with these query string parameters:
- apphost=AcmeDesktopApp (app name)
- appversion=1.1.0 (three numbers separated by dot)
- os=win, or os=mac (os platform)

If the app is loaded using outdated platform version, "Update required" screen is displayed.
Outdated versions:
- os=win: appversion older then 1.5.0 is outdated
- os=mac: version older then 0.28.0 is outdated and also versions 1.5.100, 1.5.120, 1.5.123

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
To test the functionality add query params to localhost url in your browser.
For example:
- http://localhost:3000/?appVersion=0.28.1&apphost=AcmeDesktopApp&os=mac
- http://localhost:3000/?appVersion=0.27.0&apphost=AcmeDesktopApp&os=mac
- http://localhost:3000/?appVersion=1.0.0&apphost=AcmeDesktopApp&os=win
- http://localhost:3000/?appVersion=1.5.0&apphost=AcmeDesktopApp&os=win

### `npm test`

Launches test for the situation when the Update required screen should and should not be shown

### `npm run build`

Builds the app for production to the `build` folder.\
