import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addTask, updateTask, deleteTask } from '../../actions/tasks';

const Dashboard = ({ Layout, tasks, addTask, updateTask, deleteTask }) => (
  <Layout
    tasks={tasks.tasks}
    addTask={addTask}
    updateTask={updateTask}
    deleteTask={deleteTask}
  />
);

Dashboard.propTypes = {
  Layout: PropTypes.func.isRequired,
  tasks: PropTypes.shape({}).isRequired,
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

Dashboard.defaultProps = {};

const mapStateToProps = state => ({
  tasks: state.tasks || {}
});

const mapDispatchToProps = {
  addTask,
  updateTask,
  deleteTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
