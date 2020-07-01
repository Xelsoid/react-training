import React from 'react';
import { FETCH_HANDLERS } from '@root/src/services/constants';
import ComponentExample from './index';

describe('FetchResult test', () => {
  const ChildExample = () => (<h1> Child test component </h1>);

  it('component doesnt render', () => {
    const component = mount(<ComponentExample />);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly Loading', () => {
    const component = mount(
      <ComponentExample
        loading={{ [FETCH_HANDLERS.MOVIE]: true }}
        handlerId={FETCH_HANDLERS.MOVIE}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly Error', () => {
    const component = mount(
      <ComponentExample
        error={{ [FETCH_HANDLERS.MOVIE]: true }}
        handlerId={FETCH_HANDLERS.MOVIE}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly Child component', () => {
    const component = mount(
      <ComponentExample>
        <ChildExample />
      </ComponentExample>,
    );
    expect(component).toMatchSnapshot();
  });
});
