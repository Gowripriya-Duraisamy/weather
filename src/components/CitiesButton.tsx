import { Button, CardContent } from "@mui/material"
import {CITIES} from "../constants"

export const CitiesButton = () => {
    return (
       <CardContent>
        {
            CITIES.map(city => {
                return(<Button key={city.id} onClick={() => {}}>
                    {city.title}
                </Button>)
            })
        }
       </CardContent>
    )
}