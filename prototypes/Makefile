PYTHON=python

fetch_accounts:
	$(PYTHON) scripts/python/fetch_from_google_sheet.py --service_account_file scripts/python/yellow-brick-road-sheets-sa.json > data/high_yield_checking.json

fetch_questions:
	$(PYTHON) scripts/python/fetch_from_google_sheet.py --service_account_file scripts/python/yellow-brick-road-sheets-sa.json > data/questions.json --range_name "Questions!A1:E20"

fetch_data:
	$(PYTHON) scripts/python/fetch_from_google_sheet.py --service_account_file scripts/python/yellow-brick-road-sheets-sa.json > data/questions.json --range_name "Accounts #2!A1:D100" --transpose

generate-flatbuffers:
	@echo "Starting FlatBuffers code generation..."
	@cd models && mkdir -p gen/python && mkdir -p gen/ts && \
	flatc --python -o ./gen/python BankingAccount.fbs && \
	flatc --ts -o ./gen/ts BankingAccount.fbs && \
	mv gen/python/* ../backend/models/gen && \
	mv gen/ts/* ../frontend2/src/models/gen && \
	echo "FlatBuffers code generation and moving completed successfully."

.PHONY: all fetch_accounts fetch_questions fetch_data  generate-flatbuffers
