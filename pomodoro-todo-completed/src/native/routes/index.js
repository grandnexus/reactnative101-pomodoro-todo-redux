import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

// import DefaultProps from '../constants/navigation';
import AppTheme from '../../theme/variables/platform';

import FocusContainer from '../../containers/focus/Focus';
import FocusComponent from '../components/focus/Focus';

import DashboardContainer from '../../containers/dashboard/Dashboard';
import DashboardComponent from '../components/dashboard/Dashboard';

const Index = (
  <Stack hideNavBar duration={0} gesturesEnabled={false}>
    {/* <Scene key="dashboardHome" component={AuthContainer} Layout={AuthComponent} initial /> */}
    <Scene hideNavBar key="focus" component={FocusContainer} Layout={FocusComponent} initial />
    <Scene hideNavBar key="dashboard" component={DashboardContainer} Layout={DashboardComponent} />
  </Stack>
);

export default Index;
