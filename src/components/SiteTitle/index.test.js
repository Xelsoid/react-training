import React from 'react';
import ComponentExample from './index';

describe('SiteTitle test', () => {
  it('renders correctly', () => {
    const component = shallow(<ComponentExample />);
    expect(component).toMatchSnapshot();
  });
});
