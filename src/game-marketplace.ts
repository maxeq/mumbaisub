import { Upgraded as UpgradedEvent, ItemBought as ItemBoughtEvent, ItemListed as ItemListedEvent, PriceChanged as PriceChangedEvent, ListingCancelled as ListingCancelledEvent } from "../generated/GameMarketplace/GameMarketplace"
import { ItemBought, ItemListed, ListingCancelled, PriceChanged, Upgraded } from "../generated/schema"
import { store } from '@graphprotocol/graph-ts'

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


export function handleItemListed(event: ItemListedEvent): void {
  let id = event.params.nftAddress.toHexString() + '-' + event.params.tokenId.toString();
  let entity = new ItemListed(id);

  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.seller = event.params.seller;
  entity.price = event.params.price;
  entity.itemTokenIds = event.params.itemTokenIds;

  // Add these new fields
  entity.itemType = event.params.itemType;
  entity.power = event.params.power;
  entity.durability = event.params.durability;
  entity.characterOwner = event.params.characterOwner;
  entity.imageUrl = event.params.imageUrl;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  
  entity.save();
}



export function handleListingCancelled(event: ListingCancelledEvent): void {
  let id = event.params.nftAddress.toHexString() + '-' + event.params.tokenId.toString();

  // Remove the ItemListed entity
  store.remove('ItemListed', id);

  // Create a new ListingCancelled entity (if needed)
  let entity = new ListingCancelled(id);
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.save();
}


export function handlePriceChanged(event: PriceChangedEvent): void {
  let id = event.params.nftAddress.toHexString() + '-' + event.params.tokenId.toString();
  // Fetch the existing ItemListed entity
  let entity = ItemListed.load(id);
  if (entity == null) {
    // Handle the case where the entity doesn't exist if needed
    return;
  }
  // Update the price of the listed item
  entity.price = event.params.newPrice;
  // Save the updated entity
  entity.save();
}

export function handleItemBought(event: ItemBoughtEvent): void {
  let id = event.params.nftAddress.toHexString() + '-' + event.params.tokenId.toString();
  let entity = new ItemBought(id);

  // Remove the ItemListed entity
  store.remove('ItemListed', id);

  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.buyer = event.params.buyer;
  entity.price = event.params.price;

  // Add these new fields if they exist in the event
  entity.itemType = event.params.itemType;
  entity.power = event.params.power;
  entity.durability = event.params.durability;
  entity.characterOwner = event.params.characterOwner;
  entity.imageUrl = event.params.imageUrl;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  
  entity.save();
}
