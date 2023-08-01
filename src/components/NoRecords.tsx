const NoRecords = ({ filtered }: { filtered: any[] | null }) => {
  return (
    <>
      {filtered && filtered.length === 0 && (
        <div className="text-slate-500">😮 No Records Found</div>
      )}
    </>
  );
};

export default NoRecords;
