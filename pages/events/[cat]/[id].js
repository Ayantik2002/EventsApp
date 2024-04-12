import EventCard from '@/src/components/events/single-event';
import Image from 'next/image';

const EventPage = ({data}) => {
  // console.log(data[0].image)
  return (
    <EventCard data= { data } />
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import('../../../data/data.json');

  const allPaths = allEvents.map((path)=>{
    return {
      params:{
        cat: path.city,
        id: path.id
      }
    }
  })

  return{
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // console.log(context)
  const id = context.params.id;
  const { allEvents } = await import("../../../data/data.json")

  const eventData = allEvents.find(ev=>(id === ev.id))

  return{
    props:{data: eventData}
  }
}
