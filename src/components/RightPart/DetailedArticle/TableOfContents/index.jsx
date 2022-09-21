import { useRef } from "react";
import { useEffect, useState } from "react";
// import useHeadingData from "../../../../utils/useHeadingData";
import "./index.css";

/**
 * Outline for each article
 */
export default () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingData();
  useIntersectionObserver(setActiveId);
  return (
    <nav className="my-outline">
      <div className="outline">outline</div>
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

const Headings = ({ headings, activeId }) => (
  <ul className="first">
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul className="second">
            {heading.items.map((child, index) => (
              <li
                key={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {child.title}
                </a>
                {heading.items[index].items.length > 0 && (
                  <ul className="third">
                    {heading.items[index].items.map((grandchild) => (
                      <li
                        key={grandchild.id}
                        className={grandchild.id === activeId ? "active" : ""}
                      >
                        <a
                          href={`#${grandchild.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document
                              .querySelector(`#${grandchild.id}`)
                              .scrollIntoView({
                                behavior: "smooth",
                              });
                          }}
                        >
                          {grandchild.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const useHeadingData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));
    console.log(headingElements);
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);
  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H1") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H2" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
        items: [],
      });
    } else if (
      heading.nodeName === "H3" &&
      nestedHeadings.length > 0 &&
      nestedHeadings[nestedHeadings.length - 1].items.length > 0
    ) {
      nestedHeadings[nestedHeadings.length - 1].items[
        nestedHeadings[nestedHeadings.length - 1].items.length - 1
      ].items.push({
        id,
        title,
      });
    }
    // else if (heading.nodeName === "H4" && nestedHeadings.length > 0) {
    //   nestedHeadings[nestedHeadings.length - 1].items.push({
    //     id,
    //     title,
    //   });
    // } else if (heading.nodeName === "H5" && nestedHeadings.length > 0) {
    //   nestedHeadings[nestedHeadings.length - 1].items.push({
    //     id,
    //     title,
    //   });
    // } else if (heading.nodeName === "H6" && nestedHeadings.length > 0) {
    //   nestedHeadings[nestedHeadings.length - 1].items.push({
    //     id,
    //     title,
    //   });
    // }
  });
  console.log(nestedHeadings);
  return nestedHeadings;
};

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -40% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("h1,h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};
