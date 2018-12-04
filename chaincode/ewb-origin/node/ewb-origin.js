/*
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
*/

'use strict';
const shim = require('fabric-shim');
const util = require('util');

let Chaincode = class {

    // The Init method is called when the Smart Contract 'ewb-origin' is instantiated by the blockchain network
    // Best practice is to have any Ledger initialization in separate function -- see initLedger()
    async Init(stub) {
        console.info('=========== Instantiated ewb-origin chaincode ===========');
        return shim.success();
    }

    // The Invoke method is called as a result of an application request to run the Smart Contract
    // 'ewb-origin'. The calling application program has also specified the particular smart contract
    // function to be called, with arguments
    async Invoke(stub) {
        let ret = stub.getFunctionAndParameters();
        console.info(ret);

        let method = this[ret.fcn];
        if (!method) {
            console.error('no function of name:' + ret.fcn + ' found');
            throw new Error('Received unknown function ' + ret.fcn + ' invocation');
        }
        try {
            let payload = await method(stub, ret.params);
            return shim.success(payload);
        } catch (err) {
            console.log(err);
            return shim.error(err);
        }
    }

    async initLedger(stub, args) {
        console.info('============= START : Initialize Ledger ===========');
        console.info('============= END : Initialize Ledger ===========');
    }

    async create(stub, args) {
        console.info('============= START : Create Asset ===========');
        if (args.length < 1) {
            throw new Error('Incorrect number of arguments.');
        }
        await stub.putState('ASSET-' + args[0].id, Buffer.from(JSON.stringify(args[0])));
        console.info('============= END : Create Asset ===========');
    }

    async update(stub, args) {
        console.info('============= START : changeProductOwner ===========');
        if (args.length < 1) {
            throw new Error('Incorrect number of arguments.');
        }
        let assetId = 'ASSET-' + args[0];

        let assetAsBytes = await stub.getState(assetId);
        let asset = JSON.parse(assetAsBytes);
        asset = args[0];

        await stub.putState(assetAsBytes, Buffer.from(JSON.stringify(asset)));
        console.info('============= END : changeProductOwner ===========');
    }
};

shim.start(new Chaincode());
