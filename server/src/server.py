import os
from flask import Flask
import sys
sys.path.append('../libs')
import decisiontree

app = Flask(__name__)



@app.route("/test")
def test():
    print("test")
    return "test"


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
