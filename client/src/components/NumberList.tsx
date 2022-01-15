import { FC, ReactElement, } from 'react';
import { NumberType } from '../types';
const NumbersList: FC<NumberType> = ({ number }): ReactElement => (
    <div className='nuber_list'>{number}</div>
);

export default NumbersList;