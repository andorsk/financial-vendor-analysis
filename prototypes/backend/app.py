#!/usr/bin/env python3

from flask import Flask, request, jsonify
from flasgger import Swagger
import pandas as pd
from pydantic import BaseModel
from infer import pipeline1
import os
from util import load_data
from env import get_data_path
from flask_cors import CORS  # Import CORS
import numpy as np

from typing import List, Dict
from models.gen.Banking.BankingProducts import BankingProducts

app = Flask(__name__)
CORS(app)
swagger = Swagger(app)

class InferRequest(BaseModel):
    data: List[Dict[str, float]]

from sklearn.pipeline import Pipeline
from sklearn.preprocessing import MinMaxScaler
from scipy.spatial.distance import cdist

pipeline = Pipeline(steps=[
    ('custom_normalizer', MinMaxScaler(feature_range=(0,5)))
])

@app.route('/infer/ranking', methods=['POST'])
def handle_infer():
    """
    Endpoint for performing inference using provided data
    ---
    parameters:
      - name: data
        in: body
        required: true
        schema:
          id: InferRequest
          type: object
          required:
            - data
          properties:
            data:
              type: array
              items:
                type: object
              description: Data to be processed
    responses:
      200:
        description: Returns inference results
        schema:
          type: array
          items:
            type: array
            items:
              type: number
    """

    try :
        json_data = request.json
        xDF = pd.DataFrame(json_data['data'], index=[0])
        dataDF = load_data()
        X = dataDF.iloc[:, 3:]
        transformed_X = pipeline.fit_transform(X)
        distances = cdist(transformed_X, xDF, metric='euclidean')
        score = distances / np.max(distances) * 10
        flattened_scores = score.flatten()
        column_names = dataDF.T.columns.tolist()
        column_scores = list(zip(column_names, flattened_scores))
        print(column_scores)
        return jsonify(column_scores[2:]), 200
    except Exception as e:
        return jsonify("failed to infer results"), 500

def load_data():
    df = pd.read_excel('data/Products.xlsx', sheet_name='Accounts #2')
    dataDF = df.T.drop(['Weight out of 10', 'Feature'])
    metaDf = df[['Feature', 'Weight out of 10', 'field']]
    metaDf.index = df['field']
    dataDF.columns =  dataDF.iloc[0]
    dataDF = dataDF[1:]
    dataDF = dataDF.replace({True: 1, False: 0})
    dataDF.iloc[:, 2:] = dataDF.iloc[:, 2:].apply(pd.to_numeric, errors='coerce')
    dataDF = dataDF.fillna(-1)
    return dataDF

@app.route('/data', methods=['GET'])
def fetch_data():
    """
    Endpoint to fetch data
    ---
    responses:
      200:
        description: Returns the loaded data
        schema:
          type: object
          properties:
            data:
              type: object
              description: Data read from file
    """
    df = pd.read_excel('data/Products.xlsx', sheet_name='Accounts #2')
    dataDF = df.T.drop(['Weight out of 10', 'Feature'])
    metaDf = df[['Feature', 'Weight out of 10', 'field']]
    metaDf.index = df['field']
    dataDF.columns =  dataDF.iloc[0]
    dataDF = dataDF[1:]
    dataDF = dataDF.replace({True: 1, False: 0})
    dataDF.iloc[:, 2:] = dataDF.iloc[:, 2:].apply(pd.to_numeric, errors='coerce')
    dataDF = dataDF.fillna(-1)
    ret = {
        'headers': df.iloc[:,5:].columns.tolist(),
        'index': df.field.values.tolist(),
        'weights': metaDf['Weight out of 10'].values.tolist()[3:],
        'data': dataDF.iloc[2:].T.values.tolist(),
        'alias': metaDf.Feature.to_dict()
    }
    return jsonify(ret), 200

    # df = pd.read_csv('data/products.csv')
#    df.iloc[3:, 3:] = df.iloc[3:, 3:].apply(pd.to_numeric, errors='coerce').fillna(-1)
#    df.index = df['field']
#    aliases = df['Feature'].to_dict()
#    weight = df['Weight out of 10'].fillna(-1).to_dict()
#
#    df.drop(columns=['field', 'Feature', 'Weight out of 10'], inplace=True)
#    ret = {
#        'headers': df.columns.tolist(),
#        'index': df.index.tolist(),
#        'alias': aliases,
#        'weight': weight,
#        'data': df.values.tolist()
#    }
#    return jsonify(ret), 200

@app.route('/health', methods=['GET'])
def health():
    """
    Health check endpoint
    ---
    responses:
      200:
        description: Returns the health status of the application
        schema:
          type: object
          properties:
            status:
              type: string
              default: 'OK'
    """
    return jsonify({'status': 'OK'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
