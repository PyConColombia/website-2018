"""Main application."""

# Third party imports
from flask import Flask
from flask import render_template


app = Flask(__name__)


LANGUAGE_CODES = ('en', 'es')

@app.route('/')
def hello_world():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
    