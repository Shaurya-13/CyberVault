CyberVault - x18138284 - Shaurya Kumar - BSHC 4 Cyber Security - NCIRL

CyberVault is my final year project. This is a fully completed and authentic version of the source code base.

To run the application, please follow the following steps - 

1. Clone Github repository.
2. Then initiate 'npm run build' to properly setup the next app on your machine after navigating to the cybervaultnext folder in cmd interface.
3. Create a .env.local file in the main folder of cybervaultnext, a .env.sample file has been provided (same environment variables are to be setup)
4. The environment variable keys will be provided with the github link in the .txt file that will be submitted for your convenience.
5. Then in the cmd interface again navigate to the cybervaultnext folder and run the command 'npm run dev' to start the localhost:3000 server
6. To setup the falsk/python application, first navigate to the flaskbackend folder and install all necessary dependencies (mentioned in the rquirements.txt file)
7. Run 'pip install -r requirements.txt' in the cmd terminal when navigated inside the flaskbackend folder of the project.
8. finally run 'python faceAuthServer.py' in the cmd terminal to run the flask server in the back-end (for facial authentication to work).
9. Carefully configure the environment variables and run both servers together.

For testing purposes 
1. Please run 'npm run cypress' in the cmd line when navigated inside the 'cybervaultnext' folder of the project.
2. Then inside the test runner you can select the test to run or run all tests together.
3. Keep in mind to run the tests both servers must be running as well (flask and localhost).
4. Specifically for the password manager tests facial authentication is required, so please register your facial ID as well.

Thank you!