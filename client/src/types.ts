import { ChangeEvent, KeyboardEvent } from "react";

interface NumberType {
  number: number;
}

interface ContentType {
  number: string;
}
interface NumbersType {
  numbers: number[];
}

interface ResponseType {
  count: number;
  numbers: Array<number>;
}
interface FormType {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export type { NumberType, NumbersType, FormType, ResponseType, ContentType };
