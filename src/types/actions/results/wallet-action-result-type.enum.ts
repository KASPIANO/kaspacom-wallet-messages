export enum WalletActionResultType {
    KasTransfer = 'kas-transfer',
    MessageSigning = 'message-signing',
    CompoundUtxos = 'compound-utxos',
    SignPsktTransaction = 'sign-pskt-transaction',
    SignL2Transaction = 'sign-l2-transaction',
    CommitReveal = 'commit-reveal',
}