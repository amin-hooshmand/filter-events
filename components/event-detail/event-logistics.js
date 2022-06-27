import Image from "next/image";
function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section>
      <div>
        <Image src={`/${image}`} width={200} height={200} alt={imageAlt} />
      </div>
      <ul>
        <time>{humanReadableDate}</time>
        <address>{addressText}</address>
      </ul>
    </section>
  );
}

export default EventLogistics;
