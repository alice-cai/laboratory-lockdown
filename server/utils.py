from flask import (current_app)
import simplejson
import os
import json

def send_json(data):
  data = simplejson.dumps(data)
  return current_app.make_response((data, 200, {'Content-Type': 'application/json'}))

def get_user_data_from_json(root_directory, user_name, data_field):
  user_data_file_path = os.path.join(root_directory, 'data/%s.json' % user_name)
  user_data_dict = {}

  with open(user_data_file_path) as user_data:
    user_data_dict = json.load(user_data)

  return user_data_dict.get(data_field, None)
