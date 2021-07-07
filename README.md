# lingqingmeng.com

Personal Portfolio 2020

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

verified to do the trick on osx local dev

### Otherwise

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

Add pm2 and run with mp2 for production
```
yarn add pm2
pm2 serve public/ 80
```
