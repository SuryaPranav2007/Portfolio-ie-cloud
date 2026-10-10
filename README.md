## My Portfolio

A personal portfolio website built with HTML, CSS & JavaScript — containerized with Docker (nginx) and deployed on Vercel.

**Fun fact:** This is my probation project for the LeetVerse society at KIIT (Kalinga Institute of Industrial Technology)!

## Live Demo
https://portfolioiecloud.vercel.app

## Tech Stack
- HTML5, CSS3, JavaScript
- Docker + nginx (Alpine)
- GitHub + Vercel

## Run Locally with Docker

```bash
docker build -t myapp .
docker run -d -p 8080:80 --name myportfolio myapp
