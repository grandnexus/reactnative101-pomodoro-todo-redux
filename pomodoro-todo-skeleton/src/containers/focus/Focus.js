import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateTask } from '../../actions/tasks';

const Focus = ({ Layout }) => (
  <Layout
  // fill in the blanks
  />
);

Focus.propTypes = {
  Layout: PropTypes.func.isRequired,
  // fill in the blanks
};

Focus.defaultProps = {};

const mapStateToProps = state => ({
  // fill in the blanks
});

const mapDispatchToProps = {
  // fill in the blanks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Focus);
