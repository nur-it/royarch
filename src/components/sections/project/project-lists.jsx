"use client";

import { portfolioItems } from "@/mocks/projects.mocks";
import { FileWarning } from "lucide-react";
import { useState } from "react";
import ProjectFilterTabSection from "./project-filter-tabs";
import ProjectsLayout from "./projects-layout";

const ProjectLists = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <ProjectFilterTabSection
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <section className="py-6 lg:py-25 2xl:py-[140px]">
        {filteredItems && filteredItems.length ? (
          <ProjectsLayout items={filteredItems} />
        ) : (
          <div className="text-primary py-5 text-center">
            <FileWarning className="mr-2 inline-block" />
            No projects found!
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectLists;
