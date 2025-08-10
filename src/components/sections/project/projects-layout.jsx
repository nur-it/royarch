import ProjectCard from "./project-card";

const ProjectsLayout = ({ items, onItemClick }) => {
  return (
    <div className="container_fluid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {items.map((item, index) => (
        <div key={`${item.id}-${index}`}>
          <ProjectCard
            item={item}
            delay={index * 100}
            onItemClick={onItemClick}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsLayout;
