import { render } from "@testing-library/react";
import Search from "./Search";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter as Router } from 'react-router-dom';
describe('Search component', ()=>{
    const initialState = { searchedBooks: [] };
    const mockStore = configureStore();
    let store;
    test('render list elements', async()=>{
        store = mockStore(initialState);
        const { container } = render(<Router><Provider store={store}><Search/></Provider></Router>);
        const listitemElements= await container.getElementsByClassName('search-books-results')
        expect(listitemElements).toBeDefined()
    });
});
