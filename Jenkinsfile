pipeline{
    agent any

    tools{
        nodejs "NodeJS"
    }

    stages{

        stage("Install dependencies"){
            steps{
                sh '''
                    npm install -D cypress --save-dev
                    npm install mocha mochawesome cypress-mochawesome-reporter --save-dev
                    npm install cypress-multi-reporters --save-dev
                    npm install mochawesome-merge --save-dev
                    npm install mochawesome-report-generator --save-dev
                    npm install -g wait-on
                '''
            }
        }

        stage("Run tests"){
            steps{
                sh "npm test"
            }
        }

    }
}