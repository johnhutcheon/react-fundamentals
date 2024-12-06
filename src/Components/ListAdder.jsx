import { useState } from "react";

const ListAdder = ({ setShowList }) => {
  const [newShow, setNewShow] = useState("");

  console.log(newShow);

  const handleChange = (event) => {
    setNewShow(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowList((currShowList) => {
      return [...currShowList, newShow];
    });
    setNewShow("");
  };

  return (
    <footer>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Next show to watch..."
          type="text"
          id="tvshow"
          onChange={handleChange}
          value={newShow}
        />
        <input type="submit" value="Add to list" />
      </form>
    </footer>
  );
};

export default ListAdder;
