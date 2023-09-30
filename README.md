# How to host your own replays and logs

1. Clone this repo: Begin by cloning the project repository using your preferred method. This will create a local copy of the project on your computer.

2. Drop your logs: Place your game logs into the "logs" folder from Town of Salem 2. Additionally, repeat this step for replays. You can access the logs folder from the in-game menu under "Mod Actions." 

3. Change settings: Modify the values in the settings.json file to provide the required inputs. 

4. Run upload.bat: Execute the upload.bat batch script. 

5. Commit changes: After running the batch script, commit the changes to your local Git repository. If the repository is unpublished, you should also publish it if you're aiming to host a static page.

6. Repeat steps 2, 4, and 5. Alternatively, only steps 2 and 4 if you're not hosting a static page.

# Hosting Github Pages

1. Go to repo settings: If you want to host your logs and replays as a webpage on GitHub Pages, go to your repository clone's main page on GitHub.

2. Access Settings: Click on "Settings" in your repository, which is typically represented by a gear icon. It's located near the top middle of the screen.

3. Locate Pages settings: Find the "Pages" settings within the repository settings. This is where you'll configure how your GitHub Pages site will be deployed.

4. Configure deployment: Ensure that your GitHub Pages site deploys from the root of the main branch. Depending on GitHub's interface changes, you may need to click a "configure" button for the "static page" deployment.

5. View or customize your site: Once your GitHub Pages site deploys, you can view it on a GitHub Pages subdomain. You also have the option to add a custom domain if you own one, allowing you to access your hosted content via your own domain.