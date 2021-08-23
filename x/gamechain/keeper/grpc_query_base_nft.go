package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/tak1827/gamechain/x/gamechain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BaseNftAll(c context.Context, req *types.QueryAllBaseNftRequest) (*types.QueryAllBaseNftResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var baseNfts []*types.BaseNft
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	baseNftStore := prefix.NewStore(store, types.KeyPrefix(types.BaseNftKey))

	pageRes, err := query.Paginate(baseNftStore, req.Pagination, func(key []byte, value []byte) error {
		var baseNft types.BaseNft
		if err := k.cdc.UnmarshalBinaryBare(value, &baseNft); err != nil {
			return err
		}

		baseNfts = append(baseNfts, &baseNft)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBaseNftResponse{BaseNft: baseNfts, Pagination: pageRes}, nil
}

func (k Keeper) BaseNft(c context.Context, req *types.QueryGetBaseNftRequest) (*types.QueryGetBaseNftResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var baseNft types.BaseNft
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasBaseNft(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BaseNftKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetBaseNftIDBytes(req.Id)), &baseNft)

	return &types.QueryGetBaseNftResponse{BaseNft: &baseNft}, nil
}
