The website follows a structured flow: Landing page -> Login page (if the "Join Now" button is clicked and the user hasn't logged in) -> Registration form (for enrollment) -> Payment page -> User page (profile page). The website is built on React.js and utilizes Google Cloud.

To run this project locally, it is necessary to install node modules first using the npm install command. 
The website features a navbar for easy navigation back to the home page or the profile page, which becomes accessible only after enrollment.
In the registration form, the user is required to provide details such as their name, email, age, batch, and mobile number. All these details are stored in the Firestore database.
A constraint has been implemented in the registration form to ensure that users aged between 18 and 56 are eligible to apply. After logging in, users can fill out the form and proceed to make payments using card details, with the default amount set to 500.

Users can create accounts or log in using their email and password. Additionally, for enhanced security and efficiency, users can log in with Google through Firebase authentication.
Upon successful enrollment, users gain access to a profile page where all the saved details from the registration form are displayed. Notably, users are restricted from changing their batch within the same month of enrollment.
Notifications are displayed when the enrollment period concludes, and users can re-enroll using the same registration form after receiving the notification.

LANDING PAGE:

![Screenshot (176)](https://github.com/kiran023/flexmoney_assesment/assets/83301086/8b12f6c4-7c2b-419c-87d5-13180824aae4)

REGISTRATION PAGE:

![Screenshot (177)](https://github.com/kiran023/flexmoney_assesment/assets/83301086/e0b1f5e3-b88d-48d2-a8e6-5cc6b42e6586)

LOGIN PAGE:

![Screenshot (178)](https://github.com/kiran023/flexmoney_assesment/assets/83301086/ae27770c-4eca-4df3-b58b-cf34a644dfd1)
