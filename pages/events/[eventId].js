import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventLogistics from "../../components/event-detail/event-logistics";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <div>
        <p>{event.title}</p>
      </div>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <p>{event.description}</p>
    </>
  );
}

export default EventDetailPage;
