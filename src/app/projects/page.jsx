import ProjectLists from "@/components/sections/project/project-lists";
import InfoContent from "@/components/shared/info-content";
import PageTitle from "@/components/shared/page-title";

export const metadata = {
  title: "Projects - Royarch",
};

const ProjectsPage = () => {
  return (
    <>
      <InfoContent />
      <PageTitle>
        <h1 className="text-[50px] leading-[60px] font-bold text-white">
          Portfolio
        </h1>
        <p className="text-15 leading-[26px] font-[300] text-[#CCCCCC]">
          The modern architect with innovation
        </p>
      </PageTitle>
      <ProjectLists />
    </>
  );
};

export default ProjectsPage;
