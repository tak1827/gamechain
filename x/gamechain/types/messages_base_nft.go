package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateBaseNft{}

func NewMsgCreateBaseNft(creator string, name string, symbol string, supply string, baseuri string) *MsgCreateBaseNft {
	return &MsgCreateBaseNft{
		Creator: creator,
		Name:    name,
		Symbol:  symbol,
		Supply:  supply,
		Baseuri: baseuri,
	}
}

func (msg *MsgCreateBaseNft) Route() string {
	return RouterKey
}

func (msg *MsgCreateBaseNft) Type() string {
	return "CreateBaseNft"
}

func (msg *MsgCreateBaseNft) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBaseNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBaseNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBaseNft{}

func NewMsgUpdateBaseNft(creator string, id uint64, name string, symbol string, supply string, baseuri string) *MsgUpdateBaseNft {
	return &MsgUpdateBaseNft{
		Id:      id,
		Creator: creator,
		Name:    name,
		Symbol:  symbol,
		Supply:  supply,
		Baseuri: baseuri,
	}
}

func (msg *MsgUpdateBaseNft) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBaseNft) Type() string {
	return "UpdateBaseNft"
}

func (msg *MsgUpdateBaseNft) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBaseNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBaseNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBaseNft{}

func NewMsgDeleteBaseNft(creator string, id uint64) *MsgDeleteBaseNft {
	return &MsgDeleteBaseNft{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteBaseNft) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBaseNft) Type() string {
	return "DeleteBaseNft"
}

func (msg *MsgDeleteBaseNft) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBaseNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBaseNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
