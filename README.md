# CS-470 Project (Client)
1. Clone the project repo.
   > `git clone https://github.com/evanwike/cs470-project.git`
   >
2. Install the [Angular CLI](https://github.com/angular/angular-cli) (via NPM).
   > `npm install -g @angular/cli`
3. Make sure the CS-470 Server is up and running, using the instructions [here](https://github.com/evanwike/cs470-server).
4. Navigate to the current project directory and install dependencies.
   > `cd cs470-project`  
   > `npm install`
5. If you chose to use a different port while setting up the CS470 Project (Server) earlier, then replace the apiURL in `src/app/_service/data.service.ts`.
   > `apiURL = 'http://localhost:{new port}'`
6. Run the development server for the client.
   > `ng serve`
7. The Development Server uses port 4200. If you're already using port 4200, either allow it to choose a different port or re-run the serve script with a different port.
   > `ng serve --port {new port}`
8. Navigate to `localhost:4200` or `localhost:{new port}`.
9. You're all done, enjoy!
