import { useState } from "react";
import ListAdder from "./ListAdder";

const TVList = () => {
  const [showList, setShowList] = useState(["Succession", "Limmy's Show", "Inside No.9"]
  );

  return (
    <section>
      <ul>
        {showList.map((tvShow) => {
          return <li key={tvShow}>{tvShow}</li>;
        })}
      </ul>
      <ListAdder setShowList={setShowList} />
    </section>
  );
};

export default TVList;
