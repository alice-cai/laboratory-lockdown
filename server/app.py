from flask import (Flask, render_template, request, jsonify, send_from_directory)
import os

app = Flask("__main__")

@app.route("/")
def my_index():
	return render_template("index.html", flask_token="Hello world")

@app.route("/commands", methods=["GET"])
def test_api():
  return send_from_directory("./data", "commands.json")

@app.route("/files", methods=["GET"])
def file_function():
  return send_from_directory("./data", "files.json")

@app.route("/test", methods=["GET"])
def test():
  return send_from_directory("./static/react", "manifest.json")

@app.route("/favicon.ico")
def favicon():
  return send_from_directory("./static/react", "favicon.ico")

if __name__ == "__main__":
  app.run(debug=True)

print(os.environ["APP_SETTINGS"])
