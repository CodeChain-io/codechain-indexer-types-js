# CodeChain ES [![npm version](https://badge.fury.io/js/codechain-es.svg)](https://badge.fury.io/js/codechain-es) [![Build Status](https://travis-ci.org/CodeChain-io/codechain-es.svg?branch=master)](https://travis-ci.org/CodeChain-io/codechain-es)

CodeChain ES provides a collection of wrapper classes for accessing the elasticsearch index of CodeChain.

## Features

### Mapping for elasticsearch

- block
- parcel
- transaction
- pending_parcel
- account
- log

### API

- ElasticSearchAgent
  - Block
    - getLastBlockNumber
    - getBlock
    - getBlockByHash
    - getBlocks
    - getTotalBlockCount
    - getBlocksByPlatformAddress
    - getTotalBlockCountByPlatformAddress
    - retractBlock
    - indexBlock
    - updateBlock
    - searchBlock
    - countBlock
  - Parcel
    - getParcel
    - getParcels
    - getTotalParcelCount
    - getParcelsByPlatformAddress
    - getTotalParcelCountByPlatformAddress
    - searchParcel
    - retractParcel
    - indexParcel
    - updateParcel
    - countParcel
  - Transaction
    - getTransaction
    - getTransactions
    - getTotalTransactionCount
    - getTransactionsByAssetType
    - getTotalTransactionCountByAssetType
    - getTransactionsByAssetTransferAddress
    - getTotalTxCountByAssetTransferAddress
    - getAssetBundlesByPlatformAddress
    - getTotalAssetBundleCountByPlatformAddress
    - getAssetsByAssetTransferAddress
    - getAssetScheme
    - getAssetBundlesByAssetName
    - searchTransaction
    - retractTransaction
    - indexTransaction
    - updateTransaction
    - countTransaction
  - PendingParcel
    - getAllOfCurrentPendingParcels
    - getCurrentPendingParcels
    - getTotalPendingParcelCount
    - getPendingParcel
    - getPendingTransaction
    - getPendingAssetScheme
    - getDeadPendingParcels
    - searchPendinParcel
    - deadPendingParcel
    - removePendingParcel
    - indexPendingParcel
    - revialPendingParcel
    - countPendingParcel
  - Log
    - increaseLogCount
    - decreaseLogCount
    - getLogCount
    - getBestMiners
    - searchLog
    - indexLog
    - updateLog
    - getLog
  - Account
    - increaseBalance
    - decreaseBalance
    - getAccounts
    - indexAccount
    - updateAccount
    - getAccount

### Utils

- Utile
  - TypeConverter
  - Type
    - isAssetTransactionGroupDoc
    - isPaymentDoc
    - isSetRegularKeyDoc
    - isCreateShardDoc
    - isAssetTransferTransactionDoc
    - isAssetMintTransactionDoc
    - isH256String
    - getAssetSchemeDoc
    - getTransactionsByBlock
    - getMintTransactionsByParcel
    - getMetadata
