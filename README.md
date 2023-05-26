- From ```txwrapper-core``` folder

```yarn run build```

- Run a Substrate node (the metadata is pulled from the running node)

- From ```packages/txwrapper-examples``` folder

```yarn run polkadot```
- grab the hex string output:
```
[startJobTx] -> Transaction to Submit: 0x19028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0174afd4350b4167d057377f7f6f821da88d4e90ecbeb8e0dd94e5598d073f9b3bd8c262b8923ce2de229d591956eb7590ce5fdf06aad8688c52de993cb119d28d0500000005037b00000051000000000000000000000000000000010a00000000000000
```
- head to https://polkadot.js.org/apps/#/rpc
- find ```author``` ```submitExtrinsic``` and see the Node's printouts the job is inserted
- alternatively:
```
curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "author_submitExtrinsic", "params": [0x19028400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d0174afd4350b4167d057377f7f6f821da88d4e90ecbeb8e0dd94e5598d073f9b3bd8c262b8923ce2de229d591956eb7590ce5fdf06aad8688c52de993cb119d28d0500000005037b00000051000000000000000000000000000000010a00000000000000}' http://localhost:9933/
```
