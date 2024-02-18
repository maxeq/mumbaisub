import { BigInt, log } from "@graphprotocol/graph-ts";
import { DungeonResult as DungeonResultEvent } from "../generated/DungeonAdventure/DungeonAdventure";
import { CharacterDailySummary, DungeonResult } from "../generated/schema";


export function handleDungeonResult(event: DungeonResultEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let entity = DungeonResult.load(id);

  if (!entity) {
    entity = new DungeonResult(id);
  }

  // Set the properties of the entity based on the event parameters
  entity.player = event.params.player;
  entity.characterId = event.params.characterId;
  entity.success = event.params.success;
  entity.message = event.params.message;
  entity.winChance = event.params.winChance;
  entity.randomValue = event.params.randomValue;
  entity.burnedItems = event.params.burnedItems;
  entity.itemPower = event.params.itemPower;
  entity.randomNormalized = event.params.randomNormalized;
  entity.characterCreationDate = event.params.characterCreationDate;
  entity.lootReward = event.params.lootReward;
  entity.dungeonTimestamp = event.params.dungeonTimestamp;
  entity.name = event.params.name;
  entity.imageURI = event.params.imageURI;
  entity.experience = event.params.experience;
  entity.openSlots = event.params.openSlots;

  entity.save();

  let characterId = event.params.characterId.toString();
  let date = event.block.timestamp;
  let id_day = characterId + "-" + date.toString();

  let dailySummary = CharacterDailySummary.load(id_day);

  if (!dailySummary) {
    dailySummary = new CharacterDailySummary(id_day);
    dailySummary.characterId = event.params.characterId;
    dailySummary.dungeonTimestamp = event.params.dungeonTimestamp;
    dailySummary.totalLootReward = BigInt.fromI32(0);
    dailySummary.totalExperiences = BigInt.fromI32(0);
    dailySummary.totalSuccess = BigInt.fromI32(0);
    dailySummary.totalUnsuccess = BigInt.fromI32(0);
    dailySummary.name = event.params.name;
    dailySummary.imageURI = event.params.imageURI;
    dailySummary.characterCreationDate = event.params.characterCreationDate;
    dailySummary.dungeonDate = event.block.timestamp;
  }

  if (event.params.success) {
    dailySummary.totalSuccess = dailySummary.totalSuccess.plus(BigInt.fromI32(1));
    dailySummary.totalLootReward = dailySummary.totalLootReward.plus(event.params.lootReward);
  } else {
    dailySummary.totalUnsuccess = dailySummary.totalUnsuccess.plus(BigInt.fromI32(1));
  }

  dailySummary.totalExperiences = dailySummary.totalExperiences.plus(event.params.experience);

  dailySummary.save();
}
