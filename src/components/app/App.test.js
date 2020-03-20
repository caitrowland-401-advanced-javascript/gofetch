import React from './node_modules/react';
import App from '.';
import fetchMock from './node_modules/fetch-mock-jest'
import waitForExpect from './node_modules/wait-for-expect';
import { shallow, mount} from './node_modules/enzyme'

describe ('<App />', () => {
  beforeEach(() => { 
    fetchMock.restore()

  })

  it('is alive at application start', () => {
    const app = shallow(<App /> )
    waitForExpect(app.find({ children: 'Get Results'} ).exists())
  })

  it('changes stte on click', async () => {
    const testData = [
      {name: test}
    ]
    fetchMock.getAny({results: testData})
    const app = mount(<App />)
    const button = app.find ('Get Results')
    button.simulate('submit')
    await waitForExpect(() => {
      waitForExpect(app.state('results')).toEqual(testData)
    })
  })
})