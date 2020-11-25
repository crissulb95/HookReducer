const { shallow } = require("enzyme");
const { RealExampleRef } = require("../../components/useRef/RealExampleRef");

describe('Testing en <RealExampleRef />', () => {
    
    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })
    
    test('Debe mostrar el <MultipleCustomHook />', () => {
        
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
    

});
