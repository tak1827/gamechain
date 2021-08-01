# gamechain
Gaming blockchain using CosmoWasm

**gamechain** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/tak1827/gamechain@latest! | sudo bash
```
`tak1827/gamechain` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)

# escrow tutorial
```
// exports
export APP_HOME=./.chaindata/
export RPC=http://localhost:26657
export CHAIN_ID=localnet
export NODE=(--node $RPC)
export TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.001ucosm --gas auto --gas-adjustment 1.3)

// init
gamechaind init localnet --chain-id ${CHAIN_ID} --home ${APP_HOME}
gamechaind keys add main $KEYRING --home ./.chaindata
gamechaind keys add validator $KEYRING --home ./.chaindata
gamechaind add-genesis-account main 10000000000ucosm,10000000000stake --home ${APP_HOME}
gamechaind add-genesis-account validator 10000000000ucosm,10000000000stake --home ${APP_HOME}
gamechaind gentx validator 1000000000stake --home ${APP_HOME} --chain-id ${CHAIN_ID}
gamechaind collect-gentxs --home ${APP_HOME}
gamechaind validate-genesis --home ${APP_HOME}
gamechaind start --home ${APP_HOME}

// upload
gamechaind query wasm list-code $NODE
export RES=$(gamechaind tx wasm store .artifacts/cw_escrow.wasm --from main $TXFLAG -y --home ${APP_HOME})
export CODE_ID=$(echo $RES | jq -r '.logs[0].events[0].attributes[-1].value')
gamechaind query wasm list-contract-by-code $CODE_ID $NODE --output json

// init
INIT=$(jq -n --arg main $(gamechaind keys show -a main --home ${APP_HOME}) --arg validator $(gamechaind keys show -a validator --home ${APP_HOME}) '{"arbiter":$main,"recipient":$validator}')
gamechaind tx wasm instantiate $CODE_ID "$INIT" \
    --from main --amount=50000ucosm  --label "escrow 1" $TXFLAG -y --home ${APP_HOME}
gamechaind query wasm list-contract-by-code $CODE_ID $NODE --output json
export CONTRACT=$(gamechaind query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')
gamechaind query wasm contract $CONTRACT $NODE
gamechaind query bank balances $CONTRACT $NODE
gamechaind query wasm contract-state all $CONTRACT $NODE
gamechaind query wasm contract-state raw $CONTRACT 0006636f6e666967 $NODE --hex

// execute
export APPROVE='{"approve":{"quantity":[{"amount":"50000","denom":"ucosm"}]}}'
gamechaind query bank balances $(gamechaind keys show validator -a --home ${APP_HOME}) $NODE
gamechaind tx wasm execute $CONTRACT "$APPROVE" \
    --from main $TXFLAG -y --home ${APP_HOME}
gamechaind query bank balances $CONTRACT $NODE
```
# Note

wasmd query wasm --help
gamechaind query gamechain --help

