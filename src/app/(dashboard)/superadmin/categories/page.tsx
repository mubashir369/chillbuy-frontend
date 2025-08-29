
import ShopCategoryTable from "@/components/superadmin/ShopCategoryTable";

export const metadata = {
  title: "Chillbuy SuperAdmin - Categories",
  description: "Manage all shop categories in Chillbuy platform",
};

export default function CategoriesPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ShopCategoryTable />
    </div>
  );
}
