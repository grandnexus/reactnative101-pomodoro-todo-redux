import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateTask } from '../../actions/tasks';

const Focus = ({ Layout, tasks, updateTask }) => (
  <Layout tasks={tasks.tasks} updateTask={updateTask} />
);

Focus.propTypes = {
  Layout: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

Focus.defaultProps = {};

const mapStateToProps = state => ({
  tasks: state.tasks || {}
});

const mapDispatchToProps = {
  updateTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Focus);
