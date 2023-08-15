from flask import request, abort, jsonify
from flask_restful import Resource
import sys
sys.path.append('../chat-with-pdf')
from src import ask_langchain

class Main(Resource):
    def post(self):
        # question = request.json.get('question', None);

        question = request.form["question"];
        result = ask_langchain(question)

        return jsonify(result)
    
# class HelloName(Resource):
#     def get(self, id_name):
#         return # TODO
    
#     def post(self, id_name):
#         return # TODO
