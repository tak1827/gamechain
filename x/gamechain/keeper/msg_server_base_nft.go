package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tak1827/gamechain/x/gamechain/types"
)

func (k msgServer) CreateBaseNft(goCtx context.Context, msg *types.MsgCreateBaseNft) (*types.MsgCreateBaseNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var baseNft = types.BaseNft{
		Creator: msg.Creator,
		Name:    msg.Name,
		Symbol:  msg.Symbol,
		Supply:  msg.Supply,
		Baseuri: msg.Baseuri,
	}

	id := k.AppendBaseNft(
		ctx,
		baseNft,
	)

	return &types.MsgCreateBaseNftResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateBaseNft(goCtx context.Context, msg *types.MsgUpdateBaseNft) (*types.MsgUpdateBaseNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var baseNft = types.BaseNft{
		Creator: msg.Creator,
		Id:      msg.Id,
		Name:    msg.Name,
		Symbol:  msg.Symbol,
		Supply:  msg.Supply,
		Baseuri: msg.Baseuri,
	}

	// Checks that the element exists
	if !k.HasBaseNft(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetBaseNftOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetBaseNft(ctx, baseNft)

	return &types.MsgUpdateBaseNftResponse{}, nil
}

func (k msgServer) DeleteBaseNft(goCtx context.Context, msg *types.MsgDeleteBaseNft) (*types.MsgDeleteBaseNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasBaseNft(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetBaseNftOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBaseNft(ctx, msg.Id)

	return &types.MsgDeleteBaseNftResponse{}, nil
}
