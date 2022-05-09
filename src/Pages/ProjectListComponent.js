import Project from "../Components/Project";

const ProjectList = ({ projects }) => {
  return (
    <>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Project project={project} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProjectList;
