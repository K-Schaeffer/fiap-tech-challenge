import Image from 'next/image'
import { Grid2, Typography } from "@mui/material";

interface CardsProps {
    imgPathName: string,
    title: string,
    description: string
}

export default function FCard({ imgPathName, title, description }: CardsProps) {
    return (
        <Grid2 container size={{ xs: 12, sm: 6, md: 3 }} component="div" alignItems="center" direction="column">
            <Image src={`/assets/${imgPathName}.svg`} alt={`${imgPathName}`} width="64" height="64" />
            <Typography variant='h6' align='center' fontWeight="bold" color='#47A138'>{title}</Typography>
            <Typography variant='body2' align='center' color='#767676'>{description}</Typography>
        </Grid2>
    )
}