import { mount, shallow } from 'enzyme';
import moxios from 'moxios';
import React from 'react';
import TestExample from '../../../components/testExample/TestExample';
import {server,rest} from '../../../components/utils/TestServer'; 

import {convert} from '../../../components/utils/Currency';






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
            data:{},
            data2:{}
        }
        wrapper.instance().handleChange(mockEvent);
       // console.log(wrapper.state())
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

    // describe('fetchapi',()=>{
    // let wrapped;
    // jest.mock('axios',()=>{
    //     return{
    //         __esModule:true,
    //         default:jest.fn()
    //     }
    // })
   
    // beforeEach(()=>{
    //     wrapped=mount(<TestExample></TestExample>)
    //     // moxios.install();
    // })
    // afterEach(()=>{
    //     // moxios.uninstall();
    // })
    // it('should call a api to get all the comments',(done)=>{
    //     let mockResponse={
    //         status: "200"
    //     }
    //     const axios=require('axios');
    //     jest.spyOn(axios,'default').mockResolvedValue(mockResponse)
    //     wrapped.instance().fetchData()
    //     process.nextTick(()=>{
    //         //expect(wrapped.state('error')).toBeFalsy();
    //        // console.log("DATA",wrapped.state().data2)
    //         expect(wrapped.state('data2'))
    //        done();
    //     })
          
    // //      const spy=jest.spyOn(wrapped.instance(),"fetchData");
    // //    const fetchButton= wrapped.find('#apifetchData-id').simulate('click');
    // //    expect(fetchButton.length).toEqual(1);
    // //    expect(spy).toBeCalled()
    // //    wrapped.update();

    // // expect(wrapped.state().data).toHaveProperty("date")

      
  

        
    // })

    //   it('onclikc should call api and change the state',()=>{
    //     const spyon=jest.spyOn(wrapped.instance(),"fetchData")
    //     //console.log(spyon)
    //     const response=wrapped.instance().fetchData();
    //     expect(spyon).toHaveBeenCalled();
    //     const fetchButton=wrapped.find('#apifetchData-id')
    //    expect(fetchButton.length).toBe(1);
    //    fetchButton.simulate('click');
    //    wrapped.update();
    //    //console.log(wrapped.state())
         
    //   })
       
        
    // })

    describe('api call with mock server and response',()=>{
       
        it('convert correctly',async ()=>{
          const rate=await convert("USD","CAD");
          expect(rate).toEqual(1.42)
     
        })
        it('handels fails while api call',async()=>{
            server.use(rest.get('https://api.exchangeratesapi.io/latest',(req,res,ctx)=>{
                return res(ctx.status(404))
            })
            )
            expect(convert("FAIL","CAD")).rejects.toThrow("404")
        })

          
     
    })

    describe('onclick call the convert api',()=>{
        let wrapper;
        let mockSubmit;
    
        beforeEach(()=>{
            wrapper=shallow(<TestExample />)
        })
        test('onclikc button call the method',async()=>{
            const fetchButton=wrapper.find('#apifetchData-id')
            fetchButton.simulate('click');
            const rate=await convert('USD','CAD');
            wrapper.update();
           // const spyon=jest.spyOn(wrapper.instance(),"fetchData")
           // expect(spyon).toHaveBeenCalled();
           
           console.log(rate);
           expect(rate).toEqual(1.42)

            
        })
        
    })