// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class AccountFeatures {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AccountFeatures {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAccountFeatures(bb:flatbuffers.ByteBuffer, obj?:AccountFeatures):AccountFeatures {
  return (obj || new AccountFeatures()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAccountFeatures(bb:flatbuffers.ByteBuffer, obj?:AccountFeatures):AccountFeatures {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AccountFeatures()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

feature():string|null
feature(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
feature(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

pros():string|null
pros(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
pros(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

cons():string|null
cons(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
cons(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

goodFor():string|null
goodFor(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
goodFor(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

monthlyFee():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

invoicing():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

budgeting():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

payments():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

hiddenFees():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

applicationSpeed():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

atmSupport():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

freeTransfers():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

fdicInsured():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

checks():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

wires():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

rewardsProgram():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

insuredAmount():number {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

encrypted():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

virtualCard():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

physicalCard():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

integrations():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

integrationScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

atmFees():number {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

trustPilotScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

iosAppScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

iosApp():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 54);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

iosNumberOfRatings():number {
  const offset = this.bb!.__offset(this.bb_pos, 56);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

androidApp():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 58);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

androidAppScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 60);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

androidAppDownload():number {
  const offset = this.bb!.__offset(this.bb_pos, 62);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

androidNumberOfRatings():number {
  const offset = this.bb!.__offset(this.bb_pos, 64);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

osxApp():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 66);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

webApp():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 68);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

windowsApp():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 70);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

linuxApp():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 72);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

openSource():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 74);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

offlineSupport():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 76);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

pwa():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 78);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

nerdWalletScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 80);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

linkedin():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 82);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

twitter():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 84);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

instagram():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 86);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

facebook():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 88);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

communitySize():number {
  const offset = this.bb!.__offset(this.bb_pos, 90);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

supportScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 92);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

headquarters():string|null
headquarters(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
headquarters(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 94);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

physicalBranchPresenceScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 96);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

depositLimit():number {
  const offset = this.bb!.__offset(this.bb_pos, 98);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

transactionLimits():number {
  const offset = this.bb!.__offset(this.bb_pos, 100);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

zelle():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 102);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

easeOfSetup():number {
  const offset = this.bb!.__offset(this.bb_pos, 104);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

bankReliability():number {
  const offset = this.bb!.__offset(this.bb_pos, 106);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

dedicatedBusinessManager():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 108);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

wireTransfers():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 110);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

accessibilityScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 112);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

signupBenefits():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 114);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

overdraftProtection():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 116);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

atmPresenceScore():number {
  const offset = this.bb!.__offset(this.bb_pos, 118);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

static startAccountFeatures(builder:flatbuffers.Builder) {
  builder.startObject(58);
}

static addFeature(builder:flatbuffers.Builder, featureOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, featureOffset, 0);
}

static addPros(builder:flatbuffers.Builder, prosOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, prosOffset, 0);
}

static addCons(builder:flatbuffers.Builder, consOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, consOffset, 0);
}

static addGoodFor(builder:flatbuffers.Builder, goodForOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, goodForOffset, 0);
}

static addMonthlyFee(builder:flatbuffers.Builder, monthlyFee:number) {
  builder.addFieldFloat32(4, monthlyFee, 0.0);
}

static addInvoicing(builder:flatbuffers.Builder, invoicing:boolean) {
  builder.addFieldInt8(5, +invoicing, +false);
}

static addBudgeting(builder:flatbuffers.Builder, budgeting:boolean) {
  builder.addFieldInt8(6, +budgeting, +false);
}

static addPayments(builder:flatbuffers.Builder, payments:boolean) {
  builder.addFieldInt8(7, +payments, +false);
}

static addHiddenFees(builder:flatbuffers.Builder, hiddenFees:boolean) {
  builder.addFieldInt8(8, +hiddenFees, +false);
}

static addApplicationSpeed(builder:flatbuffers.Builder, applicationSpeed:number) {
  builder.addFieldFloat32(9, applicationSpeed, 0.0);
}

static addAtmSupport(builder:flatbuffers.Builder, atmSupport:boolean) {
  builder.addFieldInt8(10, +atmSupport, +false);
}

static addFreeTransfers(builder:flatbuffers.Builder, freeTransfers:boolean) {
  builder.addFieldInt8(11, +freeTransfers, +false);
}

