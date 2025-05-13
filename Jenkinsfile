pipeline {
    agent any

    environment {
        PROJECT_ID = 'primal-outrider-456700-m9'
        CLUSTER_NAME = 'autopilot-cluster-1'
        ZONE = 'us-central1-a'
        IMAGE_NAME = "gcr.io/${PROJECT_ID}/gke-demo-app"
        GCP_CREDENTIALS = 'gcp-service-account'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'main']],
                    extensions: [[$class: 'CloneOption', depth: 1]],
                    userRemoteConfigs: [[
                        url: 'https://github.com/Pavanelli/Kubernetes.git'
                    ]]
                ])
                script {
                    // Força a captura do commit hash manualmente
                    env.GIT_COMMIT = sh(
                        script: 'git rev-parse HEAD',
                        returnStdout: true
                    ).trim()
                    echo "Commit hash: ${env.GIT_COMMIT}"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Tag alternativa se GIT_COMMIT falhar
                    def tag = env.GIT_COMMIT ? "${env.BUILD_NUMBER}-${env.GIT_COMMIT.take(7)}" 
                                          : "build-${env.BUILD_NUMBER}"
                    echo "Building tag: ${tag}"
                }
            }
        }
        
        // Adicione aqui os outros estágios (Push to GCR, Deploy, etc)
    }
}
