import CatEvent from "@/src/components/events/catEvent";
import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, city }) => {
  return (
    <CatEvent data={ data } city={ city } />
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");

  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  // console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  // console.log(data);

  return {
    props: {
      data,
      city: id,
    },
  };
}
