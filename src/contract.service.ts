import { Injectable } from '@nestjs/common';

@Injectable()
export class ContractService {

abi = [{
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "usr",
        "type": "string"
      }
    ],
    "name": "setUsername",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "pass",
        "type": "string"
      }
    ],
    "name": "setPassword",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getUsername",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPassword",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }];

  getCon(): string {
    return 'this.abi';
  }
}

//getContract(): string {
//const contractAddr = '0x63e95442849c1Ed0AeAe444aBaC45703AD61067d';


//}
  //export class ContractModule{}