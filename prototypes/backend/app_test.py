#!/usr/bin/env python3

import pytest
from app import app  # Replace 'app' with the correct import for your Flask app
import json
from util import load_data, load_product_features


@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_data():
    load_product_features()
