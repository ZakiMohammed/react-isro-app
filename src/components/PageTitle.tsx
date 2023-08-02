import { IconName } from "../models/IconModel";
import Icon from "./Icon";

const PageTitle = ({ title, icon }: { title: string; icon: IconName }) => {
  return (
    <>
      <article className="prose prose-base max-w-none mb-10">
        <h1 className="mb-0">
          <Icon icon={icon} classes="w-10 -mt-2" /> {title}
        </h1>
      </article>
    </>
  );
};

export default PageTitle;
