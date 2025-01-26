import AddCatalog from "./_components/AddKatalog";
import { AddOpenSheet } from "./_components/AddOpenSheet";
import TableCrud from "./_components/TableCrud";

export default function AdminPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-md shadow-md my-10">
      <AddOpenSheet />
      <TableCrud />
    </div>
  );
}
