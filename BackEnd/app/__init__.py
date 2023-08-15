from flask import Flask
from flask_restful import Api

api = Api()

def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'secret-key'
    app.config['OPENAI_SECRET_KEY'] = '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'

    # Path App

    from app.path import API_PATH

    API_PATH()

    api.init_app(app)

    return app