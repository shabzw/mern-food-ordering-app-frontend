
import { useCreateMyRestaurant, useGetMyRestaurant, useGetMyRestaurantOrders, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "../components/forms/manage-restaurant-form/ManageRestaurantForm"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItemCard from "../components/OrderItemCard";

export default function ManageRestaurant() {
  const {orders, isLoading: isOrderLoading} = useGetMyRestaurantOrders();
  const {createRestaurant, isLoading: isCreateLoading} = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const {updateRestaurant, isLoading: isUpdateLoading} = useUpdateMyRestaurant();

  const isEditing = !!restaurant

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">
          Orders
        </TabsTrigger>
        <TabsTrigger value="manage-restaurant">
          Manage Restaurant
        </TabsTrigger>
      </TabsList>
      <TabsContent value="orders" className="space-y-5 bg-gray-50 p-10 rounded-lg">
        {Array.isArray(orders) && orders.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold">{orders.length} active orders</h2>
            {orders.map((order, index) => (
              <OrderItemCard key={index} order={order} />
            ))}
          </>
        ) : (
          <p>No orders available</p>
        )}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        {restaurant !== null && restaurant !== undefined && (
          <ManageRestaurantForm 
            restaurant={restaurant} 
            onSave={isEditing ? updateRestaurant : createRestaurant} 
            isLoading={isCreateLoading || isUpdateLoading || isOrderLoading}
          />
        )}
        {!restaurant && (
          <ManageRestaurantForm 
          restaurant={restaurant} 
          onSave={isEditing ? updateRestaurant : createRestaurant} 
          isLoading={isCreateLoading || isUpdateLoading || isOrderLoading}
        />
        )}
      </TabsContent>
    </Tabs>
  );
  
}