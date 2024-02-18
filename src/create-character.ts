import { BigInt } from "@graphprotocol/graph-ts";
import { CharacterMinted as CharacterMintedEvent, ExperienceUpdated as ExperienceUpdatedEvent, ExperienceUpdatedWithSlot as ExperienceUpdatedWithSlotEvent } from "../generated/CreateCharacter/CreateCharacter";
import { Character } from "../generated/schema";

export function handleCharacterMinted(event: CharacterMintedEvent): void {
  let entity = new Character(event.params.tokenId.toString());
  entity.user = event.params.user;
  entity.tokenId = event.params.tokenId;
  entity.name = event.params.name;
  entity.imageURI = event.params.imageURI;
  entity.avatarType = event.params.avatarType;
  entity.registrationDate = event.params.registrationDate;

  // Assign a default value for itemSlots if it is null
  entity.itemSlots = event.params.itemSlots ? event.params.itemSlots : BigInt.fromI32(0);
  
  // Assign a default value for experience
  entity.experience = BigInt.fromI32(0);

  // Initialize openSlots as an empty array
  entity.openSlots = [];

  entity.save();
}


export function handleExperienceUpdated(event: ExperienceUpdatedEvent): void {
    let id = event.params.tokenId.toString();
    let character = Character.load(id);
    if (character) {
      character.experience = event.params.totalExperience;
      character.save();
    }
  }
  
  export function handleExperienceUpdatedWithSlot(event: ExperienceUpdatedWithSlotEvent): void {
    let id = event.params.tokenId.toString();
    let character = Character.load(id);
  
    if (character) {
      character.experience = event.params.totalExperience;
  
      let openSlots = character.openSlots as BigInt[] || [];
      openSlots.push(event.params.lastAddedSlot);
      character.openSlots = openSlots;
  
      character.save();
    } 
  }
  