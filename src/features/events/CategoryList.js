import categoryData from "../../data/category.json"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,selectSearchParam } from "./GlobalSlice";


const CategoryList = () => {
   
    const [clicked, setClicked] = useState(false);
    const [activated, setactivated] = useState(false);
    
   

    const searchParam = useSelector(selectSearchParam);
    console.log("catergory init........."+searchParam.keyword);
   
    const dispatch = useDispatch();

    const handleCategoryLinkClick = (category) => {
        
        dispatch(addTodo({"field":"category","val":category}));
    }

    const toggle = index => {
        if (clicked === index) {
          //if clicked question is already active, then close it
          setactivated(false);
          return setClicked(false);
        }
        setactivated(true);
        setClicked(index);
      };

     
    const categoryContent = categoryData.map((catg,index) => {
       
        return ( 
        
            <li className={`${clicked===index ? "on" : "off"}`}   key={catg.catName} ><button onClick={() => toggle(index)}>{catg.catName}</button>
                
                {clicked===index ?
                <ul>
                {
                    catg.subCategory.map((item) => {

                        return <li key={item} ><Link onClick={() => handleCategoryLinkClick(item)} to={`/events/${searchParam.keyword}/${searchParam.location}/${item}`}>{item}</Link></li>
                    })
                }
                </ul>
                : null }
        </li> 
        )
   });

    return(
        <ul  className={`category-list ${activated ? "on":""}`} >
         {categoryContent}
        </ul>
    )

}

export default CategoryList;