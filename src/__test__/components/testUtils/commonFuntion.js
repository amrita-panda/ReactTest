import checkPropTypes from 'check-prop-types';

/**
 * 
 * @param {*} wrapper-a component 
 * @param {*} val -value selectors
 */
export const findByTestAttr =(wrapper,val) =>{
 return  wrapper.find(`[data-test="${val}"]`)
}

export const checkProps =(component,confirmingProps)=>{
    const propError=checkPropTypes(component.propTypes,confirmingProps,'prop',component.name)
    expect(propError).toBeUndefined();
}