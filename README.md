# Welcome to NodeScape

## Local Development

### Clone the Repository

```bash
git clone https://github.com/REZ0AN/NodeScape-Demo.git
cd NodeScape-Demo
```

### Install Required NPM packages

```bash
npm i
```

### Start Development Server

```bash
npm run dev
```
**Note**: Open up the given URL on your desired browser

## Docker Setup and Test

After writing the `Dockerfile` you may build it and then run it with desired port and then check for the availability of the page.

### Build the Image

```bash
docker build -t <image-name> .
```

### Run the Container

```bash
docker run -it -d -p 8088:80 <image-name>
```
### Access the Application

```bash
http://localhost:8080
```
## Dockerhub Integration (Manual)

### Login to Docker Hub

```bash
docker login
```

### Tag Image

```bash
docker tag <image-name> <dockerhub-username>/<repository-name>:latest
```
### Push Image

```bash
docker push <dockerhub-username>/<repository-name>:latest
```
### Pull Image

```bash
docker pull <dockerhub-username>/<repository-name>:latest
```

### Run Image

```bash
docker run -it -d -p 8080:80 <dockerhub-username>/<repository-name>:latest
```

## CI/CD Pipeline (Auto Push)