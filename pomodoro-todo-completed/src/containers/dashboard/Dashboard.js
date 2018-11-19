import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Dashboard = ({ Layout }) => (
  <Layout />
);

Dashboard.propTypes = {
  Layout: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {};

const mapStateToProps = state => ({
  // portfolios: state.portfolios || {}
});

const mapDispatchToProps = {
  // onFormSubmit: searchAgent,
  // onFormReset: searchAgentReset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
