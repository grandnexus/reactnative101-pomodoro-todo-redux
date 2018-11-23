import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Focus = ({ Layout }) => (
  <Layout />
);

Focus.propTypes = {
  Layout: PropTypes.func.isRequired,
};

Focus.defaultProps = {};

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
)(Focus);
