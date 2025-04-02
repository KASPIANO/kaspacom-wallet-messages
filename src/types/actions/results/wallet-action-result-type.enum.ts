export enum WalletActionResultType {
    KasTransfer = 'kas-transfer',
    MessageSigning = 'message-signing',
    CompoundUtxos = 'compound-utxos',
    SignPsktTransaction = 'sign-pskt-transaction',
    SignL2EtherTransaction = 'sign-l2-ether-transaction',
    CommitReveal = 'commit-reveal',
}