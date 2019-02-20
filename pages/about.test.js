/* eslint-env jest */

import React from 'react'
import { render } from 'enzyme'
import 'jest-styled-components'

import About from './about.js'
jest.mock('../services').getTodo // eslint-disable-line

describe('With Snapshot Testing', () => {
  it('About page gets correct data', async () => {
    const res = await About.getInitialProps({})
    expect(res).toMatchSnapshot()
  })
  it('About page shows "About" H1', () => {
    const wrapper = render(<About />)
    expect(wrapper).toMatchSnapshot()
  })
})
