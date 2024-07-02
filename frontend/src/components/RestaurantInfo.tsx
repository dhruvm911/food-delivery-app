import { Restaurant } from "@/types";

type Props = {
    restaurant: Restaurant;
};

const RestaurantInfo = ({}: Props) => {
    return (
        <Card className = "border-sla">
            <CardHeader>
                <CardTitle className = "text-3xl font-bold tracking-tight">
                    {restaurant.restaurantName}
                </CardTitle>
                <CardDescription>
                    {restaurant.city}, {restaurant.country}
                </CardDescription>
            </CardHeader>
            <CardContent className = "flex">
                {restaurant.cuisines.map((item, index) => (
                    <span className = "flex">
                        <span>{item}</span>
                        {index < restaurant.cuisines.length -1 && <Dot />}
                    </span>
                ))}
            </CardContent>
        </Card>
    )
};

export default RestaurantInfo;