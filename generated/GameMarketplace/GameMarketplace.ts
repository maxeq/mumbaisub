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

export class ItemBought extends ethereum.Event {
  get params(): ItemBought__Params {
    return new ItemBought__Params(this);
  }
}

export class ItemBought__Params {
  _event: ItemBought;

  constructor(event: ItemBought) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get itemTokenIds(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get itemType(): string {
    return this._event.parameters[5].value.toString();
  }

  get power(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get durability(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get characterOwner(): string {
    return this._event.parameters[8].value.toString();
  }

  get imageUrl(): string {
    return this._event.parameters[9].value.toString();
  }
}

export class ItemListed extends ethereum.Event {
  get params(): ItemListed__Params {
    return new ItemListed__Params(this);
  }
}

export class ItemListed__Params {
  _event: ItemListed;

  constructor(event: ItemListed) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get itemTokenIds(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get itemType(): string {
    return this._event.parameters[5].value.toString();
  }

  get power(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get durability(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get characterOwner(): string {
    return this._event.parameters[8].value.toString();
  }

  get imageUrl(): string {
    return this._event.parameters[9].value.toString();
  }
}

export class ListingCancelled extends ethereum.Event {
  get params(): ListingCancelled__Params {
    return new ListingCancelled__Params(this);
  }
}

export class ListingCancelled__Params {
  _event: ListingCancelled;

  constructor(event: ListingCancelled) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
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

export class PriceChanged extends ethereum.Event {
  get params(): PriceChanged__Params {
    return new PriceChanged__Params(this);
  }
}

export class PriceChanged__Params {
  _event: PriceChanged;

  constructor(event: PriceChanged) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

export class GameMarketplace__listingsResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: boolean;
  value4: string;
  value5: BigInt;
  value6: BigInt;
  value7: string;
  value8: string;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: boolean,
    value4: string,
    value5: BigInt,
    value6: BigInt,
    value7: string,
    value8: string,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromString(this.value7));
    map.set("value8", ethereum.Value.fromString(this.value8));
    return map;
  }

  getTokenId(): BigInt {
    return this.value0;
  }

  getSeller(): Address {
    return this.value1;
  }

  getPrice(): BigInt {
    return this.value2;
  }

  getIsActive(): boolean {
    return this.value3;
  }

  getItemType(): string {
    return this.value4;
  }

  getPower(): BigInt {
    return this.value5;
  }

  getDurability(): BigInt {
    return this.value6;
  }

  getCharacterOwner(): string {
    return this.value7;
  }

  getImageUrl(): string {
    return this.value8;
  }
}

export class GameMarketplace extends ethereum.SmartContract {
  static bind(address: Address): GameMarketplace {
    return new GameMarketplace("GameMarketplace", address);
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

  listings(param0: Address, param1: BigInt): GameMarketplace__listingsResult {
    let result = super.call(
      "listings",
      "listings(address,uint256):(uint256,address,uint256,bool,string,uint256,uint256,string,string)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );

    return new GameMarketplace__listingsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBoolean(),
      result[4].toString(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toString(),
      result[8].toString(),
    );
  }

  try_listings(
    param0: Address,
    param1: BigInt,
  ): ethereum.CallResult<GameMarketplace__listingsResult> {
    let result = super.tryCall(
      "listings",
      "listings(address,uint256):(uint256,address,uint256,bool,string,uint256,uint256,string,string)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new GameMarketplace__listingsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBoolean(),
        value[4].toString(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toString(),
        value[8].toString(),
      ),
    );
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

export class BuyItemCall extends ethereum.Call {
  get inputs(): BuyItemCall__Inputs {
    return new BuyItemCall__Inputs(this);
  }

  get outputs(): BuyItemCall__Outputs {
    return new BuyItemCall__Outputs(this);
  }
}

export class BuyItemCall__Inputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BuyItemCall__Outputs {
  _call: BuyItemCall;

  constructor(call: BuyItemCall) {
    this._call = call;
  }
}

export class CancelListingCall extends ethereum.Call {
  get inputs(): CancelListingCall__Inputs {
    return new CancelListingCall__Inputs(this);
  }

  get outputs(): CancelListingCall__Outputs {
    return new CancelListingCall__Outputs(this);
  }
}

export class CancelListingCall__Inputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelListingCall__Outputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }
}

export class ChangePriceCall extends ethereum.Call {
  get inputs(): ChangePriceCall__Inputs {
    return new ChangePriceCall__Inputs(this);
  }

  get outputs(): ChangePriceCall__Outputs {
    return new ChangePriceCall__Outputs(this);
  }
}

export class ChangePriceCall__Inputs {
  _call: ChangePriceCall;

  constructor(call: ChangePriceCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ChangePriceCall__Outputs {
  _call: ChangePriceCall;

  constructor(call: ChangePriceCall) {
    this._call = call;
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

  get _itemContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _characterContract(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _gameTreasuryAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _paymentToken(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _authorizedSigner(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ListItemForSaleCall extends ethereum.Call {
  get inputs(): ListItemForSaleCall__Inputs {
    return new ListItemForSaleCall__Inputs(this);
  }

  get outputs(): ListItemForSaleCall__Outputs {
    return new ListItemForSaleCall__Outputs(this);
  }
}

export class ListItemForSaleCall__Inputs {
  _call: ListItemForSaleCall;

  constructor(call: ListItemForSaleCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get itemTokenIds(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get itemType(): string {
    return this._call.inputValues[4].value.toString();
  }

  get power(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get durability(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get characterOwner(): string {
    return this._call.inputValues[7].value.toString();
  }

  get imageUrl(): string {
    return this._call.inputValues[8].value.toString();
  }

  get signature(): Bytes {
    return this._call.inputValues[9].value.toBytes();
  }
}

export class ListItemForSaleCall__Outputs {
  _call: ListItemForSaleCall;

  constructor(call: ListItemForSaleCall) {
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

export class SetAuthorizedSignerCall extends ethereum.Call {
  get inputs(): SetAuthorizedSignerCall__Inputs {
    return new SetAuthorizedSignerCall__Inputs(this);
  }

  get outputs(): SetAuthorizedSignerCall__Outputs {
    return new SetAuthorizedSignerCall__Outputs(this);
  }
}

export class SetAuthorizedSignerCall__Inputs {
  _call: SetAuthorizedSignerCall;

  constructor(call: SetAuthorizedSignerCall) {
    this._call = call;
  }

  get _authorizedSigner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAuthorizedSignerCall__Outputs {
  _call: SetAuthorizedSignerCall;

  constructor(call: SetAuthorizedSignerCall) {
    this._call = call;
  }
}

export class SetCreateCharacterContractAddressCall extends ethereum.Call {
  get inputs(): SetCreateCharacterContractAddressCall__Inputs {
    return new SetCreateCharacterContractAddressCall__Inputs(this);
  }

  get outputs(): SetCreateCharacterContractAddressCall__Outputs {
    return new SetCreateCharacterContractAddressCall__Outputs(this);
  }
}

export class SetCreateCharacterContractAddressCall__Inputs {
  _call: SetCreateCharacterContractAddressCall;

  constructor(call: SetCreateCharacterContractAddressCall) {
    this._call = call;
  }

  get _newCreateCharacterContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCreateCharacterContractAddressCall__Outputs {
  _call: SetCreateCharacterContractAddressCall;

  constructor(call: SetCreateCharacterContractAddressCall) {
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

export class SetMintItemAddressCall extends ethereum.Call {
  get inputs(): SetMintItemAddressCall__Inputs {
    return new SetMintItemAddressCall__Inputs(this);
  }

  get outputs(): SetMintItemAddressCall__Outputs {
    return new SetMintItemAddressCall__Outputs(this);
  }
}

export class SetMintItemAddressCall__Inputs {
  _call: SetMintItemAddressCall;

  constructor(call: SetMintItemAddressCall) {
    this._call = call;
  }

  get _itemContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMintItemAddressCall__Outputs {
  _call: SetMintItemAddressCall;

  constructor(call: SetMintItemAddressCall) {
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
