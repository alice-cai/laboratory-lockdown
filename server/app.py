from flask import (Flask, render_template, request, jsonify, send_from_directory, send_file)
import utils
import os

app = Flask(__name__)
APP_ROOT = os.path.dirname(os.path.abspath(__file__))

USERS = [
  "r_fisher",
  "j_forrest",
  "v_chapman",
  "n_reyes",
  "d_harris",
  "e_freedman",
  "r_barrera",
  "y_hines",
  "a_emerson",
]

@app.route("/")
def my_index():
	return render_template("index.html")

@app.route("/favicon.ico")
def favicon():
	return send_from_directory("./static/react", "favicon.ico")

@app.route("/password")
def get_ssh_password():
  '''
    Request arguments must include user_name field.
    e.g. {base_url}/password?user_name=r_fisher
  '''
  user_name = request.args.get("user_name", None)
  if not user_name or user_name not in USERS:
    user_name = "no_user"
  user_password = utils.get_data_from_json(APP_ROOT, user_name, 'password')
  return user_password or ""

@app.route("/commands", methods=["GET"])
def get_commands():
  '''
    Request arguments must include the type of commands.
    e.g. {base_url}/commands?type=logged_in
  '''
  command_type = request.args.get("type", None)
  if not command_type:
    command_type = "logged_out"

  user_commands = utils.get_data_from_json(APP_ROOT, 'commands', command_type)    
  return utils.send_json(user_commands or {})

@app.route("/files", methods=["GET"])
def file_function():
  '''
    Request arguments must include user_name field.
    e.g. {base_url}/files?user_name=r_fisher
  '''
  user_name = request.args.get("user_name", None)
  if user_name:
    user_files = utils.get_data_from_json(APP_ROOT, user_name, 'files')
    return utils.send_json(user_files or {})
  return utils.send_json({ "error": "user not specified" }), 400

@app.route("/image", methods=["GET"])
def get_image():
  '''
    Request arguments must include file_name field.
    e.g. {base_url}/image?file_name=img.png
  '''
  image_file_name = request.args.get("file_name")
  if image_file_name:
    try:
      return send_from_directory("./static/assets", image_file_name)
    except:
       return utils.send_json({ "error": "image not found" }), 404
  return utils.send_json({ "error": "image not specified" }), 400

@app.route("/map", methods=["GET"])
def map():
  try:
    return send_from_directory("./static/assets", "map.png")
  except:
    return utils.send_json({ "error": "map not found" }), 404

@app.route('/audio', methods=["GET"])
def get_audio():
  '''
    Request arguments must include file_name field.
    e.g. {base_url}/audio?file_name=audio.png
  '''
  audio_file_name = request.args.get("file_name")
  if audio_file_name:
    path_to_file = "./static/audio/%s" % audio_file_name
    try:
      return send_file(
        path_to_file,
        mimetype="audio/mp3",
        as_attachment=True,
        attachment_filename="audio.mp3",
      )
    except:
      return utils.send_json({ "error": "file not found" }), 404
  return utils.send_json({ "error": "audio file not specified" }), 400

if __name__ == "__main__":
  app.run(debug=True)
