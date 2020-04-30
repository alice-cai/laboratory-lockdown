from flask import (Flask, render_template, request, jsonify, send_from_directory)
import utils
import os
import json


app = Flask("__main__")
APP_ROOT = os.path.dirname(os.path.abspath(__file__))

@app.route("/")
def my_index():
	return render_template("index.html", flask_token="Hello world")

@app.route("/password")
def get_ssh_password():
  '''
    request param must include user name
    e.g. base_url/password?user_name="test_user"
  '''
  ssh_password = {
    "r_fisher": "giraffes123",
    "j_forrest": "forrest0211",
    "v_chapman": "deadbeef",
    "n_reyes": "eternal",
    "d_harris": "pontmercy",
    "e_freedman": "koala08",
    "r_barrera": "gF9!cM*",
    "y_hines": "neptune647",
    "a_emerson": "tbd",
  }
  user_name = request.args.get("user_name", None)
  if user_name:
    return ssh_password.get(str(user_name), "")
  return ""

@app.route("/commands", methods=["GET"])
def get_commands():
  '''
    request param must include user name
    e.g. base_url/password?user_name="test_user"
  '''
  # TODO: refactor this garbage??
  base_commands = {
    "ls": "List files",
    "cat": "Display file content",
    "map": "Display network map",
    "ssh": "Switch user",
    "help": "Display this help",
  }
  admin_commands = {
    "ls": "List files",
    "cat": "Display file content",
    "map": "Display network map",
    "ssh": "Switch user",
    "power": "Toggle power switch for system",
    "help": "Display this help",
  }
  # admin_commands = base_commands["power"] = "Toggle power switch for system"
  commands = {
    "r_fisher": base_commands,
    "j_forrest": base_commands,
    "v_chapman": base_commands,
    "n_reyes": base_commands,
    "d_harris": base_commands,
    "e_freedman": base_commands,
    "r_barrera": base_commands,
    "y_hines": admin_commands,
    "a_emerson": admin_commands,
  }
  user_name = request.args.get("user_name", None)
  if user_name:
    return utils.send_json(commands.get(str(user_name), base_commands))
  return utils.send_json(base_commands)

@app.route("/files", methods=["GET"])
def file_function():
  '''
    request args must include user_name
    e.g. {base_url}/files?user_name="test_user"
  '''
  user_name = request.args.get("user_name", None)
  if user_name:
    user_data_dict = {}
    print(APP_ROOT)
    with open(os.path.join(APP_ROOT, 'data/r_fisher.json')) as user_data:
      user_data_dict = json.load(user_data)
    return utils.send_json(user_data_dict.get('files', {}))
  return utils.send_json({})
  # return send_from_directory("./data", "files.json")

@app.route("/test", methods=["GET"])
def test():
  return send_from_directory("./static/react", "manifest.json")

@app.route("/favicon.ico")
def favicon():
  return send_from_directory("./static/react", "favicon.ico")

@app.route("/map")
def map():
  return send_from_directory("./static/assets", "map.png")

if __name__ == "__main__":
  app.run(debug=True)
