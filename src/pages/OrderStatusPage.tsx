import { useGetMyOrders } from "@/api/OrderApi"
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function OrderStatusPage() {
    const {orders, isLoading} = useGetMyOrders();
    if(isLoading){
        return "Loading...";
    }

    if(!orders || orders.length === 0){
        return "No orders found";
    }
  return (
    <div className="space-y-10">
      {orders.map((order)=>(
        <div className="space-y-10 p-10 rounded-lg bg-gray-50">
            <OrderStatusHeader order={order}/>
            <div className="grid gap-10 md:grid-cols-2">
                <OrderStatusDetail order={order}/>
                <AspectRatio ratio={16/5}>
                    <img src={order.restaurant.imageURL} className="rounded-md object-cover h-full w-full" alt="" />
                </AspectRatio>
            </div>

        </div>
      ))}
    </div>
  )
}
