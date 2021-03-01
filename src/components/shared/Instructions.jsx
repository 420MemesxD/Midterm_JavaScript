import React from 'react';

const Instructions = () => {
  const doneIt = e => {
    if (e.target.checked)
      e.target.parentElement.classList.add("list-group-item-success");
    else
      e.target.parentElement.classList.remove("list-group-item-success");
  };

  return (
    <>
      <h2>Instructions</h2>
      <hr/>

      <header className="bg-dark bg-gradient p-4 rounded-sm my-5">
        <p className="h5 text-white">
          If you can see this list (rendered in your browser) then you have completed steps 1, 2, 3, and 4 of your midterm! Now you can follow the remaining instructions below:
        </p>
      </header>
          
      <ul className="list-group">
        {[
          "Add the Data component to the Routes",
          "Using the following provided API link, use Axios to fetch the data and store it in a state variable",
          "Create a table that will display the data. If your data has more than 4 headings, limit it to just 4",
          "Logic Based Question: Integrate either the existing sort or filter functionality. The sort function is considerably easier to get working than the filter function. Bonus marks if you do both.",
          "Push your code to Github",
          "Deploy your code to Netlify"
        ].map((inst, i) => (
          <li key={i} className="list-group-item">
            <input type="checkbox" className="mr-3" onChange={doneIt}/>
            { inst }
          </li>
        ))}
      </ul>
    </>
  );
}
 
export default Instructions;