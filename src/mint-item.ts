import { ForgeProcessed as ForgeProcessedEvent } from "../generated/MintItem/MintItem";
import { ForgeProcessed } from "../generated/schema";

export function handleForgeProcessed(event: ForgeProcessedEvent): void {
  let entity = new ForgeProcessed(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  entity.user = event.params.user;
  entity.itemId = event.params.itemId;
  entity.uri = event.params.uri;
  entity.successPercentage = event.params.successPercentage;
  entity.random = event.params.random;

  entity.mintedAt = event.block.timestamp;

  entity.save();
}
