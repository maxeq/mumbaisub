import { DungeonResult as DungeonResultEvent } from "../generated/DungeonAdventure/DungeonAdventure";
import { DungeonResult } from "../generated/schema";

export function handleDungeonResult(event: DungeonResultEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let entity = new DungeonResult(id);

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
}
