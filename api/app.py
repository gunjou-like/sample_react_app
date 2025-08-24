from flask import Flask, jsonify, request
from data_generator import generate_data
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/data", methods=["GET"])
def get_players():
    count = int(request.args.get("count", 3))
    data = generate_data(count)
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

