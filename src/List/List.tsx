import { FC } from "react";
import { IContacts } from "../PhoneBook/PhoneBook";
import { ContactsItems } from "../ContactsItems/ContactsItems";

interface IListProps {
  items: IContacts[];
  filters: string;
}

export const List: FC<IListProps> = ({ items, filters }) => {
  const itemsFilterList =
    items.filter((items) =>
      items.name.toLowerCase().includes(filters.toLowerCase())
    ) ?? [];
  return (
    <div>
      <ul>
        {itemsFilterList.map((item) => (
          <ContactsItems key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
