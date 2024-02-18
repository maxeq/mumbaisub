// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Upgraded extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Upgraded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Upgraded must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Upgraded", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Upgraded | null {
    return changetype<Upgraded | null>(
      store.get_in_block("Upgraded", id.toHexString()),
    );
  }

  static load(id: Bytes): Upgraded | null {
    return changetype<Upgraded | null>(store.get("Upgraded", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get implementation(): Bytes {
    let value = this.get("implementation");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set implementation(value: Bytes) {
    this.set("implementation", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ItemListed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ItemListed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ItemListed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("ItemListed", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ItemListed | null {
    return changetype<ItemListed | null>(store.get_in_block("ItemListed", id));
  }

  static load(id: string): ItemListed | null {
    return changetype<ItemListed | null>(store.get("ItemListed", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get itemTokenIds(): Array<BigInt> {
    let value = this.get("itemTokenIds");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set itemTokenIds(value: Array<BigInt>) {
    this.set("itemTokenIds", Value.fromBigIntArray(value));
  }

  get itemType(): string {
    let value = this.get("itemType");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set itemType(value: string) {
    this.set("itemType", Value.fromString(value));
  }

  get power(): i32 {
    let value = this.get("power");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set power(value: i32) {
    this.set("power", Value.fromI32(value));
  }

  get durability(): i32 {
    let value = this.get("durability");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set durability(value: i32) {
    this.set("durability", Value.fromI32(value));
  }

  get characterOwner(): string {
    let value = this.get("characterOwner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set characterOwner(value: string) {
    this.set("characterOwner", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class ListingCancelled extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ListingCancelled entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ListingCancelled must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("ListingCancelled", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ListingCancelled | null {
    return changetype<ListingCancelled | null>(
      store.get_in_block("ListingCancelled", id),
    );
  }

  static load(id: string): ListingCancelled | null {
    return changetype<ListingCancelled | null>(
      store.get("ListingCancelled", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class PriceChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PriceChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PriceChanged must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("PriceChanged", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PriceChanged | null {
    return changetype<PriceChanged | null>(
      store.get_in_block("PriceChanged", id),
    );
  }

  static load(id: string): PriceChanged | null {
    return changetype<PriceChanged | null>(store.get("PriceChanged", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get newPrice(): BigInt {
    let value = this.get("newPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newPrice(value: BigInt) {
    this.set("newPrice", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class ItemBought extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ItemBought entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ItemBought must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("ItemBought", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ItemBought | null {
    return changetype<ItemBought | null>(store.get_in_block("ItemBought", id));
  }

  static load(id: string): ItemBought | null {
    return changetype<ItemBought | null>(store.get("ItemBought", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get itemType(): string {
    let value = this.get("itemType");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set itemType(value: string) {
    this.set("itemType", Value.fromString(value));
  }

  get power(): i32 {
    let value = this.get("power");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set power(value: i32) {
    this.set("power", Value.fromI32(value));
  }

  get durability(): i32 {
    let value = this.get("durability");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set durability(value: i32) {
    this.set("durability", Value.fromI32(value));
  }

  get characterOwner(): string {
    let value = this.get("characterOwner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set characterOwner(value: string) {
    this.set("characterOwner", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class DungeonResult extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DungeonResult entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DungeonResult must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("DungeonResult", id.toString(), this);
    }
  }

  static loadInBlock(id: string): DungeonResult | null {
    return changetype<DungeonResult | null>(
      store.get_in_block("DungeonResult", id),
    );
  }

  static load(id: string): DungeonResult | null {
    return changetype<DungeonResult | null>(store.get("DungeonResult", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get player(): Bytes {
    let value = this.get("player");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set player(value: Bytes) {
    this.set("player", Value.fromBytes(value));
  }

  get characterId(): BigInt {
    let value = this.get("characterId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set characterId(value: BigInt) {
    this.set("characterId", Value.fromBigInt(value));
  }

  get success(): boolean {
    let value = this.get("success");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set success(value: boolean) {
    this.set("success", Value.fromBoolean(value));
  }

  get message(): string {
    let value = this.get("message");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set message(value: string) {
    this.set("message", Value.fromString(value));
  }

  get winChance(): BigInt {
    let value = this.get("winChance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set winChance(value: BigInt) {
    this.set("winChance", Value.fromBigInt(value));
  }

  get randomValue(): BigInt {
    let value = this.get("randomValue");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set randomValue(value: BigInt) {
    this.set("randomValue", Value.fromBigInt(value));
  }

  get burnedItems(): Array<BigInt> {
    let value = this.get("burnedItems");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set burnedItems(value: Array<BigInt>) {
    this.set("burnedItems", Value.fromBigIntArray(value));
  }

  get itemPower(): BigInt {
    let value = this.get("itemPower");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set itemPower(value: BigInt) {
    this.set("itemPower", Value.fromBigInt(value));
  }

  get randomNormalized(): BigInt {
    let value = this.get("randomNormalized");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set randomNormalized(value: BigInt) {
    this.set("randomNormalized", Value.fromBigInt(value));
  }

  get characterCreationDate(): BigInt {
    let value = this.get("characterCreationDate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set characterCreationDate(value: BigInt) {
    this.set("characterCreationDate", Value.fromBigInt(value));
  }

  get lootReward(): BigInt {
    let value = this.get("lootReward");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lootReward(value: BigInt) {
    this.set("lootReward", Value.fromBigInt(value));
  }

  get dungeonTimestamp(): BigInt {
    let value = this.get("dungeonTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set dungeonTimestamp(value: BigInt) {
    this.set("dungeonTimestamp", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get imageURI(): string {
    let value = this.get("imageURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set imageURI(value: string) {
    this.set("imageURI", Value.fromString(value));
  }

  get experience(): BigInt {
    let value = this.get("experience");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set experience(value: BigInt) {
    this.set("experience", Value.fromBigInt(value));
  }

  get openSlots(): Array<BigInt> {
    let value = this.get("openSlots");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set openSlots(value: Array<BigInt>) {
    this.set("openSlots", Value.fromBigIntArray(value));
  }
}

export class Character extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Character entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Character must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Character", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Character | null {
    return changetype<Character | null>(store.get_in_block("Character", id));
  }

  static load(id: string): Character | null {
    return changetype<Character | null>(store.get("Character", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get imageURI(): string {
    let value = this.get("imageURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set imageURI(value: string) {
    this.set("imageURI", Value.fromString(value));
  }

  get avatarType(): string {
    let value = this.get("avatarType");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set avatarType(value: string) {
    this.set("avatarType", Value.fromString(value));
  }

  get itemSlots(): BigInt {
    let value = this.get("itemSlots");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set itemSlots(value: BigInt) {
    this.set("itemSlots", Value.fromBigInt(value));
  }

  get openSlots(): Array<BigInt> | null {
    let value = this.get("openSlots");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set openSlots(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("openSlots");
    } else {
      this.set("openSlots", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }

  get registrationDate(): BigInt {
    let value = this.get("registrationDate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set registrationDate(value: BigInt) {
    this.set("registrationDate", Value.fromBigInt(value));
  }

  get experience(): BigInt {
    let value = this.get("experience");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set experience(value: BigInt) {
    this.set("experience", Value.fromBigInt(value));
  }
}

export class ExperienceUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExperienceUpdate entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExperienceUpdate must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("ExperienceUpdate", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ExperienceUpdate | null {
    return changetype<ExperienceUpdate | null>(
      store.get_in_block("ExperienceUpdate", id),
    );
  }

  static load(id: string): ExperienceUpdate | null {
    return changetype<ExperienceUpdate | null>(
      store.get("ExperienceUpdate", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get totalExperience(): BigInt {
    let value = this.get("totalExperience");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalExperience(value: BigInt) {
    this.set("totalExperience", Value.fromBigInt(value));
  }

  get lastAddedSlot(): BigInt | null {
    let value = this.get("lastAddedSlot");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastAddedSlot(value: BigInt | null) {
    if (!value) {
      this.unset("lastAddedSlot");
    } else {
      this.set("lastAddedSlot", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class ItemOwnershipChange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ItemOwnershipChange entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ItemOwnershipChange must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("ItemOwnershipChange", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ItemOwnershipChange | null {
    return changetype<ItemOwnershipChange | null>(
      store.get_in_block("ItemOwnershipChange", id),
    );
  }

  static load(id: string): ItemOwnershipChange | null {
    return changetype<ItemOwnershipChange | null>(
      store.get("ItemOwnershipChange", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class Box extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Box entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Box must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Box", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Box | null {
    return changetype<Box | null>(store.get_in_block("Box", id));
  }

  static load(id: string): Box | null {
    return changetype<Box | null>(store.get("Box", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get mintedAt(): BigInt {
    let value = this.get("mintedAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set mintedAt(value: BigInt) {
    this.set("mintedAt", Value.fromBigInt(value));
  }
}

export class Item extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Item entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Item must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Item", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Item | null {
    return changetype<Item | null>(store.get_in_block("Item", id));
  }

  static load(id: string): Item | null {
    return changetype<Item | null>(store.get("Item", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get metadata(): string {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set metadata(value: string) {
    this.set("metadata", Value.fromString(value));
  }

  get mintedAt(): BigInt {
    let value = this.get("mintedAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set mintedAt(value: BigInt) {
    this.set("mintedAt", Value.fromBigInt(value));
  }
}

export class ForgeProcessed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ForgeProcessed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ForgeProcessed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("ForgeProcessed", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ForgeProcessed | null {
    return changetype<ForgeProcessed | null>(
      store.get_in_block("ForgeProcessed", id),
    );
  }

  static load(id: string): ForgeProcessed | null {
    return changetype<ForgeProcessed | null>(store.get("ForgeProcessed", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get itemId(): BigInt {
    let value = this.get("itemId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set itemId(value: BigInt) {
    this.set("itemId", Value.fromBigInt(value));
  }

  get uri(): string {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get successPercentage(): BigInt {
    let value = this.get("successPercentage");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set successPercentage(value: BigInt) {
    this.set("successPercentage", Value.fromBigInt(value));
  }

  get random(): BigInt {
    let value = this.get("random");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set random(value: BigInt) {
    this.set("random", Value.fromBigInt(value));
  }

  get mintedAt(): BigInt {
    let value = this.get("mintedAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set mintedAt(value: BigInt) {
    this.set("mintedAt", Value.fromBigInt(value));
  }
}
