## hacking game???

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

Navigate to the `client` director and run the following command:

```
nodemon --exec yarn build --watch ./src -e tsx,ts,js,jsx,json,html,css
```

### other setup

TODO: put a list of required packages and shit here

I installed heroku
```
brew tap heroku/brew && brew install heroku
```

idk what i'm doing lol