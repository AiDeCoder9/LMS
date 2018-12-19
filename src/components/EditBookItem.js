
import React from 'react';


const EditBookItem = (props) => {
  console.log(props);
  return (
    <div>
     you can edit the particular book item with id {props.match.params.id}
    </div>
  )
};

  export default EditBookItem;