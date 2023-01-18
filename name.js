//import LikeButton from "./Onediv";
function nameField() {
  //const LikeButton = require("LikeButton");
  return (
    <div>
      <p className="mb-4">Enter Your name here to see and edit your choice</p>
      <label htmlFor="Name">Name: </label>
      <input
        type="text"
        name=""
        id="name"
        autocomplete="off"
        className="rounded p-3 outline-none text-[#00889a] text-sm h-[30px] font-semibold"
        placeholder="Enter Your Name Here "
      />
      <button className="btn">Show Data</button>
    </div>
  );
}
const nameRoot = document.getElementById("name-field");
const nameRoot1 = ReactDOM.createRoot(nameRoot);
nameRoot1.render(React.createElement(nameField));
