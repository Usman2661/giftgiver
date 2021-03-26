import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('Renders the app correctly' , () =>{
    expect(app).toMatchSnapshot();
});