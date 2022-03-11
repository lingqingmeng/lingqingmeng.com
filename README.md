# ondecentral.com

Landing page 2/2/2022

|                         |                  |
| ----------------------- | ---------------- |
| start gatsby dev server | `gatsby develop` |
| build static site       | `gatsby build`   |

## Pre-req

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
http-server public/ -p 7000
```

Add pm2 and run with pm2 for production

Add pm2 and run with pm2 for production

```zsh
yarn add pm2
pm2 serve public/ 80
```

# Troubleshooting

`Issue when installing NPM module sharp`
