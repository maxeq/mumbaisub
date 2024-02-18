import { DungeonResult as DungeonResultEvent } from "../generated/DungeonAdventure/DungeonAdventure";
import { Character, DungeonResult } from "../generated/schema";

export function handleDungeonResult(event: DungeonResultEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let entity = new DungeonResult(id);

  let characterId = event.params.characterId.toString();
  let character = Character.load(characterId);
  if (character === null) {
    // Обработка случая, если персонаж еще не был создан
    character = new Character(characterId);
    // Установите начальные значения для персонажа, если необходимо
    character.save();
  }

  entity.name = character.name;
  entity.experience = character.experience;
  
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

  entity.save();
}
