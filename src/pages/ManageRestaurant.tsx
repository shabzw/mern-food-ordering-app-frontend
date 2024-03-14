
import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "../components/forms/manage-restaurant-form/ManageRestaurantForm"

export default function ManageRestaurant() {
  const {createRestaurant, isLoading: isCreateLoading} = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const {updateRestaurant, isLoading: isUpdateLoading} = useUpdateMyRestaurant();

  const isEditing = !!restaurant

  return (
   <ManageRestaurantForm restaurant={restaurant} onSave={isEditing?updateRestaurant:createRestaurant} isLoading={isCreateLoading||isUpdateLoading}/>
  )
}