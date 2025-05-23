import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1088,
  TESTNET_SEPOLIA = 59902,
  TESTNET_HYPER = 133717
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0x70f51d68D16e8f9e418441280342BD43AC9Dff9f',
  [ChainId.TESTNET_SEPOLIA]: '0x5A9D3157c6818C0f2A4D8Dd44769BB7f1173B5Da',
  [ChainId.TESTNET_HYPER]: '0x562deA71ED8ab1E628b2B0E2729f0B1f772971cF'
}

export const INIT_CODE_HASH = {
  [ChainId.MAINNET]: '0x966d65068a6a30f10fd1fa814258637a34e059081d79daa94f3e2b6cec48e810',
  [ChainId.TESTNET_SEPOLIA]: '0x966d65068a6a30f10fd1fa814258637a34e059081d79daa94f3e2b6cec48e810',
  [ChainId.TESTNET_HYPER]: '0x966d65068a6a30f10fd1fa814258637a34e059081d79daa94f3e2b6cec48e810'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
