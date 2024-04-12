import Link from "next/link";
import Image from "next/image";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
          <a className="card">
            <Image src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;
