#!/usr/bin/env python3

from flask import Flask, request, jsonify
import pandas as pd
from pydantic import BaseModel
from infer import pipeline1, init  # Ensure this is correctly importing your inference function

app = Flask(__name__)
init()

class InferRequest(BaseModel):
    data: list

@app.route('/infer', methods=['POST'])
def handle_infer():
    req = InferRequest.parse_raw(request.data)
    df = pd.DataFrame(req.data)
    result = pipeline1.predict(df.T)
    result = [ r.tolist() for r in result ]
    return jsonify(result), 200

if __name__ == '__main__':
    app.run(debug=True)
