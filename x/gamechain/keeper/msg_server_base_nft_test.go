package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/tak1827/gamechain/x/gamechain/types"
)

func TestBaseNftMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateBaseNft(ctx, &types.MsgCreateBaseNft{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestBaseNftMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateBaseNft
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateBaseNft{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateBaseNft{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateBaseNft{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateBaseNft(ctx, &types.MsgCreateBaseNft{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateBaseNft(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestBaseNftMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteBaseNft
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteBaseNft{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteBaseNft{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteBaseNft{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateBaseNft(ctx, &types.MsgCreateBaseNft{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteBaseNft(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
