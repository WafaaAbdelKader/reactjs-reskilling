import { render, screen } from "@testing-library/react";
import Shelf from "./Shelf";

describe('Shelf component', ()=>{
    test('render header to be  Read', ()=>{
        render( <Shelf header={'Read'}/>);
        const readHeaderElement= screen.getByText('Read',{exact: false});
        expect(readHeaderElement).toBeDefined();
    });
    test('render  header not  to be Read', ()=>{
        render( <Shelf header={'want to read'}/>);
        const headerElement= screen.getByText('want to read');
        expect(headerElement).toBeDefined();
    });

});
