import os
from flask import Flask, request
from flask_cors import CORS, cross_origin
import sys
sys.path.append('/app/server/libs/decisiontreeExample/')
import decisiontree

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def test():
    return "test"

@app.route("/tree")
def tree():
    x = decisiontree.DecisionTree()
    mytree = x.createDecisionTreeModel()
    
    return str(mytree)

@app.route("/examplePost", methods=['POST'])
@cross_origin()
def postExample():
    json = request.get_json(force=True)
    return str(json['example'])



if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
