const Project = ({ project: { id, name, group } }) => {
  return (
    <>
      <h2>{`${id} - ${name}`}</h2>
      <p>{group}</p>
    </>
  );
};

export default Project;
