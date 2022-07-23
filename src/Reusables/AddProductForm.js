import React from 'react'

const AddProductForm = () => {


    let options = [{
        option:'Mens',
        subCategory: [
            'Shoes',
            'Watch',
            'Shirts',
            'Jackets',
            
        ]
    }];



    return (
        <div>
            <form>
            <input
              type="file"
              name="image-upload"
              id="input-image"
              accept="image/*"
            //   onChange={handleImage}
              required="true"
            />
            <div>
                <label>Product Name</label>
                <input type="text" name="productname"  />
            </div>
            <div>
                <label>Category</label>
                <select name="category">
                    
                </select>
            </div>
            </form>
        </div>
    )
}

export default AddProductForm;
