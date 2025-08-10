"use client";

import { portfolioItems } from "@/mocks/projects.mocks";
import { useState } from "react";
import GalleryModal from "./gallery-modal";

const ProjectDetailRow = ({ label, value, isLast }) => {
  if (!value) return null;

  return (
    <div className={`flex ${!isLast ? "border-darker border-b" : ""}`}>
      <div className="bg-darker w-40 px-4 py-3 font-semibold text-white">
        {label}
      </div>
      <div className="text-15 flex-1 px-4 py-3 leading-[26px] font-[300] text-white">
        {value}
      </div>
    </div>
  );
};

const ImageGallery = ({ images, title, onImageClick }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="aspect-square cursor-pointer overflow-hidden"
          onClick={() => onImageClick?.(image, index)}
        >
          <img
            src={image}
            alt={`${title} - Image ${index + 1}`}
            className="h-full w-full scale-110 object-cover object-top transition-transform duration-300 hover:scale-100"
          />
        </div>
      ))}
    </div>
  );
};

const ProjectDetails = ({ item }) => {
  const [imageError, setImageError] = useState(false);
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  // Filter the project by slug and return the matched object
  const project = portfolioItems.find((project) => project.slug === item);

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  // Get dynamic values with fallbacks
  const title =
    project?.title || project?.name || "Give your dreams a shape of reality";
  const client = project?.client || "Royarch Architecture";
  const category = project?.category
    ? project?.subcategory
      ? `${project.category}, ${project.subcategory}`
      : `${project.category}, exterior`
    : "Architecture, exterior";
  const date = project?.date || "01 June, 2021";
  const url = project?.url || "www.fabric-lab.co";

  // Get descriptions
  const primaryDescription =
    project?.fullDescription ||
    project?.description ||
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.`;

  const secondaryDescription =
    project?.secondaryDescription ||
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`;

  // Get additional images - Filter out empty strings and null values
  const additionalImages = (
    project?.additionalImages ||
    project?.gallery ||
    project?.screenshots ||
    []
  ).filter((image) => image && image.trim() !== "");

  // Project details configuration
  const projectDetails = [
    { label: "CLIENT", value: client },
    { label: "CATEGORY", value: category },
    { label: "DATE", value: date },
    { label: "URL", value: url },
  ];

  // Handle image click - Updated to open modal with validation
  const handleImageClick = (image, index) => {
    // Validate image source before opening modal
    if (!image || image.trim() === "") {
      console.warn("Invalid image source provided");
      return;
    }

    setSelectedImage(image);
    setSelectedTitle(`${title} - Image ${index + 1}`);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
    setSelectedTitle("");
  };

  // If no project found, show error message
  if (!project) {
    return (
      <section className="py-16 xl:py-[140px]">
        <div className="container_fluid">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4 text-2xl font-bold text-white">
                Project Not Found
              </h1>
              <p className="text-gray-400">
                The requested project could not be found.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 xl:py-[140px]">
        <div className="container_fluid">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="mb-6 text-[25px] leading-[25px] font-bold text-white">
                  {title}
                </h1>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="border-darker border">
                    {projectDetails.map((detail, index) => (
                      <ProjectDetailRow
                        key={detail.label}
                        label={detail.label}
                        value={detail.value}
                        isLast={index === projectDetails.length - 1}
                      />
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-8 space-y-4 leading-relaxed text-gray-300">
                  <p>{primaryDescription}</p>
                  <p>{secondaryDescription}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Main Image */}
            <div className="space-y-6">
              <div className="aspect-square overflow-hidden">
                {!imageError && project.image ? (
                  <img
                    src={project.image}
                    alt={title}
                    className="h-full w-full object-cover object-top"
                    onError={handleImageError}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center border border-gray-700 bg-gray-800">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-slate my-8 h-px w-full" />

          {/* Additional Images Gallery */}
          <div>
            <ImageGallery
              images={additionalImages}
              title={title}
              onImageClick={handleImageClick}
            />
          </div>
        </div>
      </section>

      {/* Image Modal - Only render if we have a valid selected image */}
      {selectedImage && (
        <GalleryModal
          isOpen={modalOpen}
          imageSrc={selectedImage}
          title={selectedTitle}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ProjectDetails;
