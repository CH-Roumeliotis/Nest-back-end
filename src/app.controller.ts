import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
//import web3 from 'web3';
var Web3 = require('web3');
var Contract = require('web3-eth-contract');
var Eth = require('web3-eth');

@Controller('register')
export class AppController {
  constructor(private readonly appService: AppService) {}
 

  @Post()
  create(@Body() body): string {
    console.log(body);
    //Contract.web3('http://localhost:7545');
    //var eth = new Eth("http://localhost:7545");
    var web3 = new Web3("http://localhost:7545");
    const jsonInterface = [{
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
    const conAddr = "0x63e95442849c1Ed0AeAe444aBaC45703AD61067d";

    var contract = new Contract(jsonInterface, conAddr);

    new web3.eth.Contract(jsonInterface, conAddr)
    //var myContract = new web3.eth.Contract();
    return 'Hello '+ body.username + ' here is your password: ' + body.password;
  }
  
  @Get()
  getHello(): string {
    var web3 = new Web3("http://localhost:7545");
    web3.eth.getAccounts(console.log);
    var sender = "0x4Bc6C64C63874E78950532814aFFc44AcE3e1658";
    var receiver = "0x047b15FC504bF34A4D1f286FB963623513Dd38f8";

    Web3.eth.sendTransaction({
      from: sender,
      to: receiver, 
      value: web3.utils.toWei(0.5, "ether"),
    });

    return this.appService.getHello();
  }
}
