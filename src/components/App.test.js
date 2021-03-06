import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App' , () => { 

const app = shallow(<App />);


it('Renders the app correctly' , () =>{
    expect(app).toMatchSnapshot();
});

it('Initializes the state with an empty list of gifts ', () =>{
   expect(app.state().gifts).toEqual([]); 
});

describe('When clicking the `add gift` button', () => {

    const id = 1;

    beforeEach(() => {
        app.find('.btn-add').simulate('click');
    });

    afterEach(() =>{
        app.setState({gifts: []});
    });

    it('It adds a new gift to the `state`', () => { 
        expect(app.state().gifts).toEqual([{
            id
        }]);
    });
    it('Adds a new gift to the rendered list' , () =>{
        expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('It creates a Gift Component' , () =>{
        expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
        
        beforeEach(() => { 
            app.instance().removeGift(id);
        });

        it('removes the gift from `state`', () =>{
            expect(app.state().gifts).toEqual([]);
        });

    });
});

});

