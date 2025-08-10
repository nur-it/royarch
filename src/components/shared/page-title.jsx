const PageTitle = ({ children }) => {
  return (
    <div className="page_title_background pt-[200px] pb-25 text-center">
      <div className="container_fluid">{children}</div>
    </div>
  );
};

export default PageTitle;
