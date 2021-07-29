build:
	starport chain build

run:
	gamechaind start --pruning nothing --grpc.address :9090 --home ./.chaindata --log_level warn

init:
	rm -rf ./.chaindata/
	gamechaind init gamechain --chain-id gamechain --home ./.chaindata
# 	gamechaind config keyring-backend test --home ./.chaindata
# 	gamechaind config chain-id scavenge --home ./.chaindata
# 	gamechaind config output json --home ./.chaindata
# 	gamechaind config indent true --home ./.chaindata
# 	gamechaind config trust-node true --home ./.chaindata
	gamechaind keys add alice --home ./.chaindata
	gamechaind keys add bob --home ./.chaindata
	gamechaind keys add tom --home ./.chaindata
	gamechaind add-genesis-account alice 400000000mtc --home ./.chaindata
	gamechaind add-genesis-account bob 200000000mtc --home ./.chaindata
	gamechaind add-genesis-account tom 500mtc --home ./.chaindata
	gamechaind gentx alice 100000000mtc --keyring-backend test --chain-id gamechain --home ./.chaindata --commission-rate 0.0 --commission-max-rate 0.1
#	gamechaind collect-gentxs --home ./.chaindata
