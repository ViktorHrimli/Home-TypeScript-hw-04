import { FC } from "react";
import { IContacts } from "../PhoneBook/PhoneBook";

interface IItemsProps extends IContacts {}

const ContactsItems: FC<IItemsProps> = ({ id, name, number }) => {
  return (
    <li key={id}>
      <p>
        {name}
        <span>{number}</span>
      </p>
    </li>
  );
};

export { ContactsItems };
