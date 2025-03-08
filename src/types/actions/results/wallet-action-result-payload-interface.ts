import { ProtocolScriptDataAndAddress } from "../../protocol-script-data-and-address.interface";
import { WalletActionTypeEnum } from "../requests/wallet-action-type.enum";
import { CommitRevealActionResult } from "./payloads/commit-reveal-action-result.interface";
import { ConnectAppActionResult } from "./payloads/connect-app-action-result.interface";
import { KasTransferActionResult } from "./payloads/kas-transfer-action-result.interface";
import { SignedMessageActionResult } from "./payloads/sign-message-action-result.interface";
import { SignPsktTransactionActionResult } from "./payloads/sign-pskt-transaction-action-result.interface";

export type WalletActionResultPayloadInterface = {
  [K in keyof WalletActionResultDataMap]: {
    action: K;
    success: true;
    data: WalletActionResultDataMap[K];
  } | {
    action: K;
    success: false;
    errorCode: number;
  };
}[keyof WalletActionResultDataMap];

interface WalletActionResultDataMap {
  [WalletActionTypeEnum.SignMessage]: SignedMessageActionResult;
  [WalletActionTypeEnum.CommitReveal]: CommitRevealActionResult;
  [WalletActionTypeEnum.KasTransfer]: KasTransferActionResult;
  [WalletActionTypeEnum.SignPsktTransaction]: SignPsktTransactionActionResult;
  [WalletActionTypeEnum.GetProtocolScriptData]: ProtocolScriptDataAndAddress;
  [WalletActionTypeEnum.ConnectApp]: ConnectAppActionResult;
}
