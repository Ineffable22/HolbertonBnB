#!/usr/bin/python3
"""This script starts a Flask web application"""
from flask import Flask, render_template
from models import storage
from models.state import State
from models.amenity import Amenity
from models.place import Place
from models.review import Review
from os import getenv
import uuid
app = Flask(__name__)


@app.route('/hbnb', strict_slashes=False)
def hbnb():
    """/hbnb: display a HTML page with render_template"""
    states = storage.all('State').values()
    amenities = storage.all('Amenity').values()
    places = storage.all('Place').values()
    return render_template('index.html',
                           states=states,
                           amenities=amenities,
                           places=places,
                           cache_id=uuid.uuid4())


@app.teardown_appcontext
def teardown(self):
    """Removes the current SQLAlchemy Session"""
    storage.close()


if __name__ == '__main__':
    host = getenv("HBNB_WEB_HOST") or "0.0.0.0"
    port = getenv("HBNB_WEB_PORT") or 5001
    app.run(host=host, port=port, threaded=True, debug=True)
