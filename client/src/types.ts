import { ChangeEvent } from 'react'


interface NumberType {
    number: number
}
interface NumbersType {
    numbers: number[]
}

interface FormType {
    value: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type {
    NumberType,
    NumbersType,
    FormType
}