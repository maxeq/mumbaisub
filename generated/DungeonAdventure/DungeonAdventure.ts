// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class DungeonResult extends ethereum.Event {
  get params(): DungeonResult__Params {
    return new DungeonResult__Params(this);
  }
}

export class DungeonResult__Params {
  _event: DungeonResult;

  constructor(event: DungeonResult) {
    this._event = event;
  }

  get player(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get characterId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get success(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get message(): string {
    return this._event.parameters[3].value.toString();
  }

  get winChance(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get randomValue(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get burnedItems(): Array<BigInt> {
    return this._event.parameters[6].value.toBigIntArray();
  }

  get itemPower(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get randomNormalized(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get characterCreationDate(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get lootReward(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }

  get dungeonTimestamp(): BigInt {
    return this._event.parameters[11].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[12].value.toString();
  }

  get imageURI(): string {
    return this._event.parameters[13].value.toString();
  }

  get experience(): BigInt {
    return this._event.parameters[14].value.toBigInt();
  }

  get openSlots(): Array<BigInt> {
    return this._event.parameters[15].value.toBigIntArray();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SignatureReceived extends ethereum.Event {
  get params(): SignatureReceived__Params {
    return new SignatureReceived__Params(this);
  }
}

export class SignatureReceived__Params {
  _event: SignatureReceived;

  constructor(event: SignatureReceived) {
    this._event = event;
  }

  get signature(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DungeonAdventure__attemptDetailsResultParamsStruct extends ethereum.Tuple {
  get itemIds(): Array<BigInt> {
    return this[0].toBigIntArray();
  }

  get experienceToAdd(): BigInt {
    return this[1].toBigInt();
  }

  get durabilityToDeduct(): i32 {
    return this[2].toI32();
  }

  get slotToAdd(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get winPercentage(): BigInt {
    return this[4].toBigInt();
  }

  get itemPower(): BigInt {
    return this[5].toBigInt();
  }

  get walletId(): Address {
    return this[6].toAddress();
  }

  get characterId(): BigInt {
    return this[7].toBigInt();
  }

  get entryFee(): BigInt {
    return this[8].toBigInt();
  }

  get lootReward(): BigInt {
    return this[9].toBigInt();
  }

  get timestamp(): BigInt {
    return this[10].toBigInt();
  }

  get signature(): Bytes {
    return this[11].toBytes();
  }

  get starRating(): i32 {
    return this[12].toI32();
  }
}

export class DungeonAdventure__attemptDetailsResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: DungeonAdventure__attemptDetailsResultParamsStruct;
  value4: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: DungeonAdventure__attemptDetailsResultParamsStruct,
    value4: boolean,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromTuple(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }

  getTimestamp(): BigInt {
    return this.value0;
  }

  getPlayer(): Address {
    return this.value1;
  }

  getRequestId(): BigInt {
    return this.value2;
  }

  getParams(): DungeonAdventure__attemptDetailsResultParamsStruct {
    return this.value3;
  }

  getPending(): boolean {
    return this.value4;
  }
}

export class DungeonAdventure extends ethereum.SmartContract {
  static bind(address: Address): DungeonAdventure {
    return new DungeonAdventure("DungeonAdventure", address);
  }

  UPGRADE_INTERFACE_VERSION(): string {
    let result = super.call(
      "UPGRADE_INTERFACE_VERSION",
      "UPGRADE_INTERFACE_VERSION():(string)",
      [],
    );

    return result[0].toString();
  }

  try_UPGRADE_INTERFACE_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "UPGRADE_INTERFACE_VERSION",
      "UPGRADE_INTERFACE_VERSION():(string)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  attemptDetails(param0: BigInt): DungeonAdventure__attemptDetailsResult {
    let result = super.call(
      "attemptDetails",
      "attemptDetails(uint256):(uint256,address,uint256,(uint256[],uint256,uint16,uint256[],uint256,uint256,address,uint256,uint256,uint256,uint256,bytes,uint8),bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new DungeonAdventure__attemptDetailsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      changetype<DungeonAdventure__attemptDetailsResultParamsStruct>(
        result[3].toTuple(),
      ),
      result[4].toBoolean(),
    );
  }

  try_attemptDetails(
    param0: BigInt,
  ): ethereum.CallResult<DungeonAdventure__attemptDetailsResult> {
    let result = super.tryCall(
      "attemptDetails",
      "attemptDetails(uint256):(uint256,address,uint256,(uint256[],uint256,uint16,uint256[],uint256,uint256,address,uint256,uint256,uint256,uint256,bytes,uint8),bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new DungeonAdventure__attemptDetailsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        changetype<DungeonAdventure__attemptDetailsResultParamsStruct>(
          value[3].toTuple(),
        ),
        value[4].toBoolean(),
      ),
    );
  }

  characterContract(): Address {
    let result = super.call(
      "characterContract",
      "characterContract():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_characterContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "characterContract",
      "characterContract():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  gameTreasury(): Address {
    let result = super.call("gameTreasury", "gameTreasury():(address)", []);

    return result[0].toAddress();
  }

  try_gameTreasury(): ethereum.CallResult<Address> {
    let result = super.tryCall("gameTreasury", "gameTreasury():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCharacterEnergy(characterId: BigInt): BigInt {
    let result = super.call(
      "getCharacterEnergy",
      "getCharacterEnergy(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(characterId)],
    );

    return result[0].toBigInt();
  }

  try_getCharacterEnergy(characterId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCharacterEnergy",
      "getCharacterEnergy(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(characterId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLastEnergyUpdateTime(characterId: BigInt): BigInt {
    let result = super.call(
      "getLastEnergyUpdateTime",
      "getLastEnergyUpdateTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(characterId)],
    );

    return result[0].toBigInt();
  }

  try_getLastEnergyUpdateTime(
    characterId: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLastEnergyUpdateTime",
      "getLastEnergyUpdateTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(characterId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  itemContract(): Address {
    let result = super.call("itemContract", "itemContract():(address)", []);

    return result[0].toAddress();
  }

  try_itemContract(): ethereum.CallResult<Address> {
    let result = super.tryCall("itemContract", "itemContract():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  knownServerAddress(): Address {
    let result = super.call(
      "knownServerAddress",
      "knownServerAddress():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_knownServerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "knownServerAddress",
      "knownServerAddress():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paymentToken(): Address {
    let result = super.call("paymentToken", "paymentToken():(address)", []);

    return result[0].toAddress();
  }

  try_paymentToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("paymentToken", "paymentToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  randomnessProvider(): Address {
    let result = super.call(
      "randomnessProvider",
      "randomnessProvider():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_randomnessProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "randomnessProvider",
      "randomnessProvider():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tournamentContract(): Address {
    let result = super.call(
      "tournamentContract",
      "tournamentContract():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_tournamentContract(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "tournamentContract",
      "tournamentContract():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class GoDungeonCall extends ethereum.Call {
  get inputs(): GoDungeonCall__Inputs {
    return new GoDungeonCall__Inputs(this);
  }

  get outputs(): GoDungeonCall__Outputs {
    return new GoDungeonCall__Outputs(this);
  }
}

export class GoDungeonCall__Inputs {
  _call: GoDungeonCall;

  constructor(call: GoDungeonCall) {
    this._call = call;
  }

  get params(): GoDungeonCallParamsStruct {
    return changetype<GoDungeonCallParamsStruct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }
}

export class GoDungeonCall__Outputs {
  _call: GoDungeonCall;

  constructor(call: GoDungeonCall) {
    this._call = call;
  }
}

export class GoDungeonCallParamsStruct extends ethereum.Tuple {
  get itemIds(): Array<BigInt> {
    return this[0].toBigIntArray();
  }

  get experienceToAdd(): BigInt {
    return this[1].toBigInt();
  }

  get durabilityToDeduct(): i32 {
    return this[2].toI32();
  }

  get slotToAdd(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get winPercentage(): BigInt {
    return this[4].toBigInt();
  }

  get itemPower(): BigInt {
    return this[5].toBigInt();
  }

  get walletId(): Address {
    return this[6].toAddress();
  }

  get characterId(): BigInt {
    return this[7].toBigInt();
  }

  get entryFee(): BigInt {
    return this[8].toBigInt();
  }

  get lootReward(): BigInt {
    return this[9].toBigInt();
  }

  get timestamp(): BigInt {
    return this[10].toBigInt();
  }

  get signature(): Bytes {
    return this[11].toBytes();
  }

  get starRating(): i32 {
    return this[12].toI32();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get initialOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _itemContractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _characterContractAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _randomnessProvider(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _gameTreasuryAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _knownServerAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _paymentToken(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _tournamentContract(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ProcessDungeonAttemptCall extends ethereum.Call {
  get inputs(): ProcessDungeonAttemptCall__Inputs {
    return new ProcessDungeonAttemptCall__Inputs(this);
  }

  get outputs(): ProcessDungeonAttemptCall__Outputs {
    return new ProcessDungeonAttemptCall__Outputs(this);
  }
}

export class ProcessDungeonAttemptCall__Inputs {
  _call: ProcessDungeonAttemptCall;

  constructor(call: ProcessDungeonAttemptCall) {
    this._call = call;
  }

  get requestId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get randomValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ProcessDungeonAttemptCall__Outputs {
  _call: ProcessDungeonAttemptCall;

  constructor(call: ProcessDungeonAttemptCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetCharacterContractAddressCall extends ethereum.Call {
  get inputs(): SetCharacterContractAddressCall__Inputs {
    return new SetCharacterContractAddressCall__Inputs(this);
  }

  get outputs(): SetCharacterContractAddressCall__Outputs {
    return new SetCharacterContractAddressCall__Outputs(this);
  }
}

export class SetCharacterContractAddressCall__Inputs {
  _call: SetCharacterContractAddressCall;

  constructor(call: SetCharacterContractAddressCall) {
    this._call = call;
  }

  get _newCreateCharacterAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCharacterContractAddressCall__Outputs {
  _call: SetCharacterContractAddressCall;

  constructor(call: SetCharacterContractAddressCall) {
    this._call = call;
  }
}

export class SetGameTreasuryAddressCall extends ethereum.Call {
  get inputs(): SetGameTreasuryAddressCall__Inputs {
    return new SetGameTreasuryAddressCall__Inputs(this);
  }

  get outputs(): SetGameTreasuryAddressCall__Outputs {
    return new SetGameTreasuryAddressCall__Outputs(this);
  }
}

export class SetGameTreasuryAddressCall__Inputs {
  _call: SetGameTreasuryAddressCall;

  constructor(call: SetGameTreasuryAddressCall) {
    this._call = call;
  }

  get _gameTreasuryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetGameTreasuryAddressCall__Outputs {
  _call: SetGameTreasuryAddressCall;

  constructor(call: SetGameTreasuryAddressCall) {
    this._call = call;
  }
}

export class SetKnownServerAddressCall extends ethereum.Call {
  get inputs(): SetKnownServerAddressCall__Inputs {
    return new SetKnownServerAddressCall__Inputs(this);
  }

  get outputs(): SetKnownServerAddressCall__Outputs {
    return new SetKnownServerAddressCall__Outputs(this);
  }
}

export class SetKnownServerAddressCall__Inputs {
  _call: SetKnownServerAddressCall;

  constructor(call: SetKnownServerAddressCall) {
    this._call = call;
  }

  get _knownServerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetKnownServerAddressCall__Outputs {
  _call: SetKnownServerAddressCall;

  constructor(call: SetKnownServerAddressCall) {
    this._call = call;
  }
}

export class SetMintItemContractAddressCall extends ethereum.Call {
  get inputs(): SetMintItemContractAddressCall__Inputs {
    return new SetMintItemContractAddressCall__Inputs(this);
  }

  get outputs(): SetMintItemContractAddressCall__Outputs {
    return new SetMintItemContractAddressCall__Outputs(this);
  }
}

export class SetMintItemContractAddressCall__Inputs {
  _call: SetMintItemContractAddressCall;

  constructor(call: SetMintItemContractAddressCall) {
    this._call = call;
  }

  get _newItemContractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMintItemContractAddressCall__Outputs {
  _call: SetMintItemContractAddressCall;

  constructor(call: SetMintItemContractAddressCall) {
    this._call = call;
  }
}

export class SetPaymentTokenCall extends ethereum.Call {
  get inputs(): SetPaymentTokenCall__Inputs {
    return new SetPaymentTokenCall__Inputs(this);
  }

  get outputs(): SetPaymentTokenCall__Outputs {
    return new SetPaymentTokenCall__Outputs(this);
  }
}

export class SetPaymentTokenCall__Inputs {
  _call: SetPaymentTokenCall;

  constructor(call: SetPaymentTokenCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPaymentTokenCall__Outputs {
  _call: SetPaymentTokenCall;

  constructor(call: SetPaymentTokenCall) {
    this._call = call;
  }
}

export class SetRandomnessProviderCall extends ethereum.Call {
  get inputs(): SetRandomnessProviderCall__Inputs {
    return new SetRandomnessProviderCall__Inputs(this);
  }

  get outputs(): SetRandomnessProviderCall__Outputs {
    return new SetRandomnessProviderCall__Outputs(this);
  }
}

export class SetRandomnessProviderCall__Inputs {
  _call: SetRandomnessProviderCall;

  constructor(call: SetRandomnessProviderCall) {
    this._call = call;
  }

  get _randomnessProvider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRandomnessProviderCall__Outputs {
  _call: SetRandomnessProviderCall;

  constructor(call: SetRandomnessProviderCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
