import { BoxMinted as BoxMintedEvent, ItemsProcessed as ItemsProcessedEvent } from "../generated/MintBox/MintBox";
import { Box, Item } from "../generated/schema";

export function handleBoxMinted(event: BoxMintedEvent): void {
  let id = event.params.tokenId.toString();
  let entity = new Box(id);
  entity.user = event.params.user;
  entity.tokenId = event.params.tokenId;
  entity.mintedAt = event.block.timestamp;
  entity.save();
}

export function handleItemsProcessed(event: ItemsProcessedEvent): void {
  let itemIds = event.params.itemIds;
  let uris = event.params.uris;

  for (let i = 0; i < itemIds.length; i++) {
    let itemId = itemIds[i].toString();
    let item = Item.load(itemId);
    if (!item) {
      item = new Item(itemId);
    }

    item.user = event.params.user;
    item.tokenId = itemIds[i];
    item.metadata = uris[i];
    item.mintedAt = event.block.timestamp;
    item.save();
  }
}