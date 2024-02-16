import BaseInput from "../Shared/BaseInput";
import { Fragment } from "react";
const InfoProfile = () => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 w-full">
      <Fragment key="First And Last Name">
        <BaseInput
          label="First Name"
          type="text"
          placeholder="First Name"
          id="text"
        />
        <BaseInput
          label="Last Name"
          type="text"
          placeholder="Last Name"
          id="text"
        />
      </Fragment>
      <Fragment key="Email And Address">
        <BaseInput label="Email" type="email" placeholder="Email" id="email" />
        <BaseInput
          label="Phone Number"
          type="number"
          placeholder="Phone Number"
          id="text"
        />
      </Fragment>
      <BaseInput
        label="Adresse"
        type="text"
        placeholder="Last Name"
        id="text"
        classNames="col-span-2"
      />
      <Fragment key="Email And Address">
        <BaseInput label="City" type="text" placeholder="City" id="text" />
        <BaseInput
          label="Zip Code"
          type="number"
          placeholder="Zip Code"
          id="text"
        />
      </Fragment>
    </div>
  );
};

export default InfoProfile;
