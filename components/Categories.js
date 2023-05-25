import React, { useEffect } from 'react'
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard'
import { useState } from 'react'
// import { getCategories } from '../services/api';


const Categories = () => {
    // const [categories, setCategories] = useState([])
    // useEffect(() => {
    //     getCategories().then(data => {
    //         setCategories(data)
    //     }).catch(err => console.log(err))
    //   }, [])

    //   console.log(categories);


    return (
        <ScrollView 
            contentContainerStyle={{
                paddingTop: 15
            }}
            horizontal 
            showsHorizontalScrollIndicator={false}>
            <CategoryCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_upF9cgyXK9fYh85mVV-ZEYKw04JcTzUjLw&usqp=CAU" title="Burger" selected={true}/>
            <CategoryCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cDvvQ0oPzCcZdHL6LG2YPt1hcEIjU17mMg&usqp=CAU" title="Pizza" selected={false}/>
            <CategoryCard img="https://photos.smugmug.com/Africa/Eritrea/Asmara/i-Z9D6SR5/0/93341e18/L/Canva%20-%20Injera%20be%20wot%2C%20traditional%20Ethiopian%20Food-min-L.jpg" title="Habesha" selected={false}/>
            <CategoryCard img="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/01/chips-ketchup-Fast-food-liver-disease-1296x728-header-1024x575.png?w=1155&h=1528" title="Fast Foods" selected={false}/>
            <CategoryCard img="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/17244-caramel-topped-ice-cream-dessert-760x580.jpg?ext=.jpg" title="Deserts" selected={false}/>
        </ScrollView>
  )
}

export default Categories