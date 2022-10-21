import { useState, FC } from "react";
import { nanoid } from "nanoid";
import { ContactsList } from "../Contacts/Contacts";
import { List } from "../List/List";
import { Filter } from "../Filter/Filter";

type user = {
  id: string;
  name: string;
  number: string;
};

export interface IContacts {
  id: string;
  name: string;
  number: string;
}

export const PhoneBook: FC<{}> = () => {
  const [contacts, setContacts] = useState<IContacts[]>([]);
  const [filter, setFilter] = useState<string>("");

  const handleSubmit = (name: string, number: string): void => {
    const item: user = {
      id: nanoid().toString(),
      name,
      number,
    };
    setContacts((prev) => [...prev, item]);
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <ContactsList onClick={handleSubmit} />
      <List items={contacts} filters={filter} />
      <Filter value={filter} onChange={handleInputChange} />
    </div>
  );
};
