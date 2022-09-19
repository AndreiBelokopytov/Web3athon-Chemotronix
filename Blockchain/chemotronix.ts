import { Address, ipfs, json } from "@graphprotocol/graph-ts"
import { Approval, Transfer, fundsWithdrawn, registered } from "../generated/chemotronix/chemotronix"
import { Register, TransferCredit, Withdraw, Approve } from "../generated/schema"
import { integer } from "@protofire/subgraph-toolkit";
import "@graphprotocol/graph-ts";


export function handleApproval(event: Approval): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let newApproval = Approve.load(id);
  if (newApproval == null) {
    newApproval = new Approve(id);
    newApproval.owner = event.params.owner;
    newApproval.spender = event.params.spender;
    newApproval.amount = event.params.value;
    newApproval.save();
  }
}

export function handleTransfer(event: Transfer): void {
  let id = event.transaction.hash.toHex();
  let newTransfer = TransferCredit.load(id);
  if(newTransfer == null) {
    newTransfer = new TransferCredit(id);
    newTransfer.senderAddress = event.params.from;
    newTransfer.receiverAddress = event.params.to;
    newTransfer.amount = event.params.value;
    newTransfer.save();
  }
}

export function handlefundsWithdrawn(event: fundsWithdrawn): void {
  let id = event.transaction.from.toHex();
  let newAdmin = Withdraw.load(id);
  if(newAdmin == null) {
    newAdmin = new Withdraw(id);
    newAdmin.admin = event.params.owner;
    newAdmin.amount = event.params.amount;
    newAdmin.save();
  }
}

export function handleregistered(event: registered): void {
  let id = event.params.companyAddress.toHex();
  let newCompany = Register.load(id);
  if (newCompany == null) {
    newCompany = new Register(id);
    newCompany.uniqueID = event.params.uniqueID;
    newCompany.companyAddress = event.params.companyAddress;
    newCompany.registrationTime = event.params.registrationTime;
    newCompany.subStatus = "active";
    newCompany.save();
  }

}
