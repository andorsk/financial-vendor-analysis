#!/usr/bin/env python3
import os

DATASTORE = os.environ.get('DATASTORE_DIR', 'data')
DATA_INPUT_FILENAME = os.environ.get('MAIN_DATA_FILE', 'questions.json')

def get_data_path():
    return f'{DATASTORE}/{DATA_INPUT_FILENAME}'
