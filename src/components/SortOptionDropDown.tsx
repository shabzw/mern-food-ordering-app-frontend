import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

type Props = {
    onChange: (value: string) => void;
    sortOption: string;
}

const SORT_OPTIONS =[
    {
        label: "Best match",
        value: "bestmatch"
    },
    {
        label: "Delivery Price",
        value: "deliveryPrice"
    },
    {
        label: "Estimated delivery time",
        value: "estimatedDeliveryTime"
    }
]

const SortOptionDropDown = ({onChange, sortOption}: Props) => {

    const selectedSortlabel = SORT_OPTIONS.find((option)=> option.value === sortOption)?.label || SORT_OPTIONS[0].label
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <Button variant="outline" className="w-full">
                    Sort by: {selectedSortlabel}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {SORT_OPTIONS.map((option)=>(
                    <DropdownMenuItem className="cursor-pointer" onClick={()=>onChange(option.value)}>
                        {option.label}

                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SortOptionDropDown