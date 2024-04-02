PYTHON=python

fetch_accounts:
	$(PYTHON) scripts/python/fetch_from_google_sheet.py --service_account_file scripts/python/yellow-brick-road-sheets-sa.json > data/high_yield_checking.json

fetch_questions:
	$(PYTHON) scripts/python/fetch_from_google_sheet.py --service_account_file scripts/python/yellow-brick-road-sheets-sa.json > data/questions.json --range_name "Questions!A1:E20"

fetch_data:
	$(PYTHON) scripts/python/fetch_from_google_sheet.py --service_account_file scripts/python/yellow-brick-road-sheets-sa.json > data/questions.json --range_name "Accounts #2!A1:D100" --transpose

.PHONY: all fetch_accounts fetch_questions fetch_data
