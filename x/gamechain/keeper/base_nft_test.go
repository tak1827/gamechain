package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
	"github.com/tak1827/gamechain/x/gamechain/types"
)

func createNBaseNft(keeper *Keeper, ctx sdk.Context, n int) []types.BaseNft {
	items := make([]types.BaseNft, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendBaseNft(ctx, items[i])
	}
	return items
}

func TestBaseNftGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBaseNft(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetBaseNft(ctx, item.Id))
	}
}

func TestBaseNftExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBaseNft(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasBaseNft(ctx, item.Id))
	}
}

func TestBaseNftRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBaseNft(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBaseNft(ctx, item.Id)
		assert.False(t, keeper.HasBaseNft(ctx, item.Id))
	}
}

func TestBaseNftGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBaseNft(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllBaseNft(ctx))
}

func TestBaseNftCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNBaseNft(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetBaseNftCount(ctx))
}
