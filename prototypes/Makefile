PYTHON=python

fetch_data:
	$(PYTHON) scripts/python/fetch_from_google_sheet.py --service_account_file scripts/python/yellow-brick-road-sheets-sa.json > data/high_yield_checking.json

.PHONY: all fetch_data
