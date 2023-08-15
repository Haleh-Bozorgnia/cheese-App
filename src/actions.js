// import { baseUrl } from './base_url';
// import { redirect } from 'react-router-dom';
// export const createAction =async ({request}) => {
//     const formData = await request.formData()
//     const newCheese = {
//       name: formData.get("name"),
//       countryOfOrigin: formData.get("countryOfOrigin"),
//       image: formData.get("image")
//     }
//     await fetch(`${baseUrl}/cheese`, {
//         method : 'post',
//         headers:{
//             "content-Type":"application/json"
//         },
//         body: JSON.stringify(newCheese)
//     })
//     return redirect('/')
// };
// //////
// // export const updateAction = async ({ request, params }) => {
// //   try {
// //     // grab the id from the params
// //     const id = params.id
// //     // grab the data from the form
// //     const formData = await request.formData()
// //     // build out the updated note object
// //     const updatedCheese = {
// //       name: formData.get("name"),
// //       countryOfOrigin: formData.get("countryOfOrigin"),
// //       image: formData.get("image")
// //     };
// //     // send the updated note to our backend API
// //     await fetch(`${baseUrl}/cheese/${id}`, {
// //       // tell fetch to make a put request
// //       method: "PUT",
// //       // tell backend the data is JSON
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       // send the json string of the updatedNoteobject
// //       body: JSON.stringify(updatedCheese),
// //     });
// //     // redirect back to index frontend route
// //     return redirect(`/${id}`)
// //   } catch (error) {
// //     console.error("Error updating note... Fix me!");
// //     // Handle the error as appropriate for your application
// //   }
// // };

// export const updateAction = async ({ request, params }) => {
//   // grab the id from the params
//   const id = params.id;
//   // grab the data from the form
//   const formData = await request.formData();
//   // build out the updated person
//   const updatedCheese = {
//     name: formData.get("name"),
//     countryOfOrigin: formData.get("countryOfOrigin"),
//     image: formData.get("image")
//   };
//   // send the updated cheese to our backend API
//   await fetch(`${baseUrl}/cheese/${id}`, {
//     // tell fetch to make a put request
//     method: 'PUT',
//     // teel backend the data is JSON
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // send the json string of the updatedPerson object
//     body: JSON.stringify(updatedCheese),
//   });
//   // redirect back to show page frontend route
//   return redirect(`/`);
// };


// //delete
// export const deleteAction = async ({ params }) => {
//   try {
//     // grab the id from the params
//     const id = params.id
//     // send a delete request to our backend API
//     await fetch(`${baseUrl}/cheese/${id}`, {
//       // tell fetch to make a delete request
//       method: "DELETE",
//       // no headers or body required for delete requests
//     })
//     // redirect back to the frontend index route
//     return redirect("/")
//   } catch (error) {
//     console.error("Error deleting note... Fix me!")
//     // Handle the error as appropriate for your application
//   }
// };

// the url for our backend server
import { baseUrl } from "./base_url";
// function allows use to redirect to other routes
import { redirect } from "react-router-dom";

export const createAction = async ({ request }) => {
  try {
    // get data from form
    
    const formData = await request.formData();
    // match schema from backend
    const newCheese = {
      name: formData.get("name"),
      countryOfOrigin: formData.get("countryOfOrigin"),
      image: formData.get("image")
    };
    // send the new note to our backend API
    await fetch(`${baseUrl}/cheese`, {
      // tell fetch to make a post request
      method: "POST",
      headers: {
        // tells our backend the data is JSON
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCheese),
    });
    // redirect to index
    return redirect("/")
  } catch (error) {
    console.error("Error creating note... Fix me!");
    // Handle the error as appropriate for your application
  }
}

export const updateAction = async ({ request, params }) => {
  try {
    // grab the id from the params
    const id = params.id;
    // grab the data from the form
    const formData = await request.formData();
    // build out the updated note object
    const updatedCheese = {
      name: formData.get("name"),
      countryOfOrigin: formData.get("countryOfOrigin"),
      image: formData.get("image"),
    };
    // send the updated note to our backend API
    await fetch(`${baseUrl}/cheese/${id}`, {
      // tell fetch to make a put request
      method: "put",
      // tell backend the data is JSON
      headers: {
        "Content-Type": "application/json",
      },
      // send the json string of the updatedNoteobject
      body: JSON.stringify(updatedCheese),
    });
    // redirect back to index frontend route
    return redirect("/")
  } catch (error) {
    console.error("Error updating note... Fix me!");
    // Handle the error as appropriate for your application
  }
}

export const deleteAction = async ({params}) => {
  try {
    // grab the id from the params
    const id = params.id
    // send a delete request to our backend API
    await fetch(`${baseUrl}/cheese/${id}`, {
      // tell fetch to make a delete request
      method: "DELETE",
      // no headers or body required for delete requests
    });
    // redirect back to the frontend index route
    return redirect('/')
  } catch (error) {
    console.error("Error deleting note... Fix me!");
    // Handle the error as appropriate for your application
  }
}