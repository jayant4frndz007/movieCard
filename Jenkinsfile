pipeline {
    // agent {
    //     docker {
    //         image 'node:6-alpine'
    //         args '-p 3000:3000'
    //     }
    // }
    agent any
    tools {nodejs "nodejs"}

    environment {
        CI = true
    }
    stages {
        stage('Build') {
            steps{
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
        
    }

}