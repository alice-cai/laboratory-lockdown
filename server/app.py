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

@app.route("/password")
def get_ssh_password():
  '''
    request param must include user name
    e.g. base_url/password?user_name="test_user"
  '''
  user_name = request.args.get("user_name", None)
  if not user_name or user_name not in USERS:
    user_name = "no_user"
  user_password = utils.get_user_data_from_json(APP_ROOT, user_name, 'password')
  return user_password or ""

@app.route("/commands", methods=["GET"])
def get_commands():
  '''
    request param must include user name
    e.g. base_url/password?user_name="test_user"
  '''
  user_name = request.args.get("user_name", None)
  if not user_name or user_name not in USERS:
    user_name = "no_user"

  user_commands = utils.get_user_data_from_json(APP_ROOT, user_name, 'commands')    
  return utils.send_json(user_commands or {})

@app.route("/files", methods=["GET"])
def file_function():
  '''
    request args must include user_name
    e.g. {base_url}/files?user_name="test_user"
  '''
  user_name = request.args.get("user_name", None)
  if user_name:
    user_files = utils.get_user_data_from_json(APP_ROOT, user_name, 'files')
    return utils.send_json(user_files or {})
  return utils.send_json({})

@app.route("/image", methods=["GET"])
def get_image():
  '''
    request args must include image file name
    e.g. {base_url}/image?file_name="img.png"
  '''
  image_file_name = request.args.get("file_name")
  if image_file_name:
    try:
      return send_from_directory("./static/assets", image_file_name)
    except:
       return utils.send_json({ "error": "image not found" })
  return utils.send_json({ "error": "image not specified" })

@app.route("/map", methods=["GET"])
def map():
  try:
    return send_from_directory("./static/assets", "map.png")
  except:
    return utils.send_json({ "error": "map not found" })

@app.route('/audio', methods=["GET"])
def get_audio():
  '''
    request args must include audio file name
    e.g. {base_url}/audio?file_name="img.png"
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
      return utils.send_json({ "error": "file not found" }) 
  return utils.send_json({ "error": "audio file not specified" }) 

if __name__ == "__main__":
  app.run(debug=True)
