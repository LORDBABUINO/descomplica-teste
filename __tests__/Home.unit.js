import React from 'react'
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'

import Home from '../src/pages/Home'

configure({ adapter: new Adapter() })

describe('Home', () => {
  it('should have 10 Characters Components', () => {
    const home = mount(<Home />)
    expect(home.find('Character').length).toEqual(10)
  })
})
