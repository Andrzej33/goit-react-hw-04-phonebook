import { FilterBox } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterBox>
    <label htmlFor="">Find contacts by name</label>{' '}
    <input type="text" value={value} onChange={onChange} />
  </FilterBox>
);
