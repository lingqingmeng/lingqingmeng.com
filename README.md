# lingqingmeng.com

Personal Portfolio 2019

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

In your preferred text editor, open or create a `~/.profile` file and add this line:

```
export PATH=~/.npm-global/bin:$PATH
```

On the command line, update your system variables:

```
source ~/.profile
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

```
yarn add babel-preset-gatsby --dev
```

Remember to save dev

```
yarn
```

```
yarn build
```

Run with local http-server if staging

```
./node_modules/http-server/bin/http-server public/ -p 7000
```

if on local dev environemnt run

```
yarn start
```

```
http-server public/ -p 7000
```
