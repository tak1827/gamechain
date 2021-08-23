package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tak1827/gamechain/x/gamechain/types"
	"strconv"
)

// GetBaseNftCount get the total number of TypeName.LowerCamel
func (k Keeper) GetBaseNftCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftCountKey))
	byteKey := types.KeyPrefix(types.BaseNftCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetBaseNftCount set the total number of baseNft
func (k Keeper) SetBaseNftCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftCountKey))
	byteKey := types.KeyPrefix(types.BaseNftCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendBaseNft appends a baseNft in the store with a new id and update the count
func (k Keeper) AppendBaseNft(
	ctx sdk.Context,
	baseNft types.BaseNft,
) uint64 {
	// Create the baseNft
	count := k.GetBaseNftCount(ctx)

	// Set the ID of the appended value
	baseNft.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&baseNft)
	store.Set(GetBaseNftIDBytes(baseNft.Id), appendedValue)

	// Update baseNft count
	k.SetBaseNftCount(ctx, count+1)

	return count
}

// SetBaseNft set a specific baseNft in the store
func (k Keeper) SetBaseNft(ctx sdk.Context, baseNft types.BaseNft) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftKey))
	b := k.cdc.MustMarshalBinaryBare(&baseNft)
	store.Set(GetBaseNftIDBytes(baseNft.Id), b)
}

// GetBaseNft returns a baseNft from its id
func (k Keeper) GetBaseNft(ctx sdk.Context, id uint64) types.BaseNft {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftKey))
	var baseNft types.BaseNft
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBaseNftIDBytes(id)), &baseNft)
	return baseNft
}

// HasBaseNft checks if the baseNft exists in the store
func (k Keeper) HasBaseNft(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftKey))
	return store.Has(GetBaseNftIDBytes(id))
}

// GetBaseNftOwner returns the creator of the
func (k Keeper) GetBaseNftOwner(ctx sdk.Context, id uint64) string {
	return k.GetBaseNft(ctx, id).Creator
}

// RemoveBaseNft removes a baseNft from the store
func (k Keeper) RemoveBaseNft(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftKey))
	store.Delete(GetBaseNftIDBytes(id))
}

// GetAllBaseNft returns all baseNft
func (k Keeper) GetAllBaseNft(ctx sdk.Context) (list []types.BaseNft) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.BaseNft
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBaseNftIDBytes returns the byte representation of the ID
func GetBaseNftIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBaseNftIDFromBytes returns ID in uint64 format from a byte array
func GetBaseNftIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
