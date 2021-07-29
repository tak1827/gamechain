package keeper

import (
	"github.com/tak1827/gamechain/x/gamechain/types"
)

var _ types.QueryServer = Keeper{}
