import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductCard = (props) => {
    const [tempWeight, setTempWeight] = useState(0)
    const weightHandler = (isAddType) => {
        if (isAddType)
            setTempWeight(prev => Number(prev) + 1)
        else
            setTempWeight(prev => Number(prev) - 1)

        // // : use to rename variable
        // let { weight: props.itemWeight } = props.item
        // // both can be corret way todo line: 9,11
        // if (isAddType) {
        //     props.itemWeight += 1
        // } else {
        //     props.itemWeight--
        // }
        // let temp = { ...props.item, weight: props.itemWeight }
        // let otherprops.items = props.items.filter((x) => x.id != props.item.id)
        // props.setprops.items([...otherprops.items, temp])
    }

    useEffect(() => {
        setTempWeight(props.item.weight)
    }, [props.item])
    return (
        <Card sx={{ minWidth: 275, margin: "1rem" }}>
            <CardContent sx={{ borderBottom: "0.5px solid grey", marginBottom: "12px" }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.item.title}
                </Typography>
                <Typography variant="body2">
                    {props.item.desc}
                </Typography>
            </CardContent>

            <Typography>
                <Button size="small" variant='outlined' onClick={() => weightHandler(1)}>+</Button>{tempWeight}<Button size="small" variant='outlined' onClick={() => weightHandler(0)}>-</Button>
            </Typography>
            <CardActions>
                <Button size="small" onClick={() => props.edit_handler(props.item.id)}>Edit</Button>
                <Button size="small" color="warning" onClick={() => props.delete_handler(props.item.id)}>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
