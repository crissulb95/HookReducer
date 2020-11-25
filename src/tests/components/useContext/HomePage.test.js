import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomePage } from '../../../components/useContext/HomePage';
import { UserContext } from '../../../components/useContext/userContext';

describe('Pruebas en HomePage', () => {

    const user = {
        id:1,
        name : 'Cristian',
        email: 'correo@correo.com'
    }

    const setUser = () => {}

    const wrapper = mount( //shallow solo renderea el componente principal
        //mount deberia hacer el snapshot correctamente pero hay problemas de compatibilidad con react17
    <UserContext.Provider value={{
        user, setUser
    }}>
        <HomePage />
    </UserContext.Provider>
    
    );
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    

});
