#!/usr/bin/env python3

import pytest
from app import app  # Replace 'app' with the correct import for your Flask app
import json
from util import load_data

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_infer_endpoint(client):
    # Sample data to send to our endpoint
    data = load_data('../data/questions.json')
    sample_data = {
        "data": data.iloc[0].T.values.tolist()
    }

    response = client.post('/infer',
                           data=json.dumps(sample_data),
                           content_type='application/json')
    assert response.status_code == 200
    expected_response = [[0, 1]]
    assert response.json[0] == expected_response

def test_data_endpoint(client):
    response = client.get('/data')
    assert response.status_code == 200
    data = load_data('data/questions.json')
    assert response.json == data.to_dict()
