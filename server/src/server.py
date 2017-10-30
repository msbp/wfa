import os
from flask import Flask
import sys
sys.path.append('../libs')
import decisiontree

app = Flask(__name__)

@app.route("/")
def getDecisionTree():
    x = decisiontree.DecisionTree()    #create a new instance of our decisiontree.py class
    myclf = x.createDecisionTreeModel()
    return str(myclf)    #return a string representation of the model

@app.route("/test")
def test():
    return "this is a test"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
