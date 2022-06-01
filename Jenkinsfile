pipeline{
    agent any

    tools{
        nodejs "NodeJS"
    }

    stages{

        stage("Install Cypress"){
            steps{
                sh 'npm install'
            }
        }

        stage("Run tests"){
            steps{
                sh 'npm run test:open'
            }
        }

    }
}