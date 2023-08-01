# Fortune - Random Quote Generator

Fortune is a Node.js application that Unix-style fortune telling program clone written in Typecript.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

[![DeepScan grade](https://deepscan.io/api/teams/21789/projects/25180/branches/783403/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=21789&pid=25180&bid=783403)
[![Known Vulnerabilities](https://snyk.io/test/github/devmisterio/fortune/badge.svg)](https://snyk.io/test/github/devmisterio/fortune)

## Getting Started

### Prerequisites

- Node.js
- NPM

### Installation and Usage

#### With NPM
Install globally and run with **```fortune```** command

```bash
   $ npm install - g fortune-ts

   $ fortune
```

#### With Docker

Alternatively, you can use Docker to run the project in a container. First, make sure you have Docker installed on your system.
The application will start inside the Docker container, and you will see the random quote displayed on the console.

```bash
    docker run -it --rm devmisterio/fortune
```

### Customizing Quotes

To add your own quotes or modify existing ones, simply edit the text files in the "texts" folder. Each quote should be separated by the "%" symbol.

## License

This project is licensed under the GNU GPL. See the [LICENSE](LICENSE) file for details.

## Contributions

Contributions to the project are welcome. Feel free to submit bug reports, feature requests, or pull requests.

## Contact

If you have any questions or need further assistance, feel free to contact me at arslan_semih@yahoo.com
