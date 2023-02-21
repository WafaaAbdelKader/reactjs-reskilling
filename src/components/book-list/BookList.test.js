import { render, screen } from "@testing-library/react";
import BookList from "./BookList";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter as Router } from 'react-router-dom';
describe('BookList component', ()=>{
    const initialState = { books: [] };
    const mockStore = configureStore();
    let store;
    test('render My Reads', async()=>{
        store = mockStore(initialState);
        render(<Router><Provider store={store}><BookList/></Provider></Router>);
        const myReadsElements= await screen.findByText('My Reads', {exact: false})
        expect(myReadsElements).toBeDefined()
    });
    test('render loading element', ()=>{
        store = mockStore(initialState);
        render(<Router><Provider store={store}><BookList/></Provider></Router>);
        const loadingElements= screen.getByText('Loading ......', {exact: false})
        expect(loadingElements).toBeDefined()
    });
});
