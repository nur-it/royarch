"use client";

import { portfolioItems } from "@/mocks/projects.mocks";
import { useState } from "react";
import ProjectFilterTabSection from "./project-filter-tabs";
import ProjectsLayout from "./projects-layout";

const ProjectLists = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackToPortfolio = () => {
    setSelectedItem(null);
  };

  if (selectedItem) {
    return (
      <PortfolioDetails item={selectedItem} onBack={handleBackToPortfolio} />
    );
  }
  return (
    <>
      <ProjectFilterTabSection
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <section className="py-[140px]">
        {filteredItems && filteredItems.length ? (
          <ProjectsLayout items={filteredItems} onItemClick={handleItemClick} />
        ) : (
          <div className="text-center text-white">No projects found</div>
        )}
      </section>
    </>
  );
};

export default ProjectLists;
