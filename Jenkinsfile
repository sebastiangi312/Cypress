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
                    apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
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