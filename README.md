<h1 align="center">
  <img alt="delivery-api" title="delivery-api" width="300px"  src=".github/logo.png" />
</h1>

<h3 align="center">
  DeliveryAPI - An order delivery service
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/filipebteixeira98/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Filipe%20Teixeira-%23D1CB36"></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/filipebteixeira98/delivery-api?color=%23D1CB36">
  <a href="https://github.com/filipebteixeira98/delivery-api/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/filipebteixeira98/delivery-api?color=%23D1CB36"></a>
  <img alt="GitHub" src="https://img.shields.io/github/license/filipebteixeira98/delivery-api?color=%23D1CB36">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a> •
  <a href="#-technologies">Technologies</a> •
  <a href="#-getting-started">Getting started</a> •
  <a href="#-license">License</a>
</p>

## 📚 About the project

DeliveryAPI is a project created in [Rocketseat](https://rocketseat.com.br/) Ignite Node.js bonus training.

This small server application was developed in order to study the main concepts of Prisma ORM. In a simple way, it allows registering an account for clients either deliverymen, place orders, in addition to providing some information about it and much more.

## :rocket: Technologies

This project was made using the follow technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Prisma ORM](https://www.prisma.io/)

## :computer: Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [NPM](https://www.npmjs.com/) _(examples are with yarn)_
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/filipebteixeira98/delivery-api.git
```

**Follow the steps below**

```bash
# Create the instance of postgreSQL using docker
docker run --name delivery-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=delivery -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Install Dependencies
$ yarn

# Use the script to run the migrations
$ yarn prisma migrate dev

# Run Application
$ yarn dev
```

## :bug: Issues

Create a <a href="https://github.com/filipebteixeira98/delivery-api/issues">new issue report</a>, it will be an honor to be able to help you solve and further improve our application.

## :sparkles: Contributing

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork filipebteixeira98/delivery-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd delivery-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## :page_facing_up: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with 💜&nbsp; by <a href="https://www.linkedin.com/in/filipebteixeira98/">Filipe Teixeira</a>
</p>

Thank you! 🌠
