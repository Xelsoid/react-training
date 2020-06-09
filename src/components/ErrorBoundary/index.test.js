import React from 'react';
import ComponentExample from './index';

const EmptyComponent = () => null;
const NotEmptyComponent = () => <span>Not Empty</span>;

describe('ErrorBoundary test', () => {
  it('renders correctly no error happened', () => {
    const component = shallow(<ComponentExample><NotEmptyComponent /></ComponentExample>);
    expect(component).toMatchSnapshot();
  });
  it('renders correctly error happened ', () => {
    const component = shallow(<ComponentExample><EmptyComponent /></ComponentExample>);
    const error = new Error('error happened');
    component.find(EmptyComponent).simulateError(error);
    expect(component).toMatchSnapshot();
  });
});
