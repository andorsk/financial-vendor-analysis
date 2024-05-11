#!/usr/bin/env python3


import pandas as pd
import flatbuffers
from models.gen.Banking.BankingProducts import BankingProducts
from models.gen.Banking import AccountFeatures

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

def nan_to_default(value, default):
    return default if pd.isna(value) else value

def create_account_features(builder, row):
    # Create strings for string fields
    pros = builder.CreateString(row['pros'])
    cons = builder.CreateString(row['cons'])
    good_for = builder.CreateString(row['good_for'])
    headquarters = builder.CreateString(row['headquarters'])

    # Add fields to the AccountFeatures object
    AccountFeatures.AccountFeaturesStart(builder)
    AccountFeatures.AccountFeaturesAddPros(builder, pros)
    AccountFeatures.AccountFeaturesAddCons(builder, cons)
    AccountFeatures.AccountFeaturesAddGoodFor(builder, good_for)
    AccountFeatures.AccountFeaturesAddMonthlyFee(builder, float(row['monthly_fee']))
    AccountFeatures.AccountFeaturesAddInvoicing(builder, row['invoicing'])
    AccountFeatures.AccountFeaturesAddBudgeting(builder, row['budgeting'])
    AccountFeatures.AccountFeaturesAddPayments(builder, row['payments'])
    AccountFeatures.AccountFeaturesAddHiddenFees(builder, row['hidden_fees'])
    AccountFeatures.AccountFeaturesAddApplicationSpeed(builder, row['application_speed'])
    AccountFeatures.AccountFeaturesAddAtmSupport(builder, row['atm_support'])
    AccountFeatures.AccountFeaturesAddFreeTransfers(builder, row['free_transfers'])
    AccountFeatures.AccountFeaturesAddFdicInsured(builder, row['fdic_insured'])
    AccountFeatures.AccountFeaturesAddChecks(builder, row['checks'])
    AccountFeatures.AccountFeaturesAddWires(builder, row['wires'])
    AccountFeatures.AccountFeaturesAddRewardsProgram(builder, row['rewards_program'])
    AccountFeatures.AccountFeaturesAddInsuredAmount(builder, row['insured_amount'])
    AccountFeatures.AccountFeaturesAddEncrypted(builder, row['encrypted'])
    AccountFeatures.AccountFeaturesAddVirtualCard(builder, row['virtual_card'])
    AccountFeatures.AccountFeaturesAddPhysicalCard(builder, row['physical_card'])
    AccountFeatures.AccountFeaturesAddIntegrations(builder, row['integrations'])
    AccountFeatures.AccountFeaturesAddIntegrationScore(builder, row['integration_score'])
    AccountFeatures.AccountFeaturesAddAtmFees(builder, row['atm_fees'])
    AccountFeatures.AccountFeaturesAddTrustPilotScore(builder, row['trust_pilot_score'])
    AccountFeatures.AccountFeaturesAddIosAppScore(builder, row['ios_app_score'])
    AccountFeatures.AccountFeaturesAddIosApp(builder, row['ios_app'])
    AccountFeatures.AccountFeaturesAddIosNumberOfRatings(builder, nan_to_default(row['ios_number_of_ratings'], -1))
    AccountFeatures.AccountFeaturesAddAndroidApp(builder, row['android_app'])
    AccountFeatures.AccountFeaturesAddAndroidAppScore(builder, row['android_app_score'])
    AccountFeatures.AccountFeaturesAddAndroidAppDownload(builder, nan_to_default(row['android_app_download'], -1))
    AccountFeatures.AccountFeaturesAddAndroidNumberOfRatings(builder, nan_to_default(row['android_number_of_ratings'], -1))
    AccountFeatures.AccountFeaturesAddOsxApp(builder, row['osx_app'])
    AccountFeatures.AccountFeaturesAddWebApp(builder, row['web_app'])
    AccountFeatures.AccountFeaturesAddWindowsApp(builder, row['windows_app'])
    AccountFeatures.AccountFeaturesAddLinuxApp(builder, row['linux_app'])
    AccountFeatures.AccountFeaturesAddOpenSource(builder, row['open_source'])
    AccountFeatures.AccountFeaturesAddOfflineSupport(builder, row['offline_support'])
    AccountFeatures.AccountFeaturesAddPwa(builder, row['pwa'])
    AccountFeatures.AccountFeaturesAddNerdWalletScore(builder, row['nerd_wallet_score'])
    AccountFeatures.AccountFeaturesAddLinkedin(builder, row['linkedin'])
    AccountFeatures.AccountFeaturesAddTwitter(builder, row['twitter'])
    AccountFeatures.AccountFeaturesAddInstagram(builder, row['instagram'])
    AccountFeatures.AccountFeaturesAddFacebook(builder, row['facebook'])
    AccountFeatures.AccountFeaturesAddCommunitySize(builder, row['community_size'])
    AccountFeatures.AccountFeaturesAddSupportScore(builder, row['support_score'])
    AccountFeatures.AccountFeaturesAddHeadquarters(builder, headquarters)
    AccountFeatures.AccountFeaturesAddPhysicalBranchPresenceScore(builder, row['physical_branch_presence_score'])
    AccountFeatures.AccountFeaturesAddDepositLimit(builder, row['deposit_limit'])
    AccountFeatures.AccountFeaturesAddTransactionLimits(builder, row['transaction_limits'])
    AccountFeatures.AccountFeaturesAddZelle(builder, row['zelle'])
    AccountFeatures.AccountFeaturesAddEaseOfSetup(builder, row['ease_of_setup'])
    AccountFeatures.AccountFeaturesAddBankReliability(builder, row['bank_reliability'])
    AccountFeatures.AccountFeaturesAddDedicatedBusinessManager(builder, row['dedicated_business_manager'])
    AccountFeatures.AccountFeaturesAddWireTransfers(builder, row['wire_transfers'])
    AccountFeatures.AccountFeaturesAddAccessibilityScore(builder, row['accessibility_score'])
    AccountFeatures.AccountFeaturesAddSignupBenefits(builder, row['signup_benefits'])
    AccountFeatures.AccountFeaturesAddOverdraftProtection(builder, row['overdraft_protection'])
    AccountFeatures.AccountFeaturesAddAtmPresenceScore(builder, row['atm_presence_score'])
    return AccountFeatures.AccountFeaturesEnd(builder)

def load_product_features():
    data_path = './data/products.csv'
    df = pd.read_csv(data_path)
    df.index = df['field']
    products_df = df.iloc[:, 3:]
    for column in products_df.columns:
        product = products_df[column]
        builder = flatbuffers.Builder(1024)
        account_features = create_account_features(builder, product)
        print(account_features)

    return buf
