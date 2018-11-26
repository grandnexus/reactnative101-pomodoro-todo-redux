import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addTask, updateTask, deleteTask } from '../../actions/tasks';

const Dashboard = ({ Layout }) => (
  <Layout
  // fill in the blanks
  />
);

Dashboard.propTypes = {
  Layout: PropTypes.func.isRequired,
  // fill in the blanks
};

Dashboard.defaultProps = {};

const mapStateToProps = state => ({
  // fill in the blanks
});

const mapDispatchToProps = {
  // fill in the blanks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
