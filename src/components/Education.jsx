import "../App.css";

// React-Vertical-Timeline-Component Library Imports
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "../../node_modules/react-vertical-timeline-component/dist-modules/";
import timelineElements from "./data.ts";
import "../../node_modules/react-vertical-timeline-component/style.min.css";

// Import Icons
import { BiWorld } from "react-icons/bi";

const Education = () => {
  return (
    <div className="full">
      <VerticalTimeline lineColor={"#a1f598"} >
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              iconStyle={{
                backgroundColor: "slateblue",
                alignContent: "center",
                textAlign: "center",
              }}
              contentStyle={{
                backgroundColor: "#d1cffa",
              }}
              contentArrowStyle={{
                borderRightColor: "#22333b",
              }}
              icon={<BiWorld />}
            >
              <h3 className="heading">{element.title}</h3>
              <h5 className="subHeading">{element.location}</h5>
              <p className="description">{element.description}</p>
              <h5 className="score">{element.score}</h5>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Education;

