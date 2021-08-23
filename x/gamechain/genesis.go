package gamechain

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/tak1827/gamechain/x/gamechain/keeper"
	"github.com/tak1827/gamechain/x/gamechain/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the baseNft
	for _, elem := range genState.BaseNftList {
		k.SetBaseNft(ctx, *elem)
	}

	// Set baseNft count
	k.SetBaseNftCount(ctx, genState.BaseNftCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all baseNft
	baseNftList := k.GetAllBaseNft(ctx)
	for _, elem := range baseNftList {
		elem := elem
		genesis.BaseNftList = append(genesis.BaseNftList, &elem)
	}

	// Set the current count
	genesis.BaseNftCount = k.GetBaseNftCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
