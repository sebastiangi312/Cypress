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
                sh 'CYPRESS_BASE_URL npm run test:open'
            }
        }

    }
}