from flask import (Flask, render_template, request, jsonify, send_from_directory)
import os

app = Flask('__main__')

# Create some test data for our catalog in the form of a list of dictionaries.
books = [
  {'id': 0,
    'title': 'A Fire Upon the Deep',
    'author': 'Vernor Vinge',
    'first_sentence': 'The coldsleep itself was dreamless.',
    'year_published': '1992'},
  {'id': 1,
    'title': 'The Ones Who Walk Away From Omelas',
    'author': 'Ursula K. Le Guin',
    'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
    'published': '1973'},
  {'id': 2,
    'title': 'Dhalgren',
    'author': 'Samuel R. Delany',
    'first_sentence': 'to wound the autumnal city.',
    'published': '1975'}
]

# tentative commands????
commands = ['help', 'ssh', 'ls', 'cat', 'unlock']
files = [
  {
    'file_name': 'announcement1.txt',
    'file_contents': '''Posted 18/12/17 7:35 AM <eric.freedman@malcolm-avery.co>
      Attention all lab technicians:
      We updated our servers over the weekend. All account login information has been reset. To access your account, enter your full name followed by the year you were born. Please remember to change your password after logging in.

      Eric Freedman
      Lab Supervisor
      Sector 14
      '''
  },
]

# TODO: write a util function in the backend to transform the above shit into this shit
# files_formatted = {
#   'announcement.txt': '''Posted 18/12/17 7:35 AM <eric.freedman@malcolm-avery.co>\n\n
#       Attention all lab technicians:\n
#       We updated our servers over the weekend. All account login information has been reset.
#       To access your account, enter your full name followed by the year you were born. Please
#       remember to change your password after logging in.\n\n

#       Eric Freedman\n
#       Lab Supervisor\n
#       Sector 14\n
#       '''
# }

files_formatted = {
  'announcement.txt': [
    'Posted 18/12/17 7:35 AM <eric.freedman@malcolm-avery.co>',
    '\n',
    'Attention all lab technicians:',
    'We updated our servers over the weekend. All account login information has been reset. To access your account, enter your full name followed by the year you were born. Please remember to change your password after logging in.',
    '\n',
    'Eric Freedman',
    'Lab Supervisor', 
    'Sector 14',
  ]
}

@app.route("/")
def my_index():
	return render_template("index.html", flask_token="Hello world")

@app.route('/commands', methods=['GET'])
def test_api():
  return jsonify(commands)

@app.route('/files', methods=['GET'])
def file_function():
  return jsonify(files_formatted)

@app.route('/test', methods=['GET'])
def test():
  return send_from_directory('./static/react', 'manifest.json')

@app.route('/favicon.ico')
def favicon():
  return send_from_directory('./static/react', 'favicon.ico')

if __name__ == '__main__':
  app.run(debug=True)

print(os.environ['APP_SETTINGS'])
