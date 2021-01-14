import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../../../components/commentBox/CommentBox';
import Root from '../../../Root';


let wrapped;


beforeEach(()=>{
    wrapped=mount(
        <Root>
            <CommentBox />
        </Root>
        )
});

afterEach(()=>{
    //component cleanup after every test complete
    wrapped.unmount();
})

it('has a text area and a button',()=>{

//asserting element existance in a component
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
})

describe('TextArea',()=>{

    it('has a text area that user can type in',()=>{
        wrapped.find('textarea').simulate('change',{
            target:{value:'new review',name:'review'}
        })
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new review')
    
         //find the textarea -------  wrapped.find('textarea'
        //simulate a change event --- simulate()
        //provide a fake event object-simulate('change',{
            //target:{value:'new review'}
       //})
        //force the component to update-wrapped.update();
        //assert that the textareas value has changed
    })
    it('fullname should be a string only',()=>{
        wrapped.find('#fullname').simulate('change',{
            target:{value:'amritapanda',name:'fullname'}
        })
        wrapped.update();
        expect(wrapped.find('#fullname').prop('value')).toEqual('amritapanda')
        expect(wrapped.find('#fullname').prop('value')).toBeTruthy();
    })

    it('email should be in this format',()=>{
        wrapped.find('#email').simulate('change',{
            target:{value:'amritapanda43@gmail.com',name:'email'}
        })
        wrapped.update();
        expect(wrapped.find('#email').prop('value')).toEqual('amritapanda43@gmail.com')
        expect(wrapped.find('#email').prop('value')).toBeTruthy();
    })

    it('the dropdown select',()=>{
        wrapped.find('#list').simulate('change',{
            target:{value:'list1',name:'list'}
        })
        wrapped.update();
        expect(wrapped.find('#list').prop('value')).toEqual('list1')
        expect(wrapped.find('#list').prop('value')).toBeTruthy();
    })

    it('radio button',()=>{
        wrapped.find('#radio').simulate('change',{
            target:{value:true,name:'radio'}
        })
        wrapped.update();
        expect(wrapped.find('#radio').prop('value')).toEqual(true)
        expect(wrapped.find('#radio').prop('value')).toBeTruthy();
    })


    it('when is submited textarea gets empty',()=>{
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual("");
       // expect(wrapped.find('textarea').prop('value')).toBeTruthy();
    
    })
}) 

describe('fetchapi',()=>{
    it('should call a api to get all the comments',()=>{
        wrapped.find('#apifetchData-id').simulate('click');
        wrapped.update();
       // expect(wrapped.status()).toEqual();
        


        // const fetchApi=jest.spyOn(React,'setState');
        // fetchApi.mockImplementation(size=>[size,fetchData])
        // wrapped.find('#apifetchData-id').simulate('click');
        // expect(fetchData).toBeTruthy();

      
       
        
    })

    it('trying to debug the app',()=>{
        //it checks if the component is a honest componet
        expect(wrapped).toBeTruthy();
    })
})

