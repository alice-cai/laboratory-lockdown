# Laboratory Lockdown

It has been discovered that a secret government lab has been creating deadly viruses for use as biological weapons. It's up to you to stop them before it's too late! Your mission is to hack into the laboratory's computer system and shut down the power source. Do you have what it takes?

Click [here](https://laboratory-lockdown.herokuapp.com/) to play!

## Tools & Technologies

The frontend was created with TypeScript React-Redux. The backend was created with Flask.

## Game Screenshots

![intro screen](https://user-images.githubusercontent.com/34670205/81302603-95977e80-9048-11ea-8361-4ea0db895982.png)

![gameplay](https://user-images.githubusercontent.com/34670205/81302664-a3e59a80-9048-11ea-91b9-38aba8dd6f3a.png)

![map](https://user-images.githubusercontent.com/34670205/81302726-bc55b500-9048-11ea-9feb-c16f22249b40.png)

## Inspiration

This game was heavily inspired by [Mu Complex](https://store.steampowered.com/app/383690/Mu_Complex/). I played this game when I was a kid and loved the concept so much I wanted to make my own shitty version of it - check it out if you love hacking/puzzle/adventure games!

## Development Instructions

### Server

Start the virtual environment and install dependencies:

```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Start the server:

```
python3 server/app.py
```

### Frontend

Navigate to the `react-app` directory and run the following commands:

```
npm install
nodemon --exec yarn build --watch ./src -e tsx,ts,js,jsx,json,html,css
```
