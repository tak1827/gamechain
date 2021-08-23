package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/tak1827/gamechain/x/gamechain/types"
)

func CmdCreateBaseNft() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-base-nft [name] [symbol] [supply] [baseuri]",
		Short: "Create a new baseNft",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsSymbol, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsSupply, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsBaseuri, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateBaseNft(clientCtx.GetFromAddress().String(), argsName, argsSymbol, argsSupply, argsBaseuri)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateBaseNft() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-base-nft [id] [name] [symbol] [supply] [baseuri]",
		Short: "Update a baseNft",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsName, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsSymbol, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsSupply, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			argsBaseuri, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateBaseNft(clientCtx.GetFromAddress().String(), id, argsName, argsSymbol, argsSupply, argsBaseuri)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteBaseNft() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-base-nft [id]",
		Short: "Delete a baseNft by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteBaseNft(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
