const PageTitle = ({ title }: { title: string }) => {
  return (
    <>
      <article className="prose prose-base max-w-none mb-10">
        <h1 className="mb-0">{title}</h1>
      </article>
    </>
  );
};

export default PageTitle;
