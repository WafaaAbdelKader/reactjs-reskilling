import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UpdateBook from "./UpdateBook";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('UpdateBook component', ()=>{
    const initialState = { books: [] };
    const mockStore = configureStore();
    let store;
    test('render Move to...', ()=>{
        store = mockStore(initialState);
        render( <Provider store={store}><UpdateBook/></Provider>);
        const optionElement= screen.getByText('Move to...',{exact: false});
        expect(optionElement).toBeDefined();
    });
    test('render select option', ()=>{
        store = mockStore(initialState);
        render( <Provider store={store}><UpdateBook book={{'id':'12345'}}/></Provider>);
        expect(screen.getAllByRole('option').length).toBe(5)
    });
    test('select Currently Reading', ()=>{
        store = mockStore(initialState);
        render( <Provider store={store}><UpdateBook book={{'id':'12345'}}/></Provider>);
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', { name: 'Currently Reading' }),
        )
        expect(screen.getByRole('option', { name: 'Currently Reading' }).selected).toBe(true)
    });
});
