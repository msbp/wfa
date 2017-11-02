import os
from flask import Flask
import sys
sys.path.append('../libs')


app = Flask(__name__)



@app.route("/")
def test():
    return "test"


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
