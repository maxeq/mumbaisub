import { BigInt } from "@graphprotocol/graph-ts";
import { DungeonResult as DungeonResultEvent } from "../generated/DungeonAdventure/DungeonAdventure";
import {  DungeonResult } from "../generated/schema";

export function handleDungeonResult(event: DungeonResultEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  // if (!entity) {
  //   entity = new DungeonResult(id);
  // }

  let characterId = event.params.characterId.toString();
  let entity = DungeonResult.load(characterId);

  if (!entity) {
    entity = new DungeonResult(characterId);
    entity.player = event.params.player;
    entity.characterId = event.params.characterId;
    entity.dungeonTime = dateTimeFromTimestamp(event.params.dungeonTimestamp);
    entity.dungeonDay = dayMonthYearFromTimestamp(event.params.dungeonTimestamp);
    entity.characterCreationDate = dayMonthYearFromTimestamp(event.params.characterCreationDate);
    entity.totalLootReward = event.params.lootReward;
    entity.totalExperiences = event.params.experience;
    entity.name = event.params.name;
    entity.imageURI = event.params.imageURI;
    entity.itemPower = event.params.itemPower;
    entity.totalSuccess = BigInt.fromI32(0);
    entity.totalAttempts = BigInt.fromI32(0);
    } else {
      entity.totalExperiences = event.params.experience;
    }
  
  if (event.params.itemPower > entity.itemPower) {
    entity.itemPower = event.params.itemPower;
  }

  if (event.params.success) {
    entity.totalSuccess = entity.totalSuccess.plus(BigInt.fromI32(+1));
    entity.totalLootReward = entity.totalLootReward.plus(event.params.lootReward);
  }
  entity.totalAttempts = entity.totalAttempts.plus(BigInt.fromI32(+1));

  entity.save();
}


const SECONDS_IN_DAY: i32 = 86400;
const ZERO: BigInt = BigInt.fromI32(0);
const ONE: BigInt = BigInt.fromI32(1);

export function dayMonthYearFromTimestamp(timestamp: BigInt): string {
  let unixEpoch: BigInt = timestamp;

  let daysSinceEpochStart: BigInt = unixEpoch.div(BigInt.fromI32(SECONDS_IN_DAY)).plus(BigInt.fromI32(719468));
  
  let era: BigInt = (daysSinceEpochStart.ge(ZERO) ? daysSinceEpochStart : daysSinceEpochStart.minus(BigInt.fromI32(146096))).div(BigInt.fromI32(146097));
  let dayOfEra: BigInt = daysSinceEpochStart.minus(era.times(BigInt.fromI32(146097))); // [0, 146096]
  let yearOfEra: BigInt = (dayOfEra.minus(dayOfEra.div(BigInt.fromI32(1460))).plus(dayOfEra.div(BigInt.fromI32(36524))).minus(dayOfEra.div(BigInt.fromI32(146096)))).div(BigInt.fromI32(365)); // [0, 399]
  
  let year: BigInt = yearOfEra.plus(era.times(BigInt.fromI32(400)));
  let dayOfYear: BigInt = dayOfEra.minus((BigInt.fromI32(365).times(yearOfEra)).plus(yearOfEra.div(BigInt.fromI32(4))).minus(yearOfEra.div(BigInt.fromI32(100)))); // [0, 365]
  let monthZeroIndexed: BigInt = (BigInt.fromI32(5).times(dayOfYear).plus(BigInt.fromI32(2))).div(BigInt.fromI32(153)); // [0, 11]
  let day: BigInt = dayOfYear.minus((BigInt.fromI32(153).times(monthZeroIndexed).plus(BigInt.fromI32(2))).div(BigInt.fromI32(5))).plus(ONE); // [1, 31]
  let month: BigInt = monthZeroIndexed.plus(monthZeroIndexed.lt(BigInt.fromI32(10)) ? BigInt.fromI32(3) : BigInt.fromI32(-9)); // [1, 12]

  year = month.le(BigInt.fromI32(2)) ? year.plus(ONE) : year;
  
  return year.toString() + "-" + (month.le(BigInt.fromI32(9)) ? "0" : "") + month.toString() + "-" + (day.le(BigInt.fromI32(9)) ? "0" : "") + day.toString();
}

export function dateTimeFromTimestamp(timestamp: BigInt): string {
  let unixEpoch: BigInt = timestamp;

  let daysSinceEpochStart: BigInt = unixEpoch.div(BigInt.fromI32(SECONDS_IN_DAY)).plus(BigInt.fromI32(719468));
  
  let era: BigInt = (daysSinceEpochStart.ge(ZERO) ? daysSinceEpochStart : daysSinceEpochStart.minus(BigInt.fromI32(146096))).div(BigInt.fromI32(146097));
  let dayOfEra: BigInt = daysSinceEpochStart.minus(era.times(BigInt.fromI32(146097)));
  let yearOfEra: BigInt = (dayOfEra.minus(dayOfEra.div(BigInt.fromI32(1460))).plus(dayOfEra.div(BigInt.fromI32(36524))).minus(dayOfEra.div(BigInt.fromI32(146096)))).div(BigInt.fromI32(365));
  
  let year: BigInt = yearOfEra.plus(era.times(BigInt.fromI32(400)));
  let dayOfYear: BigInt = dayOfEra.minus((BigInt.fromI32(365).times(yearOfEra)).plus(yearOfEra.div(BigInt.fromI32(4))).minus(yearOfEra.div(BigInt.fromI32(100))));
  let monthZeroIndexed: BigInt = (BigInt.fromI32(5).times(dayOfYear).plus(BigInt.fromI32(2))).div(BigInt.fromI32(153));
  let day: BigInt = dayOfYear.minus((BigInt.fromI32(153).times(monthZeroIndexed).plus(BigInt.fromI32(2))).div(BigInt.fromI32(5))).plus(ONE);
  let month: BigInt = monthZeroIndexed.plus(monthZeroIndexed.lt(BigInt.fromI32(10)) ? BigInt.fromI32(3) : BigInt.fromI32(-9));

  year = month.le(BigInt.fromI32(2)) ? year.plus(ONE) : year;

  let secondsInDay = unixEpoch.mod(BigInt.fromI32(SECONDS_IN_DAY));
  let hours = secondsInDay.div(BigInt.fromI32(3600));
  let minutes = secondsInDay.mod(BigInt.fromI32(3600)).div(BigInt.fromI32(60));
  let seconds = secondsInDay.mod(BigInt.fromI32(60));

  return `${year.toString()}-${month.le(BigInt.fromI32(9)) ? "0" : ""}${month.toString()}-${day.le(BigInt.fromI32(9)) ? "0" : ""}${day.toString()} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


  // let entity = DungeonResult.load(id);

  // if (!entity) {
  //   entity = new DungeonResult(id);
  // }

  // // Set the properties of the entity based on the event parameters
  // entity.player = event.params.player;
  // entity.characterId = event.params.characterId;
  // entity.success = event.params.success;
  // entity.message = event.params.message;
  // entity.winChance = event.params.winChance;
  // entity.randomValue = event.params.randomValue;
  // entity.burnedItems = event.params.burnedItems;
  // entity.itemPower = event.params.itemPower;
  // entity.randomNormalized = event.params.randomNormalized;
  // entity.characterCreationDate = event.params.characterCreationDate;
  // entity.lootReward = event.params.lootReward;
  // entity.dungeonTimestamp = event.params.dungeonTimestamp;
  // entity.name = event.params.name;
  // entity.imageURI = event.params.imageURI;
  // entity.experience = event.params.experience;
  // entity.openSlots = event.params.openSlots;

  // entity.save();