# Personal-Portfolio: https://lorenechew.com

Built with Javascript ES6, React, React Router, Webpack, Babel. Deployed using GitHub Pages.

### Features: 
- Typewriter animation upon website load
- Dynamic color gradients on hover
- Email functionality for contact form using EmailJS
- Validate and verify user-entered email addresses to ensure data accuracy via Verifalia API
- Teachstack tag indication for each project
  
### To Do:
- Lazy loading on hobby tile images
- Finetune mobile version

## Local Setup
1. Fork repository to your personal GitHub account
2. Clone repository to your desktop:
   ```
   git clone <https://github.com/example/repo.git>
   ```
2. Navigate to the directory and install dependencies:
   ```
   npm install
   ```
3. Create EmailJS and Verifalia accounts to obtain API key and values.
   - Create config.js file and add in keys/values based on variables located at the top of the GetInTouch component
  ```
  import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
  VERIFALIA_API_USER_KEY,
  VERFIFALIA_API_USER_PW,
  } from '../../../config.js';
  ```
5. Build an start the app:
   ```
   npm run serve
   ```


## Technologies Used

- Setup and Configuration \
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

- Front End Development : Javascript, React.js, React Router, HTML, TailwindCSS \
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)




