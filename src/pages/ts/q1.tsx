type Human = {
  name: string;
  age: number;
  method: string;
};

type Duck = {
  name: string;
};

type HtoD = Human extends Duck ? 'yes' : 'no';
type DtoH = Duck extends Human ? 'yes' : 'no';

type A = 'x' | 'y' extends 'y' ? 'yes' : 'no';
type B = { name: string; age: number } extends { name: string } ? 'yes' : 'no';

type A1<T> = T extends 'x' ? 'yes' : 'no';
type C = A1<'x'>;

type TupleO2N<T extends number, U extends number[] = []> = U['length'] extends T
  ? U
  : TupleO2N<T, [...U, U['length']]>;

type A2 = TupleO2N<1>;
type A3 = TupleO2N<2>;

type Tuple2N<T extends number, U extends number[] = []> = U['length'] extends T
  ? U
  : Tuple2N<T, [...U, U['length']]>;
