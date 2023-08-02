import Icon from "./Icon";

const NoRecords = ({ filtered }: { filtered: any[] | null }) => {
  return (
    <>
      {filtered && filtered.length === 0 && (
        <div className="text-slate-500"><Icon icon="face-with-open-mouth" classes="w-4 -mt-1" />  No Records Found</div>
      )}
    </>
  );
};

export default NoRecords;
