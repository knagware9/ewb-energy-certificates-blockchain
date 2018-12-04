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
        let asset = JSON.parse(args[0]);
        await stub.putState(asset.id, Buffer.from(args[0]));
        console.info('============= END : Create Asset ===========');
    }

    async update(stub, args) {
        console.info('============= START : Update Asset ===========');
        if (args.length < 1) {
            throw new Error('Incorrect number of arguments.');
        }

        let assetAsBytes = await stub.getState(JSON.parse(args[0]).id);
        let asset = JSON.parse(assetAsBytes);

        await stub.putState(asset.id, Buffer.from(args[0]));
        console.info('============= END : Update Asset ===========');
    }

    async queryById(stub, args) {
        console.info('============= START : Query Asset by id ===========');
        if (args.length !== 1) {
            throw new Error('Incorrect number of arguments.');
        }

        let productAsBytes = await stub.getState(args[0]); //get the asset from chaincode state
        if (!productAsBytes || productAsBytes.toString().length <= 0) {
            throw new Error(args[0] + ' does not exist: ');
        }
        console.info('============= END : Query Asset by id ===========');
        return productAsBytes;
    }

    async getQueryResultForQueryString(stub, args) {
        console.info('============= START : Query All by Type ===========');
        if (args.length !== 1) {
            throw new Error('Incorrect number of arguments.');
        }

        let resultsIterator = await stub.getQueryResult(args[0]);

        let allResults = [];
        while (true) {
            let res = await resultsIterator.next();

            if (res.value && res.value.value.toString()) {
                let jsonRes = {};
                console.log(res.value.value.toString('utf8'));

                jsonRes.Key = res.value.key;
                try {
                    jsonRes.Record = JSON.parse(res.value.value.toString('utf8'));
                } catch (err) {
                    console.log(err);
                    jsonRes.Record = res.value.value.toString('utf8');
                }
                allResults.push(jsonRes.Record);
            }
            if (res.done) {
                console.log('end of data');
                await resultsIterator.close();
                console.info(allResults);
                console.info('============= END : Query Asset by id ===========');
                return Buffer.from(JSON.stringify(allResults));
            }
        }
    }
};

shim.start(new Chaincode());
