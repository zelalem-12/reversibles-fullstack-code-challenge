import { FC, ReactElement, } from 'react';
import { NumbersType } from '../types';
import NumberList from './NumberList';

const NumbersList: FC<NumbersType> = ({ numbers }): ReactElement => (
  <div className='nembers_list'>
    {
      numbers.map((num, index) => <NumberList key={index} number={num} />)
    }
  </div>
);

export default NumbersList
