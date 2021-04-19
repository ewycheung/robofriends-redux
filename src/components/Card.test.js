import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const card = shallow(<Card />);

it('expect to render Card component', () => {
    expect(card).toMatchSnapshot();
});