export var WalletActionTypeEnum;
(function (WalletActionTypeEnum) {
    WalletActionTypeEnum["SignMessage"] = "sign-message";
    WalletActionTypeEnum["CommitReveal"] = "commit-reveal";
    WalletActionTypeEnum["KasTransfer"] = "kas-transfer";
    WalletActionTypeEnum["SignPsktTransaction"] = "sign-pskt-transaction";
    WalletActionTypeEnum["GetProtocolScriptData"] = "get-protocol-script-data";
    WalletActionTypeEnum["EIP1193ProviderRequest"] = "eip-1193-provider-request";
})(WalletActionTypeEnum || (WalletActionTypeEnum = {}));
