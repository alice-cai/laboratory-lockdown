from flask import (current_app)
import simplejson

def send_json(data):
  data = simplejson.dumps(data)
  return current_app.make_response((data, 200, {'Content-Type': 'application/json'}))
