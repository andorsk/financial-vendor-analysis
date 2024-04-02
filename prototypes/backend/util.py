#!/usr/bin/env python3

import pandas as pd
import json

def load_df_from_json(path) -> pd.DataFrame:
    with open(path, 'r') as f:
       j = json.load(f)
       df = pd.DataFrame.from_dict(j)
       return df

def load_data(path: str) -> pd.DataFrame:
    data = load_df_from_json(path)
    df = data.iloc[:,1:].T
    df = df.replace({'Yes': 5, 'No': 0}, inplace=False)
    for column in df.columns:
        converted_column = pd.to_numeric(df[column], errors='ignore')
        if converted_column.dtype != object:
            df[column] = converted_column
    df = df.select_dtypes(include='number').fillna(0)
    return df
