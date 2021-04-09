from flask import *
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.run(debug=not('DYNO' in os.environ), host="0.0.0.0")
