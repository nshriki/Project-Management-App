# Project-Management-App
ITE 308 Check: Activity - Building a Product Management App with React

The goal of this activity is to practice using and in React. You will learn how to pass data between components, display dynamic lists, and implement conditional rendering. By the end of the activity, you should be able to build a simple Product Management App.

Organize your project into the following structure:
- App.jsx
- ProductManager.jsx
- ProductItem.jsx

Each of these files will hold specific components for the app.
- : This component will manage and display a list of products. It will receive a list of products as a props.
- Your component should:
- Accept a list of products. Each product should have an , , , and .
- Display a list of products dynamically using the data passed as props.
- Add functionality to based on their . Include a button that allows the user to toggle between:
- Showing .
- Showing only .
- : This component will display the details of a single product.
- Your component should:
- Accept props such as ,name ,price and .
- Display the product’s name and price.
- Display a badge indicating whether the product is in-stock  out-stock or  or based on the status user have provided.
- Apply conditional rendering: use different styles or colors for in-stock and out-of-stock products (e.g., a green badge for “In - Stock” and a red badge for “Out of Stock”).
- : This is where you’ll tie everything together.
- In the file:
- Create a with details like ID, Name, Price, and Stock Status.
- Pass this list as a prop to the component.
- Ensure that the component renders the list correctly.
- Add a button in the component to toggle between displaying:

Ensure that the list updates when the user clicks the button.

- Create a form within to allow users to .
- The form should include input fields for the , , and of the product.
- Upon submitting the form, add the new product to the list and display it dynamically.
- Use to style your components.
- Add card-like layouts for products and apply hover effects, spacing, and padding for a polished look.
- Style the “In Stock” and “Out of Stock” badges with distinct colors (e.g., green for “In Stock” and red for “Out of Stock”).
- Once you’ve completed the activity:
- Test your app to ensure all functionality works as expected (e.g., filtering and form submission).
- Push your code to a GitHub repository.
- Share the link to the repository for review.

By the end of this activity, you should have.

- A React app that can manage and display a list of products.
- A dynamic product list with filtering functionality.
- A product form to add new products.
- A styled interface using Tailwind CSS.

Happy coding! 😊
