import React from 'react';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';

const FullProject = ({ loading, project }) => {
  if (loading) return <Loading />;
  if (!project) return <NotFound />;
  return (
    <>
      {project.title}
      <br />
      {project.url}
      <br />
      {project.code}
      <br />
      {project.created}
      <br />
      {project.text}
      <br />
      {project.categories.join(', ')}
    </>
  );
};
export default FullProject;
