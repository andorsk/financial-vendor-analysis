#!/usr/bin/env python3

import os
from sklearn.metrics import pairwise_distances
from scipy.spatial import distance
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import MinMaxScaler
import numpy as np
from util import load_data

class HeuristicScorer():

    _x = None
    _y = None
    _distance_metric = None
    _weights = None

    def __init__(self, distance_metric='hamming'):
        self._distance_metric = distance_metric

    def fit(self, X, y=None):
        self._x = X
        self._y = y
        return self

    def transform(self, X):
        return X

    def predict(self, X):
        if self._x is None:
            raise ValueError("not trained")
        if self._distance_metric is None:
            raise ValueError("please put valid distance metric")
        print("--------")
        dist = distance.cdist(X, self._x)#, metric=self._distance_metric)
        return [np.argsort(dist), dist]

class ConstraintMapper():
    def __init__(self):
        pass

    def fit(self, X, y=None):
        return self

    def predict(self, X):
        return X

class CustomNormalizer():

    _min = None
    _max = None

    def __init__(self, min=0, max=5):
        self._min = min
        self._max = max

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        return (X-self._min)/(self._max-self._min)

pipeline1 = Pipeline(steps=[
    ('custom_normalizer', MinMaxScaler()),
    ('heuristic_scorer', HeuristicScorer(distance_metric='euclidean'))
])

def init():
    path = os.environ.get('DATA_PATH', '../data/questions.json')
    data = load_data(path)
    try:
        pipeline1.fit(data)
       # ranks = pipeline1.predict([data.T['Chase Business Complete Banking']])
       # print(ranks)
    except Exception as e:
        print("Error in init", e)
        print("failed to train pipeline")
        exit(1)
