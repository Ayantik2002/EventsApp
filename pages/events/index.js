import EventsPage from "@/src/components/events/events-page";

const eventspage = ({ data }) => {
  return (
    <EventsPage data={ data } />
  );
};

export default eventspage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
