import React from 'react';
import Select from 'react-select';

const options = [
  {value: 'price', label: 'Sort By Price'},
  {value: 'title', label: 'Sort By Title'},
  {value: 'rate', label: 'Sort By Rate'},
];

class Sort extends React.Component {
  render() {
    return(
        <Select
          defaultValue={options[0]}
          className="sort" 
          options={options}
        />
    );
  }
}

export default Sort;