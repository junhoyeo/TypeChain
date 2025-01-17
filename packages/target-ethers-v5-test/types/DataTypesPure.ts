/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type Struct1Struct = {
  uint256_0: BigNumberish;
  uint256_1: BigNumberish;
};

export type Struct1StructOutput = [BigNumber, BigNumber] & {
  uint256_0: BigNumber;
  uint256_1: BigNumber;
};

export interface DataTypesPureInterface extends utils.Interface {
  functions: {
    "pure_address()": FunctionFragment;
    "pure_bool()": FunctionFragment;
    "pure_bytes()": FunctionFragment;
    "pure_bytes1()": FunctionFragment;
    "pure_enum()": FunctionFragment;
    "pure_int256()": FunctionFragment;
    "pure_int8()": FunctionFragment;
    "pure_named()": FunctionFragment;
    "pure_stat_array()": FunctionFragment;
    "pure_string()": FunctionFragment;
    "pure_struct()": FunctionFragment;
    "pure_tuple()": FunctionFragment;
    "pure_uint256()": FunctionFragment;
    "pure_uint8()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "pure_address",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_bool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_bytes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_bytes1",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_enum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_int256",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_int8", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_named",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_stat_array",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_string",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_struct",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_tuple",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_uint256",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_uint8",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "pure_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_bool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pure_bytes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_bytes1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_enum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_int256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_int8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pure_named", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_stat_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pure_string",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pure_struct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_tuple", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_uint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_uint8", data: BytesLike): Result;

  events: {};
}

export interface DataTypesPure extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DataTypesPureInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    pure_address(overrides?: CallOverrides): Promise<[string]>;

    pure_bool(overrides?: CallOverrides): Promise<[boolean]>;

    pure_bytes(overrides?: CallOverrides): Promise<[string]>;

    pure_bytes1(overrides?: CallOverrides): Promise<[string]>;

    pure_enum(overrides?: CallOverrides): Promise<[number]>;

    pure_int256(overrides?: CallOverrides): Promise<[BigNumber]>;

    pure_int8(overrides?: CallOverrides): Promise<[number]>;

    pure_named(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
    >;

    pure_stat_array(
      overrides?: CallOverrides
    ): Promise<[[number, number, number]]>;

    pure_string(overrides?: CallOverrides): Promise<[string]>;

    pure_struct(overrides?: CallOverrides): Promise<[Struct1StructOutput]>;

    pure_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    pure_uint256(overrides?: CallOverrides): Promise<[BigNumber]>;

    pure_uint8(overrides?: CallOverrides): Promise<[number]>;
  };

  pure_address(overrides?: CallOverrides): Promise<string>;

  pure_bool(overrides?: CallOverrides): Promise<boolean>;

  pure_bytes(overrides?: CallOverrides): Promise<string>;

  pure_bytes1(overrides?: CallOverrides): Promise<string>;

  pure_enum(overrides?: CallOverrides): Promise<number>;

  pure_int256(overrides?: CallOverrides): Promise<BigNumber>;

  pure_int8(overrides?: CallOverrides): Promise<number>;

  pure_named(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
  >;

  pure_stat_array(overrides?: CallOverrides): Promise<[number, number, number]>;

  pure_string(overrides?: CallOverrides): Promise<string>;

  pure_struct(overrides?: CallOverrides): Promise<Struct1StructOutput>;

  pure_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  pure_uint256(overrides?: CallOverrides): Promise<BigNumber>;

  pure_uint8(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    pure_address(overrides?: CallOverrides): Promise<string>;

    pure_bool(overrides?: CallOverrides): Promise<boolean>;

    pure_bytes(overrides?: CallOverrides): Promise<string>;

    pure_bytes1(overrides?: CallOverrides): Promise<string>;

    pure_enum(overrides?: CallOverrides): Promise<number>;

    pure_int256(overrides?: CallOverrides): Promise<BigNumber>;

    pure_int8(overrides?: CallOverrides): Promise<number>;

    pure_named(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
    >;

    pure_stat_array(
      overrides?: CallOverrides
    ): Promise<[number, number, number]>;

    pure_string(overrides?: CallOverrides): Promise<string>;

    pure_struct(overrides?: CallOverrides): Promise<Struct1StructOutput>;

    pure_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    pure_uint256(overrides?: CallOverrides): Promise<BigNumber>;

    pure_uint8(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    pure_address(overrides?: CallOverrides): Promise<BigNumber>;

    pure_bool(overrides?: CallOverrides): Promise<BigNumber>;

    pure_bytes(overrides?: CallOverrides): Promise<BigNumber>;

    pure_bytes1(overrides?: CallOverrides): Promise<BigNumber>;

    pure_enum(overrides?: CallOverrides): Promise<BigNumber>;

    pure_int256(overrides?: CallOverrides): Promise<BigNumber>;

    pure_int8(overrides?: CallOverrides): Promise<BigNumber>;

    pure_named(overrides?: CallOverrides): Promise<BigNumber>;

    pure_stat_array(overrides?: CallOverrides): Promise<BigNumber>;

    pure_string(overrides?: CallOverrides): Promise<BigNumber>;

    pure_struct(overrides?: CallOverrides): Promise<BigNumber>;

    pure_tuple(overrides?: CallOverrides): Promise<BigNumber>;

    pure_uint256(overrides?: CallOverrides): Promise<BigNumber>;

    pure_uint8(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    pure_address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_bool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_bytes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_bytes1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_enum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_int256(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_int8(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_named(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_stat_array(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_string(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_struct(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_tuple(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_uint256(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pure_uint8(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
