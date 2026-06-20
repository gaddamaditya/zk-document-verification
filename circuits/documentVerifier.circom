pragma circom 2.1.6;

include "../node_modules/circomlib/circuits/poseidon.circom";

template DocumentVerifier() {

    signal input privateData[16];

    signal input claimedHash;

    component hash = Poseidon(16);

    for (var i = 0; i < 16; i++) {
        hash.inputs[i] <== privateData[i];
    }

    hash.out === claimedHash;
}

component main {public [claimedHash]} = DocumentVerifier();