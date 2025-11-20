import { top4 } from "@/utils/top4";
import Top4Banner from "./Top4Banner";

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
