import os.path

import json
import argparse

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google.oauth2.service_account import Credentials


# If modifying these scopes, delete the file token.json.
SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"]

SERVICE_ACCOUNT_FILE = 'yellow-brick-road-sheets-sa.json'
SAMPLE_SPREADSHEET_ID = "1Rf56ZXSskkf1P4onyukU7k1pWTy2nX1JV5zmaw43gW0"
SAMPLE_RANGE_NAME = "Storing Cash!A1:L100"

def parse_args():
  parser = argparse.ArgumentParser(description="Fetch data from Google Sheets")
  parser.add_argument(
      "--service_account_file",
      type=str,
      help="Path to the service account file",
      default=SERVICE_ACCOUNT_FILE,
  )
  parser.add_argument(
      "--spreadsheet_id",
      type=str,
      help="The ID of the spreadsheet to fetch data from",
      default=SAMPLE_SPREADSHEET_ID,
  )
  parser.add_argument(
      "--range_name",
      type=str,
      default=SAMPLE_RANGE_NAME,
      help="The range of the spreadsheet to fetch data from",
  )
  return parser.parse_args()

def fetch(service_accout_file, spreadsheet_id, range_name):
  creds = None
  creds = Credentials.from_service_account_file(
        service_accout_file,
        scopes=["https://www.googleapis.com/auth/spreadsheets.readonly"],
  )
  try:
    service = build("sheets", "v4", credentials=creds)

    # Call the Sheets API
    sheet = service.spreadsheets()
    result = (
        sheet.values()
        .get(spreadsheetId=spreadsheet_id, range=range_name)
        .execute()
    )
    values = result.get("values", [])
    keys = values[0]
    items = [dict(zip(keys, v)) for v in values[1:]]
    json_data = json.dumps(items, indent=4)
    print(json_data)
  except HttpError as err:
    print(err)

def main():
  '''
  Fetch data from Google Sheets
  '''
  args = parse_args()
  fetch(args.service_account_file, args.spreadsheet_id, args.range_name)

if __name__ == "__main__":
  main()
