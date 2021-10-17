# Cyera DevOps home assignment
## Project Description
You get a sample project of "TODO app" that contains frontend, backend and a postgres DB to store the tasks.

## Some points
You might face technologies that you have never used before, that’s fine. We would like to get a sense of your self-learning skills. That’s something every DevOps engineer faces on a weekly basis.
There are several different solutions for this task, you’re welcome to discuss different ideas and possibilities with your interviewer. There’s more than one excellent solution. 
Think of automating every small step in the process, and about the tools you’d use for this. Every step you have to implement in your solution should be under version control and automated. Meaning - if your whole solution is deleted - it should take 5 minutes to set up again.
Feel free to contact your interviewer for any question that arises, the goal is for you to focus on the important parts of the exercise so if you feel you’re wasting time - consult to make sure you’re indeed implementing what is important.

## Instructions
* Each step should be pushed as a separate branch to your git repo.
* All the script and installation should work on ubuntu.
* Create installation bash file - setup.sh, for all the programs you need for the application. like docker, terraform etc.
update it as you go.
* Create a run.sh file to execute the application after the installation.

You have some steps for this assignment.

1. Run the system using docker-compose.

    Extend the existing docker-compose file and add dockerfiles to the frontend and backend.

    For both the frontend and the backend use node version 15.9.0.

2. Create a free tier AWS account, and run the docker-compose on an EC2 in that account.
  
    Make it accessible from the internet and provide the url of the app.

3. Convert the Docker-compose configuration to terraform configuration and update the run file.

### Bonus

4. Change the terraform configuration to use kubernetes provider instead if docker.

    Run the cluster on the EC2 using Minikube, no need of using EKS.
