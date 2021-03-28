import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


    const app = shallow(<App />);


it('Renders the app correctly' , () =>{
    expect(app).toMatchSnapshot();
});

it('Initializes the state with an empty list of gifts ', () =>{
   expect(app.state().gifts).toEqual([]); 
});

it('It adds a new gift to the `state` when clicking on the `add gift` button', () => { 
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{
        id:1
    }]);
});
it('Adds a new gift to the rendered list when clicking the `add gift` button' , () =>{
    app.find('.btn-add').simulate('click');
    expect(app.find('.gift-list').children().length).toEqual(2);
});