import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

// import DefaultProps from '../constants/navigation';
import AppTheme from '../../theme/variables/platform';

import DashboardContainer from '../../containers/dashboard/Dashboard';
import DashboardComponent from '../components/dashboard/Dashboard';

const Index = (
  <Stack hideNavBar duration={0} gesturesEnabled={false}>
    {/* <Scene key="dashboardHome" component={AuthContainer} Layout={AuthComponent} initial /> */}
    <Scene hideNavBar key="dashboard">
      <Scene key="portfolios" component={DashboardContainer} Layout={DashboardComponent} />
    </Scene>
  </Stack>
);

export default Index;
