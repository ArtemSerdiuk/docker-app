docker rmi -f $(docker images 'docker-ssr' -q)
docker build . --file Dockerfile --build-arg ENV=prod --tag docker-ssr:latest;
docker run -p 8080:80 docker-ssr:latest;
