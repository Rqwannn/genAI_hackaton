from app import api
from .main import *

def API_PATH():
    api.add_resource(Main, "/chat")
    # api.add_resource(HelloName, "/hellowords_name/<int:id_name>", methods=["GET", "DELETE", "PUT"])
    # api.add_resource(HelloName, "/hellowords_name/<int:id_name>", endpoint="helloname.post", methods=["POST"])