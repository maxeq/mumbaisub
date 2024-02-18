import { BigInt } from "@graphprotocol/graph-ts";
import { DungeonResult as DungeonResultEvent } from "../generated/DungeonAdventure/DungeonAdventure";
import {  DungeonResult } from "../generated/schema";


export function handleDungeonResult(event: DungeonResultEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let dayMonthYear = dayMonthYearFromEventTimestamp(event);
  let characterId = event.params.characterId.toString();
  let formattedDate = dayMonthYear.year.toString() + "-" + dayMonthYear.month.toString().padStart(2, '0') + "-" + dayMonthYear.day.toString().padStart(2, '0');
  let id_day = characterId + "-" + formattedDate;

  let entity = DungeonResult.load(id);

  if (!entity) {
    entity = new DungeonResult(id);
    entity.player = event.params.player;
    entity.id_day = id_day;
    entity.characterId = event.params.characterId;
    entity.dungeonTimestamp = event.params.dungeonTimestamp;
    entity.totalLootReward = event.params.lootReward;
    entity.totalExperiences = event.params.experience;
    entity.name = event.params.name;
    entity.imageURI = event.params.imageURI;
    entity.characterCreationDate = event.params.characterCreationDate;
    entity.dungeonDate = event.block.timestamp;
    if (event.params.success) {
      entity.totalSuccess = BigInt.fromI32(1);
      entity.totalUnsuccess = BigInt.fromI32(0);
    } else {
      entity.totalSuccess = BigInt.fromI32(0);
      entity.totalUnsuccess = BigInt.fromI32(1);
    }
  }

  if (event.params.success) {
    entity.totalSuccess = entity.totalSuccess.plus(BigInt.fromI32(1));
    entity.totalLootReward = entity.totalLootReward.plus(event.params.lootReward);
  } else {
    entity.totalUnsuccess = entity.totalUnsuccess.plus(BigInt.fromI32(1));
  }

  entity.totalExperiences = entity.totalExperiences.plus(event.params.experience);

  entity.save();
}

class DayMonthYear {
  day: BigInt;
  month: BigInt;
  year: BigInt;

  constructor(day: BigInt, month: BigInt, year: BigInt) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const SECONDS_IN_DAY: i32 = 86400; // Количество секунд в сутках
const ZERO: BigInt = BigInt.fromI32(0);
const ONE: BigInt = BigInt.fromI32(1);

export function dayMonthYearFromEventTimestamp(event: DungeonResultEvent ): DayMonthYear {
  let unixEpoch: BigInt = BigInt.fromI32(event.block.timestamp.toI32());

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
  
  return new DayMonthYear(day, month, year);
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