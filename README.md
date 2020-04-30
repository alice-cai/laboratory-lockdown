## hacking game??? (dev readme)

### Start the server:

First, do the `venv` stuff:

```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Then, start the server:

```
python3 server/app.py
```

### Use nodemon to automatically run `yarn build`:

Navigate to the `react-app` directory and run the following commands:

```
npm install
nodemon --exec yarn build --watch ./src -e tsx,ts,js,jsx,json,html,css
```

### other setup

TODO: put a list of required packages and shit here

### note that if you don't have heroku set up, run the following

```
brew tap heroku/brew && brew install heroku
heroku login
```

if u don't have ur keys set up

```
heroku keys:add
```

### dev

```
git remote add stage git@heroku.com:hacking-game-stage.git
git push stage master
heroku open
```

to start the heroku dyno:
```
heroku ps:scale web=1
or
heroku ps:restart web
```

to check logs
```
heroku logs --tail
```
