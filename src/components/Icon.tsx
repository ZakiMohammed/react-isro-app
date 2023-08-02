import { IconModel, IconName } from '../models/IconModel';

import rocket from './../assets/icons/rocket.png';
import launcher from './../assets/icons/launcher.png';
import satellite from './../assets/icons/satellite.png';
import centre from './../assets/icons/centre.png';
import house from './../assets/icons/house.png';
import heart from './../assets/icons/heart.png';
import faceWithOpenMouth from './../assets/icons/face-with-open-mouth.png';

const getPath = (icon: IconName): string => {
  switch (icon) {
    case 'rocket':
      return rocket;
    case 'launcher':
      return launcher;
    case 'satellite':
      return satellite;
    case 'centre':
      return centre;
    case 'house':
      return house;
    case 'heart':
      return heart;
    case 'face-with-open-mouth':
      return faceWithOpenMouth;
    default:
      return '';
  }
};

const Icon = ({ icon, classes, alt }: IconModel) => {
  return (
    <>
      {getPath(icon) && (
        <img
          src={getPath(icon)}
          alt={alt}
          className={`inline m-0 ${classes ? classes : ''}`}
        />
      )}
    </>
  );
};

export default Icon;
