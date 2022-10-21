import { FC } from "react";

interface IFilterProps {
  value: string;
  onChange: (e: any) => void;
}

const Filter: FC<IFilterProps> = ({ value, onChange }) => {
  return (
    <div>
      <h1>Contacts</h1>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export { Filter };
