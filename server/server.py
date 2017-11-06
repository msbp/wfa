import os
from flask import Flask, request
import sys
sys.path.append('/app/server/libs/decisiontreeExample/')
import decisiontree

app = Flask(__name__)

@app.route("/")
def test():
    return "test"

@app.route("/tree")
def tree():
    x = decisiontree.DecisionTree()
    mytree = x.createDecisionTreeModel()
    
    return str(mytree)

@app.route("/examplePost", methods=['POST'])
def postExample():
    print("request: "  + str(request))
    json = request.get_json(force=True)
    return str(json['example'])



if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
