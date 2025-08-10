import ProjectDetails from "@/components/sections/project/project-details";
import InfoContent from "@/components/shared/info-content";
import PageTitle from "@/components/shared/page-title";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Format slug for display (remove hyphens, capitalize)
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} - Royarch`,
    description: `Learn more about ${title.toLowerCase()}`,
  };
}

const ProjectDetailPage = async ({ params }) => {
  const { slug } = await params;
  return (
    <>
      <InfoContent />
      <PageTitle>
        <h1 className="text-5xl leading-tight font-bold text-white capitalize">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="text-sm leading-6 font-light text-[#CCCCCC]">
          The art of building
        </p>
      </PageTitle>
      <ProjectDetails item={slug} />
    </>
  );
};

export default ProjectDetailPage;