static addFdicInsured(builder:flatbuffers.Builder, fdicInsured:boolean) {
  builder.addFieldInt8(12, +fdicInsured, +false);
}

static addChecks(builder:flatbuffers.Builder, checks:boolean) {
  builder.addFieldInt8(13, +checks, +false);
}

static addWires(builder:flatbuffers.Builder, wires:boolean) {
  builder.addFieldInt8(14, +wires, +false);
}

static addRewardsProgram(builder:flatbuffers.Builder, rewardsProgram:boolean) {
  builder.addFieldInt8(15, +rewardsProgram, +false);
}

static addInsuredAmount(builder:flatbuffers.Builder, insuredAmount:number) {
  builder.addFieldFloat32(16, insuredAmount, 0.0);
}

static addEncrypted(builder:flatbuffers.Builder, encrypted:boolean) {
  builder.addFieldInt8(17, +encrypted, +false);
}

static addVirtualCard(builder:flatbuffers.Builder, virtualCard:boolean) {
  builder.addFieldInt8(18, +virtualCard, +false);
}

static addPhysicalCard(builder:flatbuffers.Builder, physicalCard:boolean) {
  builder.addFieldInt8(19, +physicalCard, +false);
}

static addIntegrations(builder:flatbuffers.Builder, integrations:boolean) {
  builder.addFieldInt8(20, +integrations, +false);
}

static addIntegrationScore(builder:flatbuffers.Builder, integrationScore:number) {
  builder.addFieldFloat32(21, integrationScore, 0.0);
}

static addAtmFees(builder:flatbuffers.Builder, atmFees:number) {
  builder.addFieldFloat32(22, atmFees, 0.0);
}

static addTrustPilotScore(builder:flatbuffers.Builder, trustPilotScore:number) {
  builder.addFieldFloat32(23, trustPilotScore, 0.0);
}

static addIosAppScore(builder:flatbuffers.Builder, iosAppScore:number) {
  builder.addFieldFloat32(24, iosAppScore, 0.0);
}

static addIosApp(builder:flatbuffers.Builder, iosApp:boolean) {
  builder.addFieldInt8(25, +iosApp, +false);
}

static addIosNumberOfRatings(builder:flatbuffers.Builder, iosNumberOfRatings:number) {
  builder.addFieldInt32(26, iosNumberOfRatings, 0);
}

static addAndroidApp(builder:flatbuffers.Builder, androidApp:boolean) {
  builder.addFieldInt8(27, +androidApp, +false);
}

static addAndroidAppScore(builder:flatbuffers.Builder, androidAppScore:number) {
  builder.addFieldFloat32(28, androidAppScore, 0.0);
}

static addAndroidAppDownload(builder:flatbuffers.Builder, androidAppDownload:number) {
  builder.addFieldInt32(29, androidAppDownload, 0);
}

static addAndroidNumberOfRatings(builder:flatbuffers.Builder, androidNumberOfRatings:number) {
  builder.addFieldInt32(30, androidNumberOfRatings, 0);
}

static addOsxApp(builder:flatbuffers.Builder, osxApp:boolean) {
  builder.addFieldInt8(31, +osxApp, +false);
}

static addWebApp(builder:flatbuffers.Builder, webApp:boolean) {
  builder.addFieldInt8(32, +webApp, +false);
}

static addWindowsApp(builder:flatbuffers.Builder, windowsApp:boolean) {
  builder.addFieldInt8(33, +windowsApp, +false);
}

static addLinuxApp(builder:flatbuffers.Builder, linuxApp:boolean) {
  builder.addFieldInt8(34, +linuxApp, +false);
}

static addOpenSource(builder:flatbuffers.Builder, openSource:boolean) {
  builder.addFieldInt8(35, +openSource, +false);
}

static addOfflineSupport(builder:flatbuffers.Builder, offlineSupport:boolean) {
  builder.addFieldInt8(36, +offlineSupport, +false);
}

static addPwa(builder:flatbuffers.Builder, pwa:boolean) {
  builder.addFieldInt8(37, +pwa, +false);
}

static addNerdWalletScore(builder:flatbuffers.Builder, nerdWalletScore:number) {
  builder.addFieldFloat32(38, nerdWalletScore, 0.0);
}

static addLinkedin(builder:flatbuffers.Builder, linkedin:boolean) {
  builder.addFieldInt8(39, +linkedin, +false);
}

