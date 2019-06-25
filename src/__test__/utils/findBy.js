// create function to use enzymeWraper.find() 
export const findByAttribute = (enzymeWrapper, attr) => {
    const wrapper = enzymeWrapper.find(`[data-test='${attr}']`);
    return wrapper;
}