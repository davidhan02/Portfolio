import React from 'react';
import Loading from '../shared/Loading';

const Project = ({ loading, project }) => {
  if (loading) return <Loading />;
  if (!project) return <h2>Not Found</h2>;
  return (
    <>
      {project.title}
      <br />
      {project.created}
      <br />
      {project.text}
      <br />
      {project.categories.join(', ')}
    </>
  );
};
export default Project;
