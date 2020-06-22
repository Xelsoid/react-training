import React from 'react';
import MOCKED_DATA from '@mockedData/MOCKED_DATA';
import { formatIncomingData } from '@utils';
import { Provider } from 'react-redux';
import store from '@store';
import ComponentExample from './index';

describe('FilmDescription test', () => {
  const film = MOCKED_DATA.data[1];
  const defaultProps = formatIncomingData(film);

  it('renders correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <ComponentExample {...defaultProps} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
