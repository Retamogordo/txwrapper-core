[txwrapper-core](../README.md) / [Modules](../modules.md) / [txwrapper-core/src](../modules/txwrapper_core_src.md) / TxInfo

# Interface: TxInfo

[txwrapper-core/src](../modules/txwrapper_core_src.md).TxInfo

Complete information about a tx

## Hierarchy

- [`BaseTxInfo`](txwrapper_core_src.BaseTxInfo.md)

  ↳ **`TxInfo`**

## Table of contents

### Properties

- [address](txwrapper_core_src.TxInfo.md#address)
- [blockHash](txwrapper_core_src.TxInfo.md#blockhash)
- [blockNumber](txwrapper_core_src.TxInfo.md#blocknumber)
- [eraPeriod](txwrapper_core_src.TxInfo.md#eraperiod)
- [genesisHash](txwrapper_core_src.TxInfo.md#genesishash)
- [metadataRpc](txwrapper_core_src.TxInfo.md#metadatarpc)
- [method](txwrapper_core_src.TxInfo.md#method)
- [nonce](txwrapper_core_src.TxInfo.md#nonce)
- [specVersion](txwrapper_core_src.TxInfo.md#specversion)
- [tip](txwrapper_core_src.TxInfo.md#tip)
- [transactionVersion](txwrapper_core_src.TxInfo.md#transactionversion)

## Properties

### address

• **address**: `string`

The ss-58 encoded address of the sending account.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[address](txwrapper_core_src.BaseTxInfo.md#address)

#### Defined in

[txwrapper-core/src/types/method.ts:62](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L62)

___

### blockHash

• **blockHash**: `string`

The checkpoint hash of the block, in hex.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[blockHash](txwrapper_core_src.BaseTxInfo.md#blockhash)

#### Defined in

[txwrapper-core/src/types/method.ts:66](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L66)

___

### blockNumber

• **blockNumber**: `number`

The checkpoint block number (u32), in hex.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[blockNumber](txwrapper_core_src.BaseTxInfo.md#blocknumber)

#### Defined in

[txwrapper-core/src/types/method.ts:70](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L70)

___

### eraPeriod

• `Optional` **eraPeriod**: `number`

Describe the longevity of a transaction. It represents the validity from
the `blockHash` field, in number of blocks. Defaults to 64 blocks.

**`default`** 64

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[eraPeriod](txwrapper_core_src.BaseTxInfo.md#eraperiod)

#### Defined in

[txwrapper-core/src/types/method.ts:77](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L77)

___

### genesisHash

• **genesisHash**: `string`

The genesis hash of the chain, in hex.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[genesisHash](txwrapper_core_src.BaseTxInfo.md#genesishash)

#### Defined in

[txwrapper-core/src/types/method.ts:81](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L81)

___

### metadataRpc

• **metadataRpc**: \`0x${string}\`

The SCALE-encoded metadata, as a hex string. Can be retrieved via the RPC
call `state_getMetadata`.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[metadataRpc](txwrapper_core_src.BaseTxInfo.md#metadatarpc)

#### Defined in

[txwrapper-core/src/types/method.ts:86](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L86)

___

### method

• **method**: [`TxMethod`](txwrapper_core_src.TxMethod.md)

#### Defined in

[txwrapper-core/src/types/method.ts:41](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L41)

___

### nonce

• **nonce**: `number`

The nonce for this transaction.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[nonce](txwrapper_core_src.BaseTxInfo.md#nonce)

#### Defined in

[txwrapper-core/src/types/method.ts:90](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L90)

___

### specVersion

• **specVersion**: `number`

The current spec version of the runtime.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[specVersion](txwrapper_core_src.BaseTxInfo.md#specversion)

#### Defined in

[txwrapper-core/src/types/method.ts:94](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L94)

___

### tip

• `Optional` **tip**: `number`

The tip for this transaction, in hex.

**`default`** 0

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[tip](txwrapper_core_src.BaseTxInfo.md#tip)

#### Defined in

[txwrapper-core/src/types/method.ts:100](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L100)

___

### transactionVersion

• **transactionVersion**: `number`

The current transaction version for the runtime.

#### Inherited from

[BaseTxInfo](txwrapper_core_src.BaseTxInfo.md).[transactionVersion](txwrapper_core_src.BaseTxInfo.md#transactionversion)

#### Defined in

[txwrapper-core/src/types/method.ts:104](https://github.com/paritytech/txwrapper-core/blob/a0283d9/packages/txwrapper-core/src/types/method.ts#L104)