node {
    // Get Artifactory server instance, defined in the Artifactory Plugin administration page.
    def app

    stage('Clone sources') {
        git url: 'https://github.com/mwinteringham/restful-booker.git'
    }

    stage('Clone repository') {
        // Tool name from Jenkins configuration
        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build()

    }

    stage('Test image') {

       app.inside {
            sh 'npm install'
            sh 'npm run test-headless'
        }
    }
}