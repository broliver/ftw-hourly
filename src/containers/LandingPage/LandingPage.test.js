import React from 'react';
import renderer from 'react-test-renderer';
import { TestProvider } from '../../util/test-helpers';
import LandingPage from './LandingPage';
import { RoutesProvider } from '../../components';
import routesConfiguration from '../../routesConfiguration';

describe('LandingPage', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      (
        <TestProvider>
          <RoutesProvider routes={routesConfiguration}>
            <LandingPage />
          </RoutesProvider>
        </TestProvider>
      ),
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
