import { CharacterOwnerChanged as CharacterOwnerChangedEvent } from "../generated/MintItem/MintItem";
import { ItemOwnershipChange } from "../generated/schema";

export function handleCharacterOwnerChanged(event: CharacterOwnerChangedEvent): void {
  let id = event.params.tokenId.toString();
  let entity = new ItemOwnershipChange(id);
  entity.tokenId = event.params.tokenId;
  entity.newOwner = event.params.newOwner;
  entity.save();
}
