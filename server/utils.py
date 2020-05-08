from flask import (current_app)
import simplejson
import os
import json

def send_json(data):
  data = simplejson.dumps(data)
  return current_app.make_response((data, 200, {'Content-Type': 'application/json'}))

def get_data_from_json(root_directory, file_name, data_field):
  data_file_path = os.path.join(root_directory, 'data/%s.json' % file_name)
  data_dict = {}

  with open(data_file_path) as data:
    data_dict = json.load(data)

  return data_dict.get(data_field, None)
