import { mount, shallow } from 'enzyme';
import moxios from 'moxios';
import React from 'react';
import TestExample from '../../../components/testExample/TestExample';

describe('controlled form testExample',()=>{
    let wrapper;
    let mockSubmit;

    beforeEach(()=>{
        mockSubmit=jest.fn();
        wrapper=shallow(<TestExample submit={mockSubmit}/>)
    })
    it('should match the snapshot',()=>{
        expect(wrapper).toMatchSnapshot();
    })
})

describe('handelChange',()=>{
    let wrapper;
    let mockSubmit;

    beforeEach(()=>{
        mockSubmit=jest.fn();
        wrapper=shallow(<TestExample submit={mockSubmit}/>)
    })
    it('should call setState on title',()=>{
        const mockEvent={
            target:{
                name:"title",
                value:'testing Title'
            }
        };
        const expected={
            title: 'testing Title',
            description: '',
            submitActive: false,
            data:[]
        }
        wrapper.instance().handleChange(mockEvent);
        console.log(wrapper.state())
        expect(wrapper.state()).toEqual(expected)
    })

    it('should call checkFields',()=>{
        const spy=jest.spyOn(wrapper.instance(),'checkFields')
        wrapper.instance().forceUpdate();
        const mockEvent={
            target:{
                name:"description",
                value:"testing"
            }
        };
        const expected=true;
        wrapper.instance().handleChange(mockEvent);
        expect(spy).toHaveBeenCalled();
    })

    it('should call handelChange on description change with the correct params',()=>{
        const spy=jest.spyOn(wrapper.instance(),"handleChange");
        wrapper.instance().forceUpdate();
        const mockEvent={
            target:{
                name:"description",
                value:"testing",
            }
        };
        wrapper.find(".description-input").simulate("change",mockEvent)
        expect(spy).toHaveBeenCalledWith(mockEvent);

    })

    it('it should call preventDefault',()=>{
        const mockPreventDefault=jest.fn();
        const mockEvent={
            preventDefault:mockPreventDefault
        };
        console.log("hi",mockPreventDefault);
        console.log("mockevent",mockEvent)
        wrapper.instance().handleSubmit(mockEvent);
        expect(mockPreventDefault).toHaveBeenCalled()
    })
})

describe('fetchapi',()=>{
    let wrapped;
    beforeEach(()=>{
        wrapped=mount(<TestExample></TestExample>)
        // moxios.install();
    })
    afterEach(()=>{
        // moxios.uninstall();
    })
    it('should call a api to get all the comments',()=>{
        let mockResponse=[
            {postId: 1, id: 1, name: "id labore ex et quam laborum", email: "Eliseo@gardner.biz", body: "laudantium enim quasi est quidem magnam voluptate …utem quasi↵reiciendis et nam sapiente accusantium"}
        ]
         const spy=jest.spyOn(wrapped.instance(),"fetchData");
       const fetchButton= wrapped.find('#apifetchData-id').simulate('click');
       expect(fetchButton.length).toEqual(1);
       expect(spy).toBeCalled()
       wrapped.update();
       
       
       
  

        
    })

      
       
        
    })