static addTwitter(builder:flatbuffers.Builder, twitter:boolean) {
  builder.addFieldInt8(40, +twitter, +false);
}

static addInstagram(builder:flatbuffers.Builder, instagram:boolean) {
  builder.addFieldInt8(41, +instagram, +false);
}

static addFacebook(builder:flatbuffers.Builder, facebook:boolean) {
  builder.addFieldInt8(42, +facebook, +false);
}

static addCommunitySize(builder:flatbuffers.Builder, communitySize:number) {
  builder.addFieldInt32(43, communitySize, 0);
}

static addSupportScore(builder:flatbuffers.Builder, supportScore:number) {
  builder.addFieldFloat32(44, supportScore, 0.0);
}

static addHeadquarters(builder:flatbuffers.Builder, headquartersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(45, headquartersOffset, 0);
}

static addPhysicalBranchPresenceScore(builder:flatbuffers.Builder, physicalBranchPresenceScore:number) {
  builder.addFieldFloat32(46, physicalBranchPresenceScore, 0.0);
}

static addDepositLimit(builder:flatbuffers.Builder, depositLimit:number) {
  builder.addFieldInt32(47, depositLimit, 0);
}

static addTransactionLimits(builder:flatbuffers.Builder, transactionLimits:number) {
  builder.addFieldInt32(48, transactionLimits, 0);
}

static addZelle(builder:flatbuffers.Builder, zelle:boolean) {
  builder.addFieldInt8(49, +zelle, +false);
}

static addEaseOfSetup(builder:flatbuffers.Builder, easeOfSetup:number) {
  builder.addFieldFloat32(50, easeOfSetup, 0.0);
}

static addBankReliability(builder:flatbuffers.Builder, bankReliability:number) {
  builder.addFieldFloat32(51, bankReliability, 0.0);
}

static addDedicatedBusinessManager(builder:flatbuffers.Builder, dedicatedBusinessManager:boolean) {
  builder.addFieldInt8(52, +dedicatedBusinessManager, +false);
}

static addWireTransfers(builder:flatbuffers.Builder, wireTransfers:boolean) {
  builder.addFieldInt8(53, +wireTransfers, +false);
}

static addAccessibilityScore(builder:flatbuffers.Builder, accessibilityScore:number) {
  builder.addFieldFloat32(54, accessibilityScore, 0.0);
}

static addSignupBenefits(builder:flatbuffers.Builder, signupBenefits:boolean) {
  builder.addFieldInt8(55, +signupBenefits, +false);
}

static addOverdraftProtection(builder:flatbuffers.Builder, overdraftProtection:boolean) {
  builder.addFieldInt8(56, +overdraftProtection, +false);
}

static addAtmPresenceScore(builder:flatbuffers.Builder, atmPresenceScore:number) {
  builder.addFieldFloat32(57, atmPresenceScore, 0.0);
}

