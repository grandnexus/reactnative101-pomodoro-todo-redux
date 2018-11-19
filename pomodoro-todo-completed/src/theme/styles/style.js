import AppTheme from '../variables/platform';

export default {
  // Loading
  loading: {
    view: {
      backgroundColor: AppTheme.brandInfo,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    indicator: { marginBottom: 30 },
    text: {
      textAlign: 'center',
      color: 'white',
      fontSize: 18,
    },
  },
};
