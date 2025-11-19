import Top4Banner from "./Top4Banner";

const top4 = [
  {
    image: "/images/Iphone Image.png",
    name: "IPhone 14 Pro",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },
  {
    image: "/images/hero__gnfk5g59t0qe_xlarge_2x 1.png",
    name: "Apple AirPods Max",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },
  {
    image: "/images/image 36.png",
    name: "Apple Vision Pro",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },
  {
    image: "/images/PlayStation.png",
    name: "Playstation 5",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },
  {
    image: "/images/MacBook Pro 14.png",
    name: "Macbook Air",
    description: "qwfwqfqwfqwfqwfqwfqwfqwf",
  },
];

export default function Top4() {
  return (
    <>
      <section>
        {top4.map((item, index) => (
          <Top4Banner
            key={index}
            index={index}
            first={index == 0}
            last={index == top4.length - 1}
            image={item.image}
            name={item.name}
            description={item.description}
          />
        ))}
      </section>
    </>
  );
}