static endAccountFeatures(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createAccountFeatures(builder:flatbuffers.Builder, featureOffset:flatbuffers.Offset, prosOffset:flatbuffers.Offset, consOffset:flatbuffers.Offset, goodForOffset:flatbuffers.Offset, monthlyFee:number, invoicing:boolean, budgeting:boolean, payments:boolean, hiddenFees:boolean, applicationSpeed:number, atmSupport:boolean, freeTransfers:boolean, fdicInsured:boolean, checks:boolean, wires:boolean, rewardsProgram:boolean, insuredAmount:number, encrypted:boolean, virtualCard:boolean, physicalCard:boolean, integrations:boolean, integrationScore:number, atmFees:number, trustPilotScore:number, iosAppScore:number, iosApp:boolean, iosNumberOfRatings:number, androidApp:boolean, androidAppScore:number, androidAppDownload:number, androidNumberOfRatings:number, osxApp:boolean, webApp:boolean, windowsApp:boolean, linuxApp:boolean, openSource:boolean, offlineSupport:boolean, pwa:boolean, nerdWalletScore:number, linkedin:boolean, twitter:boolean, instagram:boolean, facebook:boolean, communitySize:number, supportScore:number, headquartersOffset:flatbuffers.Offset, physicalBranchPresenceScore:number, depositLimit:number, transactionLimits:number, zelle:boolean, easeOfSetup:number, bankReliability:number, dedicatedBusinessManager:boolean, wireTransfers:boolean, accessibilityScore:number, signupBenefits:boolean, overdraftProtection:boolean, atmPresenceScore:number):flatbuffers.Offset {
  AccountFeatures.startAccountFeatures(builder);
  AccountFeatures.addFeature(builder, featureOffset);
  AccountFeatures.addPros(builder, prosOffset);
  AccountFeatures.addCons(builder, consOffset);
  AccountFeatures.addGoodFor(builder, goodForOffset);
  AccountFeatures.addMonthlyFee(builder, monthlyFee);
  AccountFeatures.addInvoicing(builder, invoicing);
  AccountFeatures.addBudgeting(builder, budgeting);
  AccountFeatures.addPayments(builder, payments);
  AccountFeatures.addHiddenFees(builder, hiddenFees);
  AccountFeatures.addApplicationSpeed(builder, applicationSpeed);
  AccountFeatures.addAtmSupport(builder, atmSupport);
  AccountFeatures.addFreeTransfers(builder, freeTransfers);
  AccountFeatures.addFdicInsured(builder, fdicInsured);
  AccountFeatures.addChecks(builder, checks);
  AccountFeatures.addWires(builder, wires);
  AccountFeatures.addRewardsProgram(builder, rewardsProgram);
  AccountFeatures.addInsuredAmount(builder, insuredAmount);
  AccountFeatures.addEncrypted(builder, encrypted);
  AccountFeatures.addVirtualCard(builder, virtualCard);
  AccountFeatures.addPhysicalCard(builder, physicalCard);
  AccountFeatures.addIntegrations(builder, integrations);
  AccountFeatures.addIntegrationScore(builder, integrationScore);
  AccountFeatures.addAtmFees(builder, atmFees);
  AccountFeatures.addTrustPilotScore(builder, trustPilotScore);
  AccountFeatures.addIosAppScore(builder, iosAppScore);
  AccountFeatures.addIosApp(builder, iosApp);
  AccountFeatures.addIosNumberOfRatings(builder, iosNumberOfRatings);
  AccountFeatures.addAndroidApp(builder, androidApp);
  AccountFeatures.addAndroidAppScore(builder, androidAppScore);
  AccountFeatures.addAndroidAppDownload(builder, androidAppDownload);
  AccountFeatures.addAndroidNumberOfRatings(builder, androidNumberOfRatings);
  AccountFeatures.addOsxApp(builder, osxApp);
  AccountFeatures.addWebApp(builder, webApp);
  AccountFeatures.addWindowsApp(builder, windowsApp);
  AccountFeatures.addLinuxApp(builder, linuxApp);
  AccountFeatures.addOpenSource(builder, openSource);
  AccountFeatures.addOfflineSupport(builder, offlineSupport);
  AccountFeatures.addPwa(builder, pwa);
  AccountFeatures.addNerdWalletScore(builder, nerdWalletScore);
  AccountFeatures.addLinkedin(builder, linkedin);
  AccountFeatures.addTwitter(builder, twitter);
  AccountFeatures.addInstagram(builder, instagram);
  AccountFeatures.addFacebook(builder, facebook);
  AccountFeatures.addCommunitySize(builder, communitySize);
  AccountFeatures.addSupportScore(builder, supportScore);
  AccountFeatures.addHeadquarters(builder, headquartersOffset);
  AccountFeatures.addPhysicalBranchPresenceScore(builder, physicalBranchPresenceScore);
  AccountFeatures.addDepositLimit(builder, depositLimit);
  AccountFeatures.addTransactionLimits(builder, transactionLimits);
  AccountFeatures.addZelle(builder, zelle);
  AccountFeatures.addEaseOfSetup(builder, easeOfSetup);
  AccountFeatures.addBankReliability(builder, bankReliability);
  AccountFeatures.addDedicatedBusinessManager(builder, dedicatedBusinessManager);
  AccountFeatures.addWireTransfers(builder, wireTransfers);
  AccountFeatures.addAccessibilityScore(builder, accessibilityScore);
  AccountFeatures.addSignupBenefits(builder, signupBenefits);
  AccountFeatures.addOverdraftProtection(builder, overdraftProtection);
  AccountFeatures.addAtmPresenceScore(builder, atmPresenceScore);
  return AccountFeatures.endAccountFeatures(builder);
}
}
