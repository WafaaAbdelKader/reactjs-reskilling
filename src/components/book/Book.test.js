import { render, screen } from "@testing-library/react";
import Book from "./Book";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
describe('Book component', ()=>{
    const initialState = { books: [] };
    const mockStore = configureStore();
    let store;
    test('render header to be  Read', ()=>{
        store = mockStore(initialState);
        render(<Provider store={store}><Book book={{title: 'test', authors:'author_name'}}/></Provider>);
        const readHeaderElement= screen.getByText('test',{exact: false});
        expect(readHeaderElement).toBeDefined();
    });
    test('render  header not  to be Read', ()=>{
        store = mockStore(initialState);
        render(<Provider store={store}><Book book={{title: 'test', authors:'author_name'}}/></Provider>);
        const headerElement= screen.getByText('author_name',{exact: false});
        expect(headerElement).toBeDefined();
    });

});
