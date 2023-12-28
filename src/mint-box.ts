import { BoxMinted as BoxMintedEvent, ItemMinted as ItemMintedEvent, ItemsProcessed as ItemsProcessedEvent } from "../generated/MintBox/MintBox";
import { Box, Item } from "../generated/schema";

export function handleBoxMinted(event: BoxMintedEvent): void {
  let id = event.params.tokenId.toString();
  let entity = new Box(id);
  entity.user = event.params.user;
  entity.tokenId = event.params.tokenId;
  entity.name = event.params.name;
  entity.itemType = event.params.itemType;
  entity.save();
}

export function handleItemMinted(event: ItemMintedEvent): void {
  let id = event.params.itemId.toString();
  let entity = new Item(id);
  entity.user = event.params.user;
  entity.tokenId = event.params.itemId;
  entity.metadata = event.params.metadata;
  entity.save();
}

