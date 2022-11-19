# ondecentral.com

Landing page 2/2/2022

|                         |                  |
| ----------------------- | ---------------- |
| start gatsby dev server | `gatsby develop` |
| build static site       | `gatsby build`   |

# How to deploy

On your local machine:

```zsh
gatsby build
make deploy-site
```

Notes:

- If you dont have `make` installed, 👉 [macOS](https://stackoverflow.com/questions/10265742/how-to-install-make-and-gcc-on-a-mac), [Windows](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows)
- Before running `$ make deploy-site` , make sure you have access to the ssh server and you have the eys configured and the /public folder is built in your project

# Pre-req

## Developer System Dependencies

If on Mac

```zsh
npm install --global yarn
```

## Pre-req

## Install yarn on cloud instances

```bash
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
sudo apt-get install libpng-dev
```

## Ensure access

To minimize the chance of permissions errors, configure npm to use a different directory. This will show you how to create and use a hidden directory in your home directory.

On the command line in `~`, create a directory for global installations:

```bash
mkdir ~/.npm-global
```

Config npm to use the new dir path:

`npm config set prefix '~/.npm-global'`

In RHEL cloud vi open former else open latter

`~/.bashrc` OR `~/.profile`

file and upsert line:

`export PATH=~/.npm-global/bin:$PATH`

On the command line update those system variables:

`source ~/.profile`

Test your new config by installing a package globally without using sudo

## Common pain points

Node gyp on mac
[Debug article](https://codeforgeek.com/make-failed-with-exit-code-2/)

Node GYP Error on Apple Silicon Mac (Tried on M1 Mac)
[Debug Article](https://github.com/nuxt/image/issues/204)

## Deploy Staging

Assuming you are on Ubuntu AWS

Also reminder to

```
sudo apt-get install build-essential
```

Back up your computer.
On the command line, in your home directory, create a directory for global installations:

```
 mkdir ~/.npm-global
```

Configure npm to use the new directory path:

```
npm config set prefix '~/.npm-global'
```

If it's not already in your bashrc already, in your preferred text editor, open or create a `~/.bashrc` file (`~/.bash_profile` on OSX) and add this line:

```
echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.bashrc
```

On the command line, update your system variables:

```
source ~/.bashrc
```

To test your new configuration, install a package globally without using sudo:

```
npm install -g jshint
```

Will be needed.

## Normal Dev

```
npm install -g gatsby-cli
```

> PROTIP: Don't forget to run `gatsby telemetry --disable` afterwards

### On a Macbook Pro

If you haven't ran the code in a while

`yarn upgrade`

verified to resolve the issue on osx local dev

### Otherwise

```
yarn add babel-preset-gatsby --dev
```

Remember to save dev

```zsh
yarn
```

```zsh
yarn build
```

Run with local http-server if staging

```zsh
./node_modules/http-server/bin/http-server public/ -p 7000
```

if on local dev environemnt run

```zsh
yarn start
```

```zsh
npx http-server public/ -p 6000
```

Add pm2 and run with `./pm2 list` to test prior to production start

```zsh
yarn add pm2
pm2 serve public/ 80
```

# Troubleshooting

## If you are running OSX Ventura on Apple Silicon 

Assumptions: you are using `yarn` and building locally

And you are getting an issue with the npm package sharp

The solution is contained here https://github.com/nuxt/image/issues/204

## Other Builds

`Issue when installing NPM module sharp`

- Remove hidden config file in home directory `rm -rf ~/.pm2`

`zsh: command not found: yarn`

- Run `source ~/.profile`